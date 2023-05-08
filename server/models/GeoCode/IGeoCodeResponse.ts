import { Address } from './IAddress';

export interface IGeoCodeResponse {
  place_id: number
  licence: string
  powered_by: string
  osm_type: string
  osm_id: number
  lat: string
  lon: string
  display_name: string
  address: Address
  boundingbox: string[]
}
