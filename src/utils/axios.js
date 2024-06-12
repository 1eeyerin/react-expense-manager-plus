import { isFilled } from './common';

export const createAxiosRequestOptions = ({
  headers = {},
  body,
  params,
} = {}) => {
  const isFormData = body instanceof FormData;

  const options = {
    headers: {
      'Content-Type': 'application/json',
      ...(isFilled(headers) && headers),
    },
    ...(isFilled(params) && { params }),
    ...(isFilled(body) && { body }),
  };

  if (isFormData) {
    delete options.headers['Content-Type'];
  }

  return options;
};
