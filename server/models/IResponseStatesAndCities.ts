export interface IResponseStatesAndCities {
  states?: Array<{
    name: string;
    geonameId: number;
  }>
  cities?: Array<{
    name: string;
    latitude: string;
    longitude: string;
  }>
  empty?: []
}