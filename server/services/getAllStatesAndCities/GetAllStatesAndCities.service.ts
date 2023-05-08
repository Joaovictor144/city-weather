
import { IGeoNamesResponse } from '@models/GeoNames/IGeoNamesResponse';
import { IResponseStatesAndCities } from '@models/IResponseStatesAndCities';
import { Normalize } from '@utils/Normalize';
import axios from 'axios';
import { IGetAllStatesAndCitiesService } from './IGetAllStatesAndCitiesService';

export class GetAllStatesAndCitiesService implements IGetAllStatesAndCitiesService {
  async execute(geonameId?: string | undefined): Promise<IResponseStatesAndCities> {
    if (geonameId) {
      const cidades = await axios.get(`http://www.geonames.org/childrenJSON?geonameId=${geonameId}&callback=listPlaces&style=long&noCacheIE=1683516208916`);

      const cidadesData: IGeoNamesResponse = Normalize.response(cidades.data);

      const response = {
        cities: cidadesData.geonames.map(d => {
          return {
            name: d.toponymName,
            latitude: d.lat,
            longitude: d.lng
          };
        })
      };

      return response;
    } else {
      
      const estados = await axios.get('http://www.geonames.org/childrenJSON?geonameId=3469034&callback=listPlaces&style=long&noCacheIE=1683516208916');

      const estadosData: IGeoNamesResponse = Normalize.response(estados.data);
     
      const response = {
        states: estadosData.geonames.map(d => {
          return {
            name: d.toponymName,
            geonameId: d.geonameId
          };
        }),
      };

      
      return response;

    }
  }
}