import { createAxiosRequestOptions } from '@/utils';
import apiClient from '.';

export const axiosGet = async ({ url, ...customOptions }) => {
  const options = createAxiosRequestOptions(customOptions);

  const response = await apiClient.get(url, options);
  return response.data;
};

export const axiosPost = async ({ url, ...customOptions }) => {
  const { body, ...options } = createAxiosRequestOptions(customOptions);
  const response = await apiClient.post(url, body, options);
  return response.data;
};

export const axiosPatch = async ({ url, ...customOptions }) => {
  const { body, ...options } = createAxiosRequestOptions(customOptions);
  const response = await apiClient.patch(url, body, options);
  return response.data;
};

export const axiosDelete = async ({ url, ...customOptions }) => {
  const options = createAxiosRequestOptions(customOptions);
  const response = await apiClient.delete(url, options);
  return response.data;
};
