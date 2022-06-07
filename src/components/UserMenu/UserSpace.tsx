import { RaceBy } from '@uiball/loaders';
import React from 'react';
import { useAuth } from '../../contexts/Auth';
import { useUserByFirebaseIdQuery } from '../../graphql/generated';
import { endpoint, headers } from '../../utils/apiConfig';

export interface IUserSpaceProps {}

const UserSpace: React.FunctionComponent<IUserSpaceProps> = (props) => {
  const { currentUser } = useAuth();
  const userQuery = useUserByFirebaseIdQuery({ endpoint, fetchParams: { headers } }, { id: currentUser.uid });

  if (userQuery.isLoading) {
    return <RaceBy size={150} lineWeight={5} speed={1.4} color="white" />;
  }
  if (userQuery.isError) {
    return <>Error fetching user</>;
  }
  return <p>{userQuery.isSuccess && userQuery.data?.user?.userName}</p>;
};

export default UserSpace;
