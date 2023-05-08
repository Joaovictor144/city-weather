import { CityInformationService } from '@services/cityInformation/CityInformation.service';
import { Request, Response } from 'express';
import { container } from 'tsyringe';


export class CityInformationController {
  async handle(request: Request, response: Response): Promise<Response>{
    try{
      const { latitude, longitude } = request.query;

      const cityInformationService = container.resolve(CityInformationService);
      const cityInformation = await cityInformationService.execute(latitude as string, longitude as string);

      return response.status(200).json(cityInformation);
    }catch(error){
      return response.status(400).json(error);
    }
  }
}

export default new CityInformationController;