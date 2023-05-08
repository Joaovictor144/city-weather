import { IResponseCityInformation } from '@models/IResponseCityInformation';

export interface ICityInformationService{
  execute(latitude: string, longitude: string):Promise<IResponseCityInformation>
}