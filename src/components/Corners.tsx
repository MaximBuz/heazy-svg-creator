import React from 'react';
import { ICornerAllProps, ICornerProps } from '../utils/types/cornerProps';
import { smoothCornerPath } from '../utils/calculations/corner-paths/smoothCornerPath';
import CornerSvgGroup from './CornerSvgGroup';
import SvgCanvas from './SvgCanvas';

const Corners: React.FunctionComponent<ICornerProps & ICornerAllProps> = (props) => {
  // set up params that are needed to generate a path
  const pathParams = [
    props.width,
    props.height,
    props.balance,
    props.velocity,
    props.breaks,
    props.stacks,
    props.distance,
    props.stroke,
    props.smooth,
  ] as const;

  // set up params that are needed to generate the svg group for the wave
  const svgGroupProps = {
    width: props.width,
    height: props.height,
    stroke: props.stroke,
    strokeWidth: props.strokeWidth,
    strokeShrink: props.strokeShrink,
    classId: Math.round(Math.random() * 100),
    startColor: props.startColor,
    endColor: props.endColor,
    shadowX: props.shadowX,
    shadowY: props.shadowY,
    shadowSD: props.shadowSD,
    shadowColor: props.shadowColor,
  };

  // set up params that are needed to generate the full svg element
  const svgElementProps = {
    width: props.width,
    height: props.height,
    svgRef: props.svgRef,
  };

  /*  -----GENERATE PATHS----- */
  let topLeft, topRight, bottomLeft, bottomRight, mirrored;
  if (props.mirror) {
    // If mirrored, generate only on path and mirror it
    mirrored = smoothCornerPath(props.seed, ...pathParams);
  } else {
    // else generate unique ones for each corner
    props.topLeftCorner && (topLeft = smoothCornerPath(props.seed, ...pathParams));
    props.topRightCorner && (topRight = smoothCornerPath(props.seed + 1, ...pathParams));
    props.bottomLeftCorner && (bottomLeft = smoothCornerPath(props.seed + 2, ...pathParams));
    props.bottomRightCorner && (bottomRight = smoothCornerPath(props.seed + 3, ...pathParams));
  }

  /* ------IF MIRROR------ */
  if (props.mirror)
    return (
      <SvgCanvas {...svgElementProps}>
        <rect x="0" y="0" width={props.width} height={props.height} fill={props.bgColor}></rect>
        {/* TOP LEFT CORNER */}
        {props.topLeftCorner && <CornerSvgGroup path={mirrored} direction={0} {...svgGroupProps} />}

        {/* TOP RIGHT CORNER */}
        {props.topRightCorner && <CornerSvgGroup path={mirrored} direction={1} {...svgGroupProps} />}

        {/* BOTTOM LEFT CORNER */}
        {props.bottomLeftCorner && <CornerSvgGroup path={mirrored} direction={2} {...svgGroupProps} />}

        {/* BOTTOM RIGHT CORNER */}
        {props.bottomRightCorner && <CornerSvgGroup path={mirrored} direction={3} {...svgGroupProps} />}
      </SvgCanvas>
    );

  /* -----IF NO MIRROR----- */
  return (
    <SvgCanvas {...svgElementProps}>
      <rect x="0" y="0" width={props.width} height={props.height} fill={props.bgColor}></rect>
      {/* TOP LEFT CORNER */}
      {props.topLeftCorner && <CornerSvgGroup path={topLeft} direction={0} {...svgGroupProps} />}

      {/* TOP RIGHT CORNER */}
      {props.topRightCorner && <CornerSvgGroup path={topRight} direction={1} {...svgGroupProps} />}

      {/* BOTTOM LEFT CORNER */}
      {props.bottomLeftCorner && <CornerSvgGroup path={bottomLeft} direction={2} {...svgGroupProps} />}

      {/* BOTTOM RIGHT CORNER */}
      {props.bottomRightCorner && <CornerSvgGroup path={bottomRight} direction={3} {...svgGroupProps} />}
    </SvgCanvas>
  );
};

export default Corners;
