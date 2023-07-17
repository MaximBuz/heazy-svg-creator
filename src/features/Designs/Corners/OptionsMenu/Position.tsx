// Layout
import {
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  HStack,
  Switch,
} from '@chakra-ui/react';
import { useDesign } from '../../../../contexts/DesignContext';

const Position: React.FunctionComponent = () => {
  const { cornerState: state, setCornerState: setState } = useDesign();
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
                setState((prev) => ({
                  ...prev,
                  topLeftCorner: !prev.topLeftCorner,
                }));
              }}
            >
              Top left
            </Checkbox>
            <Checkbox
              isChecked={state.bottomLeftCorner}
              onChange={() => {
                setState((prev) => ({
                  ...prev,
                  bottomLeftCorner: !prev.bottomLeftCorner,
                }));
              }}
            >
              Bottom left
            </Checkbox>
          </Flex>

          <Flex direction="column" gap="10px">
            <Checkbox
              isChecked={state.topRightCorner}
              onChange={() => {
                setState((prev) => ({
                  ...prev,
                  topRightCorner: !prev.topRightCorner,
                }));
              }}
            >
              Top right
            </Checkbox>
            <Checkbox
              isChecked={state.bottomRightCorner}
              onChange={() => {
                setState((prev) => ({
                  ...prev,
                  bottomRightCorner: !prev.bottomRightCorner,
                }));
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
