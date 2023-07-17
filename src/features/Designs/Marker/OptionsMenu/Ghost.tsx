import {
  Heading,
  HStack,
  Popover,
  PopoverTrigger as OrigPopoverTrigger,
  Circle,
  InputGroup,
  InputLeftElement,
  Input,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Tabs,
  TabList,
  Tab,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import ColorPicker from 'react-color';
import rgbHex from 'rgb-hex';
import HideColorButton from '../../../OptionsMenu/HideColorButton';
import GhostLeft from './Icons/GhostLeft';
import GhostRight from './Icons/GhostRight';
import { useDesign } from '../../../../contexts/DesignContext';

const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

const Ghost: React.FunctionComponent = () => {
  const { markerState: state, setMarkerState: setState } = useDesign();
  return (
    <>
      {/* -------------- GHOST -------------- */}
      <Heading as="h3" size="xs" textTransform="uppercase">
        Ghost
      </Heading>

      {/* ------ GHOST? ------ */}
      <Tabs
        onChange={(index) =>
          setState((prev) => ({ ...prev, ghost: index === 0 ? false : true }))
        }
        defaultIndex={state.ghost === false ? 0 : 1}
        isFitted
        variant="unstyled"
      >
        <TabList>
          <Tab
            roundedTopLeft={10}
            roundedBottomLeft={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
            display="flex"
            flexDirection="column"
            gap="5px"
          >
            <Icon boxSize="10" viewBox="0 0 335 287" color="white">
              <GhostLeft />
            </Icon>
          </Tab>
          <Tab
            roundedTopRight={10}
            roundedBottomRight={10}
            bgColor="#262a33"
            _hover={{ background: '#2e3643', cursor: 'pointer' }}
            _selected={{ background: '#363e4a' }}
            display="flex"
            flexDirection="column"
            gap="5px"
          >
            <Icon boxSize="10" viewBox="0 0 407 360" color="white">
              <GhostRight />
            </Icon>
          </Tab>
        </TabList>
      </Tabs>

      {/* Ghost Start Color */}
      <Heading as="h4" size="xs" opacity={0.5}>
        Start color
      </Heading>
      <HStack>
        <Popover>
          <HStack spacing={4}>
            <PopoverTrigger>
              <Circle
                size="36px"
                bgColor={state.ghostStartColor}
                boxShadow="0 0 0 1px #52555A"
                as="button"
                sx={{ transition: '0.3s' }}
                _hover={{ boxShadow: '0 0 0 2px #d0d0d0' }}
              ></Circle>
            </PopoverTrigger>
            <InputGroup>
              <InputLeftElement
                opacity={0.7}
                pointerEvents="none"
                children="#"
              />
              <Input
                value={state.ghostStartColor.replace('#', '')}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    ghostStartColor: `#${e.target.value}`,
                  }))
                }
              />
            </InputGroup>
          </HStack>
          <PopoverContent
            rootProps={{ style: { right: 0 } }}
            width="fit-content"
          >
            <PopoverArrow></PopoverArrow>
            <PopoverBody>
              <ColorPicker
                color={state.ghostStartColor}
                onChange={(col) =>
                  setState((prev) => ({
                    ...prev,
                    ghostStartColor:
                      '#' + rgbHex(col.rgb.r, col.rgb.g, col.rgb.b, col.rgb.a),
                  }))
                }
                /* WE NEED OPACITY / ALPHA TOO */
                onColor
                width="200px"
              ></ColorPicker>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <HideColorButton
          color={state.ghostStartColor}
          setColor={(color: string) =>
            setState((prev) => ({ ...prev, ghostStartColor: color }))
          }
        />
      </HStack>

      {/* Ghost End Color */}
      <Heading as="h4" size="xs" opacity={0.5}>
        End color
      </Heading>
      <HStack>
        <Popover>
          <HStack spacing={4}>
            <PopoverTrigger>
              <Circle
                size="36px"
                bgColor={state.ghostEndColor}
                boxShadow="0 0 0 1px #52555A"
                as="button"
                sx={{ transition: '0.3s' }}
                _hover={{ boxShadow: '0 0 0 2px #d0d0d0' }}
              ></Circle>
            </PopoverTrigger>
            <InputGroup>
              <InputLeftElement
                opacity={0.7}
                pointerEvents="none"
                children="#"
              />
              <Input
                value={state.ghostEndColor.replace('#', '')}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    ghostEndColor: `#${e.target.value}`,
                  }))
                }
              />
            </InputGroup>
          </HStack>
          <PopoverContent
            rootProps={{ style: { right: 0 } }}
            width="fit-content"
          >
            <PopoverArrow></PopoverArrow>
            <PopoverBody>
              <ColorPicker
                color={state.ghostEndColor}
                onChange={(col) =>
                  setState((prev) => ({
                    ...prev,
                    ghostEndColor:
                      '#' + rgbHex(col.rgb.r, col.rgb.g, col.rgb.b, col.rgb.a),
                  }))
                }
                /* WE NEED OPACITY / ALPHA TOO */
                onColor
                width="200px"
              ></ColorPicker>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <HideColorButton
          color={state.ghostEndColor}
          setColor={(col: string) =>
            setState((prev) => ({ ...prev, ghostEndColor: col }))
          }
        />
      </HStack>
    </>
  );
};

export default Ghost;
