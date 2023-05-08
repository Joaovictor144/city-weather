import { useEffect, useMemo, useState } from "react";
import { api } from "../../api";
import { PresentData } from "../../components/PresentData/PresentData";


interface PositionProps {
  coords: {
    latitude: number
    longitude: number
  }
}

interface ErrorProps {
  message: string
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

export function ViewByLocation() {
  const [myLatitude, setMyLatitude] = useState(0);
  const [myLongitude, setMyLongitude] = useState(0);
  const [responseApi, setResponseApi] = useState<IResponse>();



  useEffect(() => {
    function handleLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        console.error("Geolocation not found, check if you have permission");
      }

      function showPosition(position: PositionProps) {
        setMyLatitude(position.coords.latitude);
        setMyLongitude(position.coords.longitude);
      }

      function showError(error: ErrorProps) {
        console.warn(`error: ${error.message}`);
      }
    }

    handleLocation()

  }, [])

  useMemo(async () => {
    if (myLatitude) {
      const response = await api.get('/', {
        params:{
          latitude: myLatitude,
          longitude: myLongitude
        }
      })

      setResponseApi(response.data as IResponse)
    }
  }, [myLatitude, myLongitude])



  return (
    <PresentData geoCode={responseApi?.geoCode} meteo={responseApi?.meteo}/>
  );
}