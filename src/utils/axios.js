import { isFilled } from './common';

export const createAxiosRequestOptions = ({
  headers = {},
  body,
  params,
} = {}) => {
  const isFormData = body instanceof FormData;

  const hasBodyData = isFilled(body) || isFormData;

  const options = {
    headers: {
      'Content-Type': 'application/json',
      ...(isFilled(headers) && headers),
    },
    ...(isFilled(params) && { params }),
    ...(hasBodyData && { body }),
  };

  if (isFormData) {
    delete options.headers['Content-Type'];
  }

  return options;
};
