import axios from "axios";
import { IFetchResponse } from '../api/unsplash.types'



const API_KEY = '2FsS1p8sXkitUA7gglTTe6Gkg1tnlKqK1lv3V_d-mEE';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async (query: string, page: number = 1): Promise<IFetchResponse>  => {
  const { data } = await axios.get(`search/photos?query=${query}&page=${page}`);

  return data;
};