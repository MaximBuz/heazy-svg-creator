import {
  Button,
  ButtonGroup,
  Circle,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger as OrigPopoverTrigger,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { Ref, useRef } from 'react';
import { useAuth } from '../../contexts/Auth';
import { useDesign } from '../../contexts/Design';
import { useUserSpace } from '../../contexts/UserSpace';
const PopoverTrigger: React.FC<{ children: React.ReactNode }> = OrigPopoverTrigger;

export interface ISaveButtonProps {
  svgRef: Ref<SVGAElement | null>;
}

const SaveButton: React.FunctionComponent<ISaveButtonProps> = ({svgRef}) => {
  const { currentUser } = useAuth();
  const { onOpen } = useUserSpace();
  const { saveTemplate, design, waveState, bubbleState, cornerState, markerState } = useDesign();

  // Handle saving Template
  const nameRef = useRef(null);
  const { onClose: saveTemplateClose } = useDisclosure();
  async function handleSave() {
    if (currentUser) {
      let optionParameters;
      if (design.name === 'waves') optionParameters = waveState;
      if (design.name === 'bubble') optionParameters = bubbleState;
      if (design.name === 'corners') optionParameters = cornerState;
      if (design.name === 'marker') optionParameters = markerState;
      await saveTemplate(optionParameters, nameRef.current.value, currentUser.uid, design.id, svgRef);
    }
    onOpen();
  }
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Circle
          maxW="80px"
          maxH="80px"
          as={motion.button}
          justifyContent="center"
          alignItems="center"
          bgColor="#313640"
          p="2"
          borderWidth="5px"
          centerContent
          borderColor="#141820"
          // @ts-ignore
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
        >
          <Icon boxSize="5" viewBox="0 0 24 24" fill="white">
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M20.71,9.29l-6-6a1,1,0,0,0-.32-.21A1.09,1.09,0,0,0,14,3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10A1,1,0,0,0,20.71,9.29ZM9,5h4V7H9Zm6,14H9V16a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1Zm4-1a1,1,0,0,1-1,1H17V16a3,3,0,0,0-3-3H10a3,3,0,0,0-3,3v3H6a1,1,0,0,1-1-1V6A1,1,0,0,1,6,5H7V8A1,1,0,0,0,8,9h6a1,1,0,0,0,1-1V6.41l4,4Z"
            />
          </Icon>
        </Circle>
      </PopoverTrigger>
      <PopoverContent p={5} bgColor="rgb(29, 31, 39)" border="none" _focus={{ boxShadow: 'none' }}>
        <PopoverArrow bgColor="rgb(29, 31, 39)" />
        <PopoverCloseButton />
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="templateName">Give your template a name</FormLabel>
            <Input ref={nameRef} id="templateName" />
          </FormControl>
          <ButtonGroup display="flex" justifyContent="flex-end">
            <Button variant="outline" onClick={saveTemplateClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={currentUser ? handleSave : onOpen}>
              Save
            </Button>
          </ButtonGroup>
        </Stack>
      </PopoverContent>
    </Popover>
  );
};

export default SaveButton;
