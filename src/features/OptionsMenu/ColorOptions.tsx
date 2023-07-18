// React
import React, { memo } from 'react';

// Styles
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
} from '@chakra-ui/react';

// Components
import ColorPicker from 'react-color';
import rgbHex from 'rgb-hex';
import HideColorButton from './HideColorButton';
import { ISharedOptionsProps } from './types/OptionsMenu.types';

const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

const ColorOptions: React.FunctionComponent<ISharedOptionsProps> = memo(
  ({ state, setState }) => {
    return (
      <>
        {/* -------------- COLOR -------------- */}
        <Heading as="h3" size="xs" textTransform="uppercase">
          Color
        </Heading>

        {/* Backgound Color */}
        <Heading as="h4" size="xs" opacity={0.5}>
          Background
        </Heading>
        <HStack>
          <Popover>
            <HStack spacing={4}>
              <PopoverTrigger>
                <Circle
                  size="36px"
                  bgColor={state.bgColor}
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
                  value={state.bgColor.replace('#', '')}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      bgColor: `#${e.target.value}`,
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
                  color={state.bgColor}
                  onChange={(col) =>
                    setState((prev) => ({
                      ...prev,
                      bgColor:
                        '#' +
                        rgbHex(col.rgb.r, col.rgb.g, col.rgb.b, col.rgb.a),
                    }))
                  }
                  onColor
                  width="200px"
                ></ColorPicker>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <HideColorButton
            color={state.bgColor}
            setColor={(color) =>
              setState((prev) => ({ ...prev, bgColor: color }))
            }
          />
        </HStack>

        {/* Wave Start Color */}
        <Heading as="h4" size="xs" opacity={0.5}>
          Start color
        </Heading>
        <HStack>
          <Popover>
            <HStack spacing={4}>
              <PopoverTrigger>
                <Circle
                  size="36px"
                  bgColor={state.startColor}
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
                  value={state.startColor.replace('#', '')}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      startColor: `#${e.target.value}`,
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
                  color={state.startColor}
                  onChange={(col) =>
                    setState((prev) => ({
                      ...prev,
                      startColor:
                        '#' +
                        rgbHex(col.rgb.r, col.rgb.g, col.rgb.b, col.rgb.a),
                    }))
                  }
                  onColor
                  width="200px"
                ></ColorPicker>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <HideColorButton
            color={state.startColor}
            setColor={(color) =>
              setState((prev) => ({ ...prev, startColor: color }))
            }
          />
        </HStack>

        {/* Wave Start Color */}
        <Heading as="h4" size="xs" opacity={0.5}>
          End color
        </Heading>
        <HStack>
          <Popover>
            <HStack spacing={4}>
              <PopoverTrigger>
                <Circle
                  size="36px"
                  bgColor={state.endColor}
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
                  value={state.endColor.replace('#', '')}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      endColor: `#${e.target.value}`,
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
                  color={state.endColor}
                  onChange={(col) =>
                    setState((prev) => ({
                      ...prev,
                      endColor:
                        '#' +
                        rgbHex(col.rgb.r, col.rgb.g, col.rgb.b, col.rgb.a),
                    }))
                  }
                  onColor
                  width="200px"
                ></ColorPicker>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <HideColorButton
            color={state.endColor}
            setColor={(color) =>
              setState((prev) => ({ ...prev, endColor: color }))
            }
          />
        </HStack>
      </>
    );
  }
);

export default ColorOptions;
