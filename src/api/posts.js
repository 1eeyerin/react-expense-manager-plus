import { JSON_SERVER_URL } from '@/constants';
import { axiosDelete, axiosGet, axiosPatch, axiosPost } from './requests';

export const getPosts = () => axiosGet({ url: `${JSON_SERVER_URL}/expenses` });

export const getPost = (id) =>
  axiosGet({ url: `${JSON_SERVER_URL}/expenses/${id}` });

export const createPost = (body) =>
  axiosPost({ url: `${JSON_SERVER_URL}/expenses`, body });

export const updatePost = (id, body) =>
  axiosPatch({ url: `${JSON_SERVER_URL}/expenses/${id}`, body });

export const deletePost = (id) =>
  axiosDelete({ url: `${JSON_SERVER_URL}/expenses/${id}` });
