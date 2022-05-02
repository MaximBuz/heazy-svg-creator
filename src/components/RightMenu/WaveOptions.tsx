import { Divider, Heading, TabList, Tabs, Tab } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';
import { IDesignModes } from '../../utils/types/designModes';

export interface IWaveOptionsProps {
  setSolid: Dispatch<SetStateAction<number>>;
  setSmooth: Dispatch<SetStateAction<number>>;
}

const WaveOptions: React.FunctionComponent<IWaveOptionsProps> = ({ setSolid, setSmooth }) => {
  return (
    <>
      <Heading as="h3" size="xs" textTransform="uppercase">
        Variants
      </Heading>

      {/* -------------- SOLID vs. OUTLINE -------------- */}
      <Tabs onChange={(index) => setSolid(index)} defaultIndex={0} isFitted variant="unstyled">
        <TabList>
          <Tab
            roundedTopLeft={10}
            roundedBottomLeft={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
          >
            Solid
          </Tab>
          <Tab
            roundedTopRight={10}
            roundedBottomRight={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
          >
            Outline
          </Tab>
        </TabList>
      </Tabs>

      {/* -------------- SMOOTH vs. PEAK -------------- */}
      <Tabs onChange={(index) => setSmooth(index)} defaultIndex={0} isFitted variant="unstyled">
        <TabList>
          <Tab
            roundedTopLeft={10}
            roundedBottomLeft={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
          >
            Smooth
          </Tab>
          <Tab
            roundedTopRight={10}
            roundedBottomRight={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
          >
            Edgy
          </Tab>
        </TabList>
      </Tabs>
      <Divider></Divider>
    </>
  );
};

export default WaveOptions;
