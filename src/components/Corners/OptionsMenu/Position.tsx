// Layout
import {
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  HStack,
  Switch,
} from '@chakra-ui/react';

// Icons
import { ICornerPositionProps } from '../../../Types/cornerProps';
import { ICornerPositionSetterProps } from '../../../Types/cornerSetterProps';

export default function Position({
  topLeftCorner,
  topRightCorner,
  bottomLeftCorner,
  bottomRightCorner,
  mirror,
  setTopLeftCorner,
  setTopRightCorner,
  setBottomLeftCorner,
  setBottomRightCorner,
  setMirror,
}: ICornerPositionProps & ICornerPositionSetterProps) {
  return (
    <>
      <Heading as="h3" size="xs" textTransform="uppercase">
        Position
      </Heading>

       {/* CORNER CHECKBOXES */}
      <CheckboxGroup>
        <Flex justifyContent="space-between">

          <Flex direction="column" gap="10px">
            <Checkbox isChecked={topLeftCorner} onChange={
              () => {setTopLeftCorner((topLeftCorner)=> !topLeftCorner)}
            }>Top left</Checkbox>
             <Checkbox isChecked={bottomLeftCorner} onChange={
              () => {setBottomLeftCorner((bottomLeftCorner)=> !bottomLeftCorner)}
            }>Bottom left</Checkbox>
            
          </Flex>
          
          <Flex direction="column" gap="10px">
            <Checkbox isChecked={topRightCorner} onChange={
              () => {setTopRightCorner((topRightCorner)=> !topRightCorner)}
            }>Top right</Checkbox>
            <Checkbox isChecked={bottomRightCorner} onChange={
              () => {setBottomRightCorner((bottomRightCorner)=> !bottomRightCorner)}
            }>Bottom right</Checkbox>
          </Flex>

        </Flex>
      </CheckboxGroup>

      {/* MIRROR SWITCH */}
      <HStack justifyContent="space-between">
        <Heading as="h4" size="xs" opacity={0.5}>
          Mirror all edges
        </Heading>
        <Switch size="lg" onChange={() => setMirror(!mirror)} />
      </HStack>
    </>
  );
}