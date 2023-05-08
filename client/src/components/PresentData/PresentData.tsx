import ReactLoading from 'react-loading';
import Typewriter from 'typewriter-effect';
import * as S from './PresentData.style';


interface IResponse {
    geoCode?: {
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
    meteo?: {
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
export function PresentData({geoCode,meteo}: IResponse) {
  return (
    <S.Container>
      {geoCode ?
        //<p>${responseApi?.geoCode.address.city}, ${responseApi?.geoCode.address.municipality}, ${responseApi?.geoCode.address.state_district}, ${responseApi?.geoCode.address.state},  ${responseApi?.geoCode.address.region}, ${responseApi?.geoCode.address.postcode}</p>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(`<h2>Você buscou pelas informações de ${geoCode?.address.city} - (${geoCode?.address.state}) </h2>`)
              .typeString(`<p>${geoCode.address.city}, ${geoCode.address.municipality}, ${geoCode.address.state_district}, ${geoCode.address.state},  ${geoCode.address.region}, ${geoCode.address.postcode}</p>`)
              .pauseFor(2500)
              .start()
              .typeString(`<h2> A temperatura da cidade no momento e de aproximadamente ${meteo && Math.round(meteo?.current_weather.temperature)}°, com ventos de aproximadamente ${meteo && Math.round(meteo?.current_weather.windspeed)}km/h</h2>`)
          }}
        />

        : <ReactLoading type="spin" height={30} width={50} />}


    </S.Container>
  )
}