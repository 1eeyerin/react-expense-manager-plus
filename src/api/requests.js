import { getTokenFromLocalStorage, isFilled } from '@/utils';
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

const createAxiosRequestOptions = ({
  headers = {},
  useToken = false,
  body,
  params,
  ...props
} = {}) => {
  const token = getTokenFromLocalStorage();
  const isFormData = body instanceof FormData;

  const hasBodyData = isFilled(body) || isFormData;

  const options = {
    headers: {
      'Content-Type': 'application/json',
      ...(useToken && { Authorization: `Bearer ${token}` }),
      ...(isFilled(headers) && headers),
    },
    ...(isFilled(params) && { params }),
    ...(hasBodyData && { body }),
    ...props,
  };

  if (isFormData) {
    delete options.headers['Content-Type'];
  }

  return options;
};
