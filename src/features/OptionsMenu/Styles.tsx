import { FlexProps, StackProps } from '@chakra-ui/react';

export const wrapperStyles: FlexProps = {
  minW: '320px',
  maxW: '320px',
  height: '100vh',
  bgColor: '#1c1f27',
  direction: 'column',
  boxShadow: 'dark-lg',
  p: '0',
  h: '100%',
  zIndex: 20,
  overflow: 'auto',
  sx: { '&::-webkit-scrollbar': { display: 'none' } },
};

export const contentWrapperStyles: StackProps = {
  flexGrow: 1,
  padding: 5,
  spacing: 4,
  scrollBehavior: 'smooth',
  overflow: 'auto',
  sx: { '&::-webkit-scrollbar': { display: 'none' } },
};

export const dimensionsButtonStyles: FlexProps = {
  w: '100%',
  h: '60px',
  bgColor: '#262a33',
  rounded: 10,
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 5,
  sx: { transition: '0.5s' },
  _hover: { background: '#2e3643', cursor: 'pointer' },
};

export const downloadSectionStyles: FlexProps = {
  minW: '320px',
  maxW: '320px',
  height: '70px',
  minH: '70px',
  zIndex: 20,
  bgColor: '#262a33',
  justifyContent: 'space-around',
  alignItems: 'center',
};
