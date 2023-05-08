import { GetAllStatesAndCitiesService } from '@services/getAllStatesAndCities/GetAllStatesAndCities.service';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class GetAllStatesAndCitiesController {
  async handle(request:Request, response:Response): Promise<Response>{
    try{
      const {geonameId} = request.query;
      const getAllStateAndCitiesService = container.resolve(GetAllStatesAndCitiesService);
      if(geonameId){
        const getAllStateAndCities = await getAllStateAndCitiesService.execute(geonameId as string);

        return response.status(200).json(getAllStateAndCities);
      }else {
        const getAllStateAndCities = await getAllStateAndCitiesService.execute();

        return response.status(200).json(getAllStateAndCities);
      }
    }catch(error){
      return response.status(400).json(error);
    }
  }
}

export default new GetAllStatesAndCitiesController;