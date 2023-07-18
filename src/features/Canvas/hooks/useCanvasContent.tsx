import { useMemo, useRef, useState } from 'react';
import { useDesign } from '../../../contexts/DesignContext';
import {
  Bubble,
  Corners,
  Flare,
  Isolines,
  Marker,
  Waves,
} from '../../../features';

const useCanvasContent = () => {
  const { design } = useDesign();

  const [seed, setSeed] = useState<number>(1);

  const svgRef = useRef<SVGSVGElement | null>(null);

  const component = useMemo(() => {
    const name = design.name;
    const props = { svgRef, seed };

    if (name === 'waves') return <Waves {...props} />;
    if (name === 'bubble') return <Bubble {...props} />;
    if (name === 'corners') return <Corners {...props} />;
    if (name === 'marker') return <Marker {...props} />;
    if (name === 'isolines') return <Isolines {...props} />;
    if (name === 'flare') return <Flare {...props} />;
  }, [seed, design.name]);

  return {
    canvasRef: svgRef,
    component,
    setSeed,
  };
};

export default useCanvasContent;
