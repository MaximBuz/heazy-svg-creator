export const endpoint =
  process.env.API_URL || 'https://heazy-backend.herokuapp.com/graphql';

export const headers = (idToken: string) => {
  if (idToken)
    return {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + idToken,
    };
  return { 'Content-Type': 'application/json' };
};
