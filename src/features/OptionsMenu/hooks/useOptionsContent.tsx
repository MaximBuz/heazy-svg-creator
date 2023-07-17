import { useMemo } from 'react';
import { useDesign } from '../../../contexts/DesignContext';
import {
  BubbleOptions,
  CornerOptions,
  FlareOptions,
  IsolinesOptions,
  MarkerOptions,
  WaveOptions,
} from '../../../features';

const useOptionsContent = () => {
  const { design } = useDesign();

  const component = useMemo(() => {
    const name = design.name;

    if (name === 'waves') return <WaveOptions />;
    if (name === 'bubble') return <BubbleOptions />;
    if (name === 'corners') return <CornerOptions />;
    if (name === 'marker') return <MarkerOptions />;
    if (name === 'isolines') return <IsolinesOptions />;
    if (name === 'flare') return <FlareOptions />;
  }, [design.name]);

  return { component };
};

export default useOptionsContent;
