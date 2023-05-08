import cityInformationController from 'controller/CityInformationController';
import GetAllStatesAndCitiesController from 'controller/GetAllStatesAndCitiesController';
import { Router } from 'express';

const router = Router();

router.get('/', cityInformationController.handle);
router.get('/statesandcities', GetAllStatesAndCitiesController.handle);

export { router };
