import { JSON_SERVER_URL } from '@/constants';
import { axiosGet } from './requests';

export const getPosts = (options) =>
  axiosGet({ url: `${JSON_SERVER_URL}/expenses`, ...options });
