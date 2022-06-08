// Layout
import { Checkbox, CheckboxGroup, Flex, Heading, HStack, Switch } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

// Icons
import { ICornerAllProps } from '../Types/cornerProps';

const Position: React.FunctionComponent<{
  state: ICornerAllProps;
  setState: Dispatch<SetStateAction<ICornerAllProps>>;
}> = ({ state, setState }) => {
  return (
    <>
      <Heading as="h3" size="xs" textTransform="uppercase">
        Position
      </Heading>

      {/* CORNER CHECKBOXES */}
      <CheckboxGroup>
        <Flex justifyContent="space-between">
          <Flex direction="column" gap="10px">
            <Checkbox
              isChecked={state.topLeftCorner}
              onChange={() => {
                setState((prev) => ({ ...prev, topLeftCorner: !prev.topLeftCorner }));
              }}
            >
              Top left
            </Checkbox>
            <Checkbox
              isChecked={state.bottomLeftCorner}
              onChange={() => {
                setState((prev) => ({ ...prev, bottomLeftCorner: !prev.bottomLeftCorner }));
              }}
            >
              Bottom left
            </Checkbox>
          </Flex>

          <Flex direction="column" gap="10px">
            <Checkbox
              isChecked={state.topRightCorner}
              onChange={() => {
                setState((prev) => ({ ...prev, topRightCorner: !prev.topRightCorner }));
              }}
            >
              Top right
            </Checkbox>
            <Checkbox
              isChecked={state.bottomRightCorner}
              onChange={() => {
                setState((prev) => ({ ...prev, bottomRightCorner: !prev.bottomRightCorner }));
              }}
            >
              Bottom right
            </Checkbox>
          </Flex>
        </Flex>
      </CheckboxGroup>

      {/* MIRROR SWITCH */}
      <HStack justifyContent="space-between">
        <Heading as="h4" size="xs" opacity={0.5}>
          Mirror all edges
        </Heading>
        <Switch
          size="lg"
          onChange={() => {
            setState((prev) => ({ ...prev, mirror: !prev.mirror }));
          }}
        />
      </HStack>
    </>
  );
};

export default Position;
