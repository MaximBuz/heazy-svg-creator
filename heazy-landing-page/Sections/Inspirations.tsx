import { Flex } from '@chakra-ui/react';
import React from 'react';
import SectionDivider from '../Components/SectionDivider';
import OverviewBG from '../public/overview-bg.png';

export interface IInspirationsProps {}

const Inspirations: React.FunctionComponent<IInspirationsProps> = (props) => {
  return (
    <Flex
      // backgroundImage={` url('${OverviewBG.src}')`}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      backgroundSize="contain"
      mt="10"
      direction="column"
      width="100%"
      justifyContent="flex-start"
      alignItems="center"
      textAlign="center"
      gap="50px"
      height="75vh"
    >
      <SectionDivider text="Inspirations"/>
    </Flex>
  );
};

export default Inspirations;
