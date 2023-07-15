import { zip } from '../../helpers/zipArray';
import { AnchorPoint } from '../types';

export function getCoordinates(
  sections: number,
  waveSize: number
): AnchorPoint[] {
  let remainingWaveSize = waveSize;
  const cuts = [];

  // calculate shrinking parts (until last section)
  for (let cut = 1; cut < sections; cut++) {
    const sectionSize = remainingWaveSize / sections;
    cuts.push(sectionSize);
    remainingWaveSize = remainingWaveSize - sectionSize;
  }

  // Add remaining width to all previous sections
  cuts.forEach(
    (_, index) =>
      (cuts[index] = Math.floor(
        cuts[index] + remainingWaveSize / (sections - 1)
      ))
  );

  // Create a cumulative version of the cuts
  let previousSum = 0;
  const result = cuts.map((item) => (previousSum += item));

  // add a starting point
  result.unshift(0);

  // return a zipped array with x and y coordinate (y is just x but reversed)
  return zip(result, Array.from(result).reverse());
}
