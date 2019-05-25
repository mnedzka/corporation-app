import { API_URL } from './config';
import { Project } from '../typedef';

export const getProjects = (): Promise<Project[]> => {
  return fetch(`${API_URL}/projects`)
    .then(res => res.json())
}
