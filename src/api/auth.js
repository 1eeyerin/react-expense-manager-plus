import { AUTH_URL } from '@/constants';
import { axiosGet, axiosPatch, axiosPost } from './requests';

export const registerUser = (data) =>
  axiosPost({ url: `${AUTH_URL}/register`, body: data });

export const loginUser = (data) =>
  axiosPost({ url: `${AUTH_URL}/login`, body: data });

export const getUser = () => axiosGet({ url: `${AUTH_URL}/user` });

export const updateProfile = (data, options) =>
  axiosPatch({ url: `${AUTH_URL}/profile`, body: data, options });
