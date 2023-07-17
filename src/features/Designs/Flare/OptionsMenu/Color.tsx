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
  Select,
  Icon,
} from '@chakra-ui/react';

// Components
import ColorPicker from 'react-color';
import rgbHex from 'rgb-hex';
import HideColorButton from '../../../OptionsMenu/HideColorButton';
import { useDesign } from '../../../../contexts/DesignContext';
import { TLensColorModes } from '../types/FlareProps.types';

const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

const Color: React.FunctionComponent = memo(() => {
  const { flareState: state, setFlareState: setState } = useDesign();

  return (
    <>
      <Heading as="h3" size="xs" textTransform="uppercase">
        Color
      </Heading>

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
                      '#' + rgbHex(col.rgb.r, col.rgb.g, col.rgb.b, col.rgb.a),
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

      <Heading as="h4" size="xs" opacity={0.5}>
        Background-Light color
      </Heading>
      <HStack>
        <Popover>
          <HStack spacing={4}>
            <PopoverTrigger>
              <Circle
                size="36px"
                bgColor={state.bgLightColor}
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
                value={state.bgLightColor.replace('#', '')}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    bgLightColor: `#${e.target.value}`,
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
                color={state.bgLightColor}
                onChange={(col) =>
                  setState((prev) => ({
                    ...prev,
                    bgLightColor:
                      '#' + rgbHex(col.rgb.r, col.rgb.g, col.rgb.b, col.rgb.a),
                  }))
                }
                onColor
                width="200px"
              ></ColorPicker>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <HideColorButton
          color={state.bgLightColor}
          setColor={(color) =>
            setState((prev) => ({ ...prev, bgLightColor: color }))
          }
        />
      </HStack>

      <Heading as="h4" size="xs" opacity={0.5}>
        Iris color
      </Heading>
      <HStack>
        <Popover>
          <HStack spacing={4}>
            <PopoverTrigger>
              <Circle
                size="36px"
                bgColor={state.irisColor}
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
                value={state.irisColor.replace('#', '')}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    irisColor: `#${e.target.value}`,
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
                color={state.irisColor}
                onChange={(col) =>
                  setState((prev) => ({
                    ...prev,
                    irisColor:
                      '#' + rgbHex(col.rgb.r, col.rgb.g, col.rgb.b, col.rgb.a),
                  }))
                }
                onColor
                width="200px"
              ></ColorPicker>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <HideColorButton
          color={state.irisColor}
          setColor={(color) =>
            setState((prev) => ({ ...prev, irisColor: color }))
          }
        />
      </HStack>

      <Heading as="h4" size="xs" opacity={0.5}>
        Lens color
      </Heading>
      <HStack>
        <Popover>
          <HStack spacing={4}>
            <PopoverTrigger>
              <Circle
                size="36px"
                bgColor={state.irisColor}
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
                value={state.lensColor.replace('#', '')}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    lensColor: `#${e.target.value}`,
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
                color={state.lensColor}
                onChange={(col) =>
                  setState((prev) => ({
                    ...prev,
                    lensColor:
                      '#' + rgbHex(col.rgb.r, col.rgb.g, col.rgb.b, col.rgb.a),
                  }))
                }
                onColor
                width="200px"
              ></ColorPicker>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <HideColorButton
          color={state.lensColor}
          setColor={(color) =>
            setState((prev) => ({ ...prev, lensColor: color }))
          }
        />
      </HStack>

      <Heading as="h4" size="xs" opacity={0.5}>
        Lens color
      </Heading>
      <Select
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            lensColorMode: e.target.value as TLensColorModes,
          }))
        }
        cursor="pointer"
        icon={
          <Icon
            cursor="pointer"
            viewBox="0 0 24 24"
            fill="white"
            transition="0.3s"
            opacity={0.5}
            _hover={{ opacity: 0.8 }}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M7,6H6V3A1,1,0,0,0,4,3V6H3A1,1,0,0,0,3,8H7A1,1,0,0,0,7,6ZM5,10a1,1,0,0,0-1,1V21a1,1,0,0,0,2,0V11A1,1,0,0,0,5,10Zm7,8a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V19A1,1,0,0,0,12,18Zm9-8H20V3a1,1,0,0,0-2,0v7H17a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-2,4a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V15A1,1,0,0,0,19,14Zm-5,0H13V3a1,1,0,0,0-2,0V14H10a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z"
            />
          </Icon>
        }
        placeholder="Lens Color Mode"
      >
        <option value={'normal'}>normal</option>
        <option value={'screen'}>screen</option>
        <option value={'darken'}>darken</option>
        <option value={'color-dodge'}>color-dodge</option>
        <option value={'hard-light'}>hard-light</option>
        <option value={'soft-light'}>soft-light</option>
      </Select>
    </>
  );
});

export default Color;
