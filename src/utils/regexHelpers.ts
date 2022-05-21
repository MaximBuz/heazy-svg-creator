function styleToJsx(html: string): string {
  // get the full style tag
  const [styleTag] = html.match(/(style=")(.*)(")/g);

  // get only the values within the style tag
  const styles = styleTag.match(/(")(.*)(")/g)[0].replaceAll('"', '');

  // clean styles from semi-colons and transitions
  const cleanedStyles = styles.replace(/transition(.*)(; )/gi, '').replaceAll(';', '');

  // convert style to a valid jsx style object
  return (
    'style={{ ' +
    cleanedStyles.replace(
      /([\w.-]+):\s*([^\s;]*)/g,
      (x, y, z) => `${y.replace(/-(.)/g, (m, n) => n.toUpperCase())}: '${z}'`
    ) +
    '}}'
  );
}

export function svgToJsx(svg: string): string {
  return svg
    .replaceAll(/(style=")(.*)(")/g, styleToJsx(svg))
    .replaceAll('stroke-width', 'strokeWidth')
    .replaceAll('stroke-linecap', 'strokeLinecap')
    .replaceAll('stroke-linejoin', 'strokeLinejoin')
    .replaceAll('stroke-dasharray', 'strokeDasharray')
    .replaceAll('xmlns:xlink', 'xmlnsXlink');
}
