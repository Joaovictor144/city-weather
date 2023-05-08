/* eslint-disable quotes */
import { IResponseCityInformation } from '@models/IResponseCityInformation';
import axios from 'axios';
import { ICityInformationService } from './ICityInformationService';

export class CityInformationService implements ICityInformationService{
  async execute(latitude: string, longitude: string): Promise<IResponse>{
    

    const meteo = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    
    const geoCode = await axios.get(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`);

    const response = {
      meteo: meteo.data,
      geoCode: geoCode.data
    };
   
    return response as IResponseCityInformation;

  }
}