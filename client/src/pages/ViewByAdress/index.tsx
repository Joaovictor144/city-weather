import { useMemo, useState } from "react";
import { api } from "../../api";
import { PresentData } from "../../components/PresentData/PresentData";
import * as S from "./ViewByAddress.style";

interface StatesProps {
  name: string;
  geonameId: number;
}

interface CitiesProps {
  name: string;
  latitude: string;
  longitude: string;
}

interface IResponse {
  geoCode: {
    place_id: number
    licence: string
    powered_by: string
    osm_type: string
    osm_id: number
    lat: string
    lon: string
    display_name: string
    address: {
      road: string
      suburb: string
      city: string
      municipality: string
      state_district: string
      state: string
      region: string
      postcode: string
      country: string
      country_code: string
    }
    boundingbox: string[]
  }
  meteo: {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    current_weather: {
      temperature: number
      windspeed: number
      winddirection: number
      weathercode: number
      is_day: number
      time: string
    }
  }
}

export function ViewByAdress() {
  const [states, setstates] = useState<StatesProps[]>([]);
  const [cities, setcities] = useState<CitiesProps[]>([]);
  const [statesSelect, setstatesSelect] = useState('');
  const [citieSelect, setcitieSelect] = useState('');
  const [responseApi, setResponseApi] = useState<IResponse>();
  const [isRequest, setIsRequest] = useState(false);

  useMemo(async () => {
    const { data } = await api.get('/statesandcities')

    setstates(data.states);
  }, [])

 

  async function handleEstadoChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setcities([]);
    const estado = event.target.value;
    setstatesSelect(estado);
    const { data } = await api.get(`/statesandcities?geonameId=${estado}`)
    setcities(data.cities);
  }

  function handleCidadeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const cidade = event.target.value;
    setcitieSelect(cidade);
  }

  async function handleSelecionarClick() {
    const locateCity = cities.find(c => c.name === citieSelect);
    if(locateCity){
      setIsRequest(true);
      const response = await api.get('/', {
        params: {
          latitude: locateCity?.latitude,
          longitude: locateCity?.longitude
  
        }
      })
  
      setResponseApi(response.data as IResponse)

    }
         
  }

  function handleClear(){
    setResponseApi(undefined);
    setIsRequest(false);
    setstatesSelect('');
    setcitieSelect('');
  }
  return (
    <S.Container>
      <div>
        <S.Label>
          Estado:
          <select value={statesSelect} onChange={handleEstadoChange} disabled={states?.length <= 0}>
            <option value="">Selecione um estado</option>
            {states?.length > 0 && states?.map(state => (
              <option key={state.geonameId} value={state.geonameId}>
                {state.name}
              </option>
            ))}
          </select>
        </S.Label>
        
        <S.Label>
          Cidade:
          <select value={citieSelect} onChange={handleCidadeChange} disabled={cities?.length <= 0}>
            <option value="">Selecione uma cidade</option>
            {cities?.length > 0 && cities?.map(city => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </S.Label>
        <br />
        <button onClick={handleSelecionarClick} disabled={!citieSelect}>Selecionar</button>
        {citieSelect && <button className="clear" onClick={handleClear}>limpar </button>}
      </div>
      
      <div>
        {isRequest && <PresentData geoCode={responseApi?.geoCode} meteo={responseApi?.meteo} />}
      </div>
    </S.Container>
  );
}