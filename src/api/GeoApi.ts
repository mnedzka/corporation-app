import { API_URL } from './config';
import { Geo } from '../typedef';

export const getGeo = (): Promise<Geo> => {
  return fetch(`${API_URL}/geo`)
    .then(res => res.json())
}
