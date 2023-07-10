import { Icon } from '@chakra-ui/react';
import React from 'react';

export interface ISliderIconWrapperProps {
  children: React.ReactNode;
  onClick: () => void;
  viewBox: string;
}

const SliderIconWrapper: React.FunctionComponent<ISliderIconWrapperProps> = ({
  onClick,
  children,
  viewBox,
}) => {
  return (
    <>
      <>
        <Icon
          onClick={onClick}
          boxSize="9"
          viewBox={viewBox}
          rounded="full"
          p="2"
          bg="#262e3a"
          transition="0.3s"
          _hover={{ background: '#373d48', cursor: 'pointer' }}
          fill="none"
        >
          {children}
        </Icon>
      </>
    </>
  );
};

export default SliderIconWrapper;
