import { AUTH_URL } from '@/constants';
import { axiosGet, axiosPatch, axiosPost } from './requests';

export const registerUser = (body) =>
  axiosPost({ url: `${AUTH_URL}/register`, body, useToken: true });

export const loginUser = (body) =>
  axiosPost({ url: `${AUTH_URL}/login`, body, useToken: true });

export const getUser = () =>
  axiosGet({ url: `${AUTH_URL}/user`, useToken: true });

export const updateProfile = (body) =>
  axiosPatch({ url: `${AUTH_URL}/profile`, body, useToken: true });
