import { useDisclosure } from '@chakra-ui/react';
import React, { useContext } from 'react';

interface IUserSpaceDrawer {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const UserSpace = React.createContext(null);

export function useUserSpace() {
  return useContext<IUserSpaceDrawer>(UserSpace);
}

export function UserSpaceProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const value: IUserSpaceDrawer = { isOpen, onOpen, onClose };

  return <UserSpace.Provider value={value}>{children}</UserSpace.Provider>;
}
