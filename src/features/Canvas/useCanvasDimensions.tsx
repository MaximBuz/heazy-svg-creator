import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { getAspectRatio } from '../../utils/helpers/getAspectRatio';
import { ICanvasDimensions } from '../../types/canvasDimensions';

const useCanvasDimensions = (
  defaultWidth = 800,
  defaultHeight = 600
): [Dispatch<SetStateAction<number>>, Dispatch<SetStateAction<number>>, ICanvasDimensions] => {
  const [width, setWidth] = useState<number>(defaultWidth);
  const [height, setHeight] = useState<number>(defaultHeight);
  const canvasDimensions = useMemo<ICanvasDimensions>(() => {
    return {
      width: width,
      height: height,
      widthRatio: getAspectRatio(width / height, 50)[0],
      heightRatio: getAspectRatio(width / height, 50)[1],
    };
  }, [width, height]);

  return [setWidth, setHeight, canvasDimensions as ICanvasDimensions];
};

export default useCanvasDimensions;
 