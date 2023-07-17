import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { getAspectRatio } from '../../../utils/helpers/getAspectRatio';
import { ICanvasDimensions } from '../types/Canvas.types';

const useCanvasDimensions = (
  defaultWidth = 800,
  defaultHeight = 600
): [
  Dispatch<SetStateAction<number>>,
  Dispatch<SetStateAction<number>>,
  ICanvasDimensions,
] => {
  const [width, setWidth] = useState<number>(defaultWidth);
  const [height, setHeight] = useState<number>(defaultHeight);

  const canvasDimensions = useMemo<ICanvasDimensions>(() => {
    const aspectRatio = getAspectRatio(width / height, 50);
    return {
      width,
      height,
      widthRatio: aspectRatio[0],
      heightRatio: aspectRatio[1],
    };
  }, [width, height]);

  return [setWidth, setHeight, canvasDimensions as ICanvasDimensions];
};

export default useCanvasDimensions;
