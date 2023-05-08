import { IResponseStatesAndCities } from '@models/IResponseStatesAndCities';

export interface IGetAllStatesAndCitiesService{
  execute(geonameId?:string): Promise<IResponseStatesAndCities>
}