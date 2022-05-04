import { ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Heading, Tabs, TabList, Tab } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';

export interface IDirectionProps {
  setDirection: Dispatch<SetStateAction<number>>; 
};

const Direction: React.FunctionComponent<IDirectionProps> = ({
  setDirection
}) => {
  return (<>
  {/* -------------- DIRECTION -------------- */}
  <Heading as="h3" size="xs" textTransform="uppercase">
        Direction
      </Heading>

      <Tabs onChange={(index) => setDirection(index)} defaultIndex={0} isFitted variant="unstyled">
        <TabList>
          <Tab
            roundedTopLeft={10}
            roundedBottomLeft={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
          >
            <ChevronDownIcon boxSize={8} />
          </Tab>
          <Tab
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
          >
            <ChevronUpIcon boxSize={8} />
          </Tab>
          <Tab
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
          >
            <ChevronLeftIcon boxSize={8} />
          </Tab>
          <Tab
            roundedTopRight={10}
            roundedBottomRight={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
          >
            <ChevronRightIcon boxSize={8} />
          </Tab>
        </TabList>
    </Tabs>
  </>);
};

export default Direction;