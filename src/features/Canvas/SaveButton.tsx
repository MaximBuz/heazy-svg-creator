// React
import React, { Ref, useState } from 'react';

// Styles
import {
  Button,
  Circle,
  FormControl,
  HStack,
  Icon,
  Input,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger as OrigPopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';

// Contexts
import { useAuth } from '../../contexts/Auth';
import { useDesign } from '../../contexts/Design';
import { useUserSpace } from '../../contexts/UserSpace';
import { CloseIcon } from '@chakra-ui/icons';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../../firebase';
const PopoverTrigger: React.FC<{ children: React.ReactNode }> = OrigPopoverTrigger;

export interface ISaveButtonProps {
  svgRef: Ref<SVGAElement | null>;
  CircleStyles: any;
}

const SaveButton: React.FunctionComponent<ISaveButtonProps> = ({ svgRef, CircleStyles }) => {
  const { currentUser } = useAuth();
  const { onOpen: openUserSpace } = useUserSpace();
  const { saveTemplate, design, waveState, bubbleState, cornerState, markerState, isolinesState, flareState } = useDesign();

  // Handle saving Template
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [name, setName] = useState<string>('');
  async function handleSave() {
    onClose();
    if (currentUser) {
      let optionParameters;
      if (design.name === 'waves') optionParameters = waveState;
      if (design.name === 'bubble') optionParameters = bubbleState;
      if (design.name === 'corners') optionParameters = cornerState;
      if (design.name === 'marker') optionParameters = markerState;
      if (design.name === 'isolines') optionParameters = isolinesState;
      if (design.name === 'flare') optionParameters = flareState;
      try {
        await saveTemplate(optionParameters, name, currentUser.uid, design.id, svgRef);
      } catch (err) {
        console.log(err);
      }
    }
    setName('');
    openUserSpace();
  }

  function handleUnauthorizedSave () {
    logEvent(analytics, 'unauthorized_save_template', { user: currentUser, design });
    openUserSpace();
  }
  return (
    <Popover isLazy isOpen={isOpen} placement="left">
      <PopoverTrigger>
        <Circle
          title="Save as a template"
          as="button"
          onClick={() => (currentUser ? (onToggle()) : handleUnauthorizedSave())}
          {...CircleStyles}
        >
          <Icon boxSize="5" viewBox="0 0 24 24" fill="white">
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M20.71,9.29l-6-6a1,1,0,0,0-.32-.21A1.09,1.09,0,0,0,14,3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10A1,1,0,0,0,20.71,9.29ZM9,5h4V7H9Zm6,14H9V16a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1Zm4-1a1,1,0,0,1-1,1H17V16a3,3,0,0,0-3-3H10a3,3,0,0,0-3,3v3H6a1,1,0,0,1-1-1V6A1,1,0,0,1,6,5H7V8A1,1,0,0,0,8,9h6a1,1,0,0,0,1-1V6.41l4,4Z"
            />
          </Icon>
        </Circle>
      </PopoverTrigger>
      <PopoverContent p={5} bgColor="#2D3748" border="none" _focus={{ boxShadow: 'none' }}>
        <PopoverArrow bgColor="#2D3748" />
        <HStack spacing={4}>
          <CloseIcon
            as="button"
            onClick={onClose}
            cursor="pointer"
            opacity={0.5}
            _hover={{ opacity: 1 }}
          ></CloseIcon>
          <FormControl>
            <Input placeholder="Template name" onChange={(e) => setName(e.target.value)} id="templateName" />
          </FormControl>
          <Button
            colorScheme="blue"
            isDisabled={name.length < 3}
            onClick={() => {
              currentUser ? handleSave() : openUserSpace();
            }}
          >
            Save
          </Button>
        </HStack>
      </PopoverContent>
    </Popover>
  );
};

export default SaveButton;
