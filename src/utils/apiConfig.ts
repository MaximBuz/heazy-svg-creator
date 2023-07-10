export const endpoint = 'https://heazy-backend.herokuapp.com/graphql';
export const headers = (idToken: string) => {
  if (idToken)
    return {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + idToken,
    };
  return { 'Content-Type': 'application/json' };
};
