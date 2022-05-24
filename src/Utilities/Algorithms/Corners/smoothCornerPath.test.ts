import { smoothCornerPath } from './smoothCornerPath';

test('generates the correct smoothCornerPath (seed = 1)', () => {
  const path = smoothCornerPath(1, 800, 600, 0.3, 1, 4, 0, 100, false, 0.2);
  expect(Array.isArray(path)).toBe(true);
  expect(JSON.stringify(path)).toBe(
    JSON.stringify([
      'M0 0 0,502.45324617763976 C 45.85219751512632,479.8147944572381 151.86691263911004,444.357561874638 229.2609875756316,389.2609875756316 C 306.6550625121531,334.16441327662517 326.51930273432913,304.8225721977341 386.97037468260777,226.97037468260774 C 447.42144663088646,149.1181771674814 502.6071527901415,45.394074936521555 531.516347317025,0 L0 0Z',
    ])
  );
});

test('generates the correct smoothCornerPath (seed = 2)', () => {
  const path = smoothCornerPath(2, 800, 600, 0.3, 1, 4, 0, 100, false, 0.2);
  expect(Array.isArray(path)).toBe(true);
  expect(JSON.stringify(path)).toBe(
    JSON.stringify([
      'M0 0 0,512.9565925453788 C 45.39407493652155,487.7593489728246 142.9315922435994,437.5229107526752 226.97037468260774,386.97037468260777 C 311.0091571216161,336.4178386125403 363.8683988775437,337.58798713156335 420.1939121950418,260.1939121950418 C 476.51942551253984,182.7998372585202 490.9171354550868,52.038782439008365 508.59794127009803,0 L0 0Z',
    ])
  );
});
