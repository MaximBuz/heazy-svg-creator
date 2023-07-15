import { AnchorPoint } from './../types';
import { zip } from '../../helpers/zipArray';

export function getCoordinates(
  sections: number,
  width: number,
  waveSize: number
): AnchorPoint[] {
  const equal = width / sections;
  const x = [];
  const y = [];

  for (let cut = 0; cut <= sections; cut++) {
    x.push(equal * cut);
    y.push(waveSize);
  }

  return zip(x, y);
}
