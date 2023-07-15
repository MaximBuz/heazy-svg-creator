export interface IIsolineCoords {
  handles: {
    right: number;
    left: number;
    top: number;
    bottom: number;
  };
  anchors: {
    right: number;
    left: number;
    top: number;
    bottom: number;
  };
}

export type AnchorPoint = [number, number];

export type OpposedLineProperties = {
  length: number;
  angle: number;
};

export type GetHandleCoordsArgs = {
  current: AnchorPoint;
  previous?: AnchorPoint;
  next?: AnchorPoint;
  reverse: boolean;
  smoothing: number;
};

export type GetBezierArgs = {
  point: AnchorPoint;
  index: number;
  anchorPoints: AnchorPoint[];
  smoothing: number;
};
