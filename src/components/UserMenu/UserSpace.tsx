import { RaceBy } from '@uiball/loaders';
import React from 'react';
import { useAuth } from '../../contexts/Auth';
import { useUserByFirebaseIdQuery } from '../../graphql/generated';

export interface IUserSpaceProps {}

const UserSpace: React.FunctionComponent<IUserSpaceProps> = (props) => {
  const { currentUser } = useAuth();
  const userQuery = useUserByFirebaseIdQuery(
    {
      endpoint: 'http://localhost:4000/graphql',
      fetchParams: {
        headers: { 'Content-Type': 'application/json' },
      },
    },
    { id: currentUser.uid }
  );
  if (userQuery.isLoading) {
    return <RaceBy size={150} lineWeight={5} speed={1.4} color="white" />;
  }
  if (userQuery.isError) {
    return <>Error fetching user</>;
  }
  return <p>{userQuery.data.user.firstName}</p>;
};

export default UserSpace;
