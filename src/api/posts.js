import { JSON_SERVER_URL } from '@/constants';
import { axiosGet, axiosPost } from './requests';

export const getPosts = (options) =>
  axiosGet({ url: `${JSON_SERVER_URL}/expenses`, ...options });

export const createPost = (body, options) =>
  axiosPost({ url: `${JSON_SERVER_URL}/expenses`, body, ...options });
