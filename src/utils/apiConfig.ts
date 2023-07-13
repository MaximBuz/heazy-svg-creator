import { environment } from './environment';

export const endpoint = environment.apiUrl;

export const headers = (idToken: string) => {
  if (idToken)
    return {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + idToken,
    };
  return { 'Content-Type': 'application/json' };
};
