import React, { Ref, useId } from 'react';
import { smoothCornerPath } from '../../../utils/path-algorithms/Corners/smoothCornerPath';
import CornerSvgGroup from './CornerSvgGroup';
import SvgCanvas from '../../Canvas/SvgCanvas';
import { useDesign } from '../../../contexts/DesignContext';

const Corners: React.FunctionComponent<{
  svgRef: Ref<SVGSVGElement | null>;
  seed: number;
}> = ({ seed, svgRef }) => {
  const { cornerState, canvasDimensions } = useDesign();

  // set up params that are needed to generate a path
  const pathParams = [
    canvasDimensions.width,
    canvasDimensions.height,
    cornerState.balance,
    cornerState.velocity,
    cornerState.breaks,
    cornerState.stacks,
    cornerState.distance,
    cornerState.solid,
    cornerState.smooth,
  ] as const;

  // set up params that are needed to generate the svg group for the wave
  const svgGroupProps = {
    width: canvasDimensions.width,
    height: canvasDimensions.height,
    solid: cornerState.solid,
    strokeWidth: cornerState.strokeWidth,
    strokeShrink: cornerState.strokeShrink,
    classId: useId().replaceAll(':', ''),
    startColor: cornerState.startColor,
    endColor: cornerState.endColor,
    shadowX: cornerState.shadowX,
    shadowY: cornerState.shadowY,
    shadowSD: cornerState.shadowSD,
    shadowColor: cornerState.shadowColor,
  };

  // set up params that are needed to generate the full svg element
  const svgElementProps = {
    width: canvasDimensions.width,
    height: canvasDimensions.height,
    svgRef,
  };

  /*  -----GENERATE PATHS----- */
  let topLeft, topRight, bottomLeft, bottomRight, mirrored;
  if (cornerState.mirror) {
    // If mirrored, generate only on path and mirror it
    mirrored = smoothCornerPath(seed, ...pathParams);
  } else {
    // else generate unique ones for each corner
    cornerState.topLeftCorner &&
      (topLeft = smoothCornerPath(seed, ...pathParams));
    cornerState.topRightCorner &&
      (topRight = smoothCornerPath(seed + 1, ...pathParams));
    cornerState.bottomLeftCorner &&
      (bottomLeft = smoothCornerPath(seed + 2, ...pathParams));
    cornerState.bottomRightCorner &&
      (bottomRight = smoothCornerPath(seed + 3, ...pathParams));
  }

  /* ------IF MIRROR------ */
  if (cornerState.mirror)
    return (
      <SvgCanvas {...svgElementProps}>
        <rect
          x="0"
          y="0"
          width={canvasDimensions.width}
          height={canvasDimensions.height}
          fill={cornerState.bgColor}
        ></rect>
        {/* TOP LEFT CORNER */}
        {cornerState.topLeftCorner && (
          <CornerSvgGroup path={mirrored} direction={0} {...svgGroupProps} />
        )}

        {/* TOP RIGHT CORNER */}
        {cornerState.topRightCorner && (
          <CornerSvgGroup path={mirrored} direction={1} {...svgGroupProps} />
        )}

        {/* BOTTOM LEFT CORNER */}
        {cornerState.bottomLeftCorner && (
          <CornerSvgGroup path={mirrored} direction={2} {...svgGroupProps} />
        )}

        {/* BOTTOM RIGHT CORNER */}
        {cornerState.bottomRightCorner && (
          <CornerSvgGroup path={mirrored} direction={3} {...svgGroupProps} />
        )}
      </SvgCanvas>
    );

  /* -----IF NO MIRROR----- */
  return (
    <SvgCanvas {...svgElementProps}>
      <rect
        x="0"
        y="0"
        width={canvasDimensions.width}
        height={canvasDimensions.height}
        fill={cornerState.bgColor}
      ></rect>
      {/* TOP LEFT CORNER */}
      {cornerState.topLeftCorner && (
        <CornerSvgGroup path={topLeft} direction={0} {...svgGroupProps} />
      )}

      {/* TOP RIGHT CORNER */}
      {cornerState.topRightCorner && (
        <CornerSvgGroup path={topRight} direction={1} {...svgGroupProps} />
      )}

      {/* BOTTOM LEFT CORNER */}
      {cornerState.bottomLeftCorner && (
        <CornerSvgGroup path={bottomLeft} direction={2} {...svgGroupProps} />
      )}

      {/* BOTTOM RIGHT CORNER */}
      {cornerState.bottomRightCorner && (
        <CornerSvgGroup path={bottomRight} direction={3} {...svgGroupProps} />
      )}
    </SvgCanvas>
  );
};

export default Corners;
