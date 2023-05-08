import { IGeoCodeResponse } from './GeoCode/IGeoCodeResponse';
import { IMeteoResponse } from './Meteo/IMeteoResponse';

export interface IResponseCityInformation{
  geoCode: IGeoCodeResponse
  meteo: IMeteoResponse
}