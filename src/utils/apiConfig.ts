export const endpoint = 'http://localhost:4000/graphql';
export const headers = (idToken: string) => {
  if (idToken) return { 'Content-Type': 'application/json', Authorization: 'Bearer ' + idToken };
  return { 'Content-Type': 'application/json' };
};
