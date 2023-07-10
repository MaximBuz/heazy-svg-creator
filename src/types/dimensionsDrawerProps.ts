import { Dispatch, SetStateAction } from 'react';

export interface IDimensionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  drawerButtonRef: any;
  setHeight: Dispatch<SetStateAction<number>>;
  setWidth: Dispatch<SetStateAction<number>>;
  height: number;
  width: number;
}
