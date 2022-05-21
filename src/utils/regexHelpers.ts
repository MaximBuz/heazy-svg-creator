function styleToJsx(html: string): string {
  // get only the values within the style tag
  const styles = html.match(/(")(.*)(")/g)[0].replaceAll('"', '');

  // clean styles from semi-colons
  const cleanedStyles = styles.replaceAll(';', '');

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

function stringify(obj) {
  const cleaned = JSON.stringify(obj, null, 2);

  return cleaned.replace(/^[\t ]*"[^:\n\r]+(?<!\\)":/gm, function (match) {
    return match.replace(/"/g, '');
  });
}

function cssToJsx(string) {
  string = string.replace('style="', '').slice(0, -1);
  string = string.replaceAll('&quot;', "'");
  string = `{"${string.replace(/; /g, '", "').replace(/: /g, '": "').replace(';', '')}"}`;

  const obj = JSON.parse(string);

  const keyValues = Object.keys(obj).map((key) => {
    var camelCased = key.replace(/-[a-z]/g, (g) => g[1].toUpperCase());
    return { [camelCased]: obj[key] };
  });
  return 'style={' + stringify(Object.assign({}, ...keyValues)) + '}';
}

export function svgToJsx(svg: string): string {
  return svg
    .replaceAll(/(?:style=")(.*?)\"/g, (match) => cssToJsx(match))
    .replaceAll('stroke-width', 'strokeWidth')
    .replaceAll('stroke-linecap', 'strokeLinecap')
    .replaceAll('stroke-linejoin', 'strokeLinejoin')
    .replaceAll('stroke-dasharray', 'strokeDasharray')
    .replaceAll('xmlns:xlink', 'xmlnsXlink');
}
