import { AUTH_URL } from '@/constants';
import { axiosGet, axiosPatch, axiosPost } from './requests';

export const registerUser = (data) =>
  axiosPost({ url: `${AUTH_URL}/register`, body: data, useToken: true });

export const loginUser = (data) =>
  axiosPost({ url: `${AUTH_URL}/login`, body: data, useToken: true });

export const getUser = () =>
  axiosGet({ url: `${AUTH_URL}/user`, useToken: true });

export const updateProfile = (data, options) =>
  axiosPatch({
    url: `${AUTH_URL}/profile`,
    body: data,
    options,
    useToken: true,
  });
