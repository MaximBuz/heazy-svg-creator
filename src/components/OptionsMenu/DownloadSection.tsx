import { DownloadIcon } from '@chakra-ui/icons';
import {
  Flex,
  Stack,
  Button,
  Popover,
  IconButton,
  Icon,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  HStack,
} from '@chakra-ui/react';
import React, { Ref } from 'react';
import {
  downloadSVGAsText,
  downloadSvgAsPng,
  downloadSvgAsReact,
  downloadSvgAsReactTS,
} from '../../Utilities/Helpers/downloadBlob';
import { downloadSectionStyles } from './Styles';

export interface IDownloadSectionProps {
  svgRef: Ref<SVGAElement | null>;
  toast: any;
}

const DownloadSection: React.FunctionComponent<IDownloadSectionProps> = ({ svgRef, toast }) => {
  return (
    <Flex {...downloadSectionStyles}>
      <Stack direction="row" spacing={2}>
        <Button
          leftIcon={<DownloadIcon />}
          onClick={() => downloadSVGAsText(svgRef)}
          colorScheme="blue"
          variant="solid"
        >
          Download SVG
        </Button>
        <Button onClick={() => downloadSvgAsPng(svgRef)} colorScheme="gray" variant="outline">
          PNG
        </Button>

        <Popover gutter={15}>
          {/* @ts-ignore */}
          <PopoverTrigger>
            <IconButton
              icon={
                <Icon viewBox="0 0 24 24">
                  <path
                    fill="white"
                    d="M6,6A2,2,0,0,1,8,4,1,1,0,0,0,8,2,4,4,0,0,0,4,6V9a2,2,0,0,1-2,2,1,1,0,0,0,0,2,2,2,0,0,1,2,2v3a4,4,0,0,0,4,4,1,1,0,0,0,0-2,2,2,0,0,1-2-2V15a4,4,0,0,0-1.38-3A4,4,0,0,0,6,9Zm16,5a2,2,0,0,1-2-2V6a4,4,0,0,0-4-4,1,1,0,0,0,0,2,2,2,0,0,1,2,2V9a4,4,0,0,0,1.38,3A4,4,0,0,0,18,15v3a2,2,0,0,1-2,2,1,1,0,0,0,0,2,4,4,0,0,0,4-4V15a2,2,0,0,1,2-2,1,1,0,0,0,0-2Z"
                  />
                </Icon>
              }
              colorScheme="gray"
              variant="outline"
              aria-label="Download JavaScript Snippet"
            />
          </PopoverTrigger>
          <PopoverContent _focus={{ boxShadow: 'none' }}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Copy Snippet to Clipboard</PopoverHeader>
            <PopoverBody>
              <HStack justifyContent="space-between">
                <Button
                  flex="0.5"
                  onClick={() => {
                    downloadSvgAsReact(svgRef);
                    toast({ title: 'Copied to clipboard!', status: 'success', isClosable: true });
                  }}
                  colorScheme="gray"
                  variant="outline"
                >
                  React
                </Button>
                <Button
                  flex="1"
                  onClick={() => {
                    downloadSvgAsReactTS(svgRef);
                    toast({ title: 'Copied to clipboard!', status: 'success', isClosable: true });
                  }}
                  colorScheme="gray"
                  variant="outline"
                >
                  React TypeScript
                </Button>
              </HStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Stack>
    </Flex>
  );
};

export default DownloadSection;
