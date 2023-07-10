import { svgToJsx } from './regexHelpers';

export function downloadSVGAsText(svgRef) {
  const base64doc = btoa(
    unescape(encodeURIComponent(svgRef.current.outerHTML))
  );
  const a = document.createElement('a');
  const e = new MouseEvent('click');
  a.download = 'download.svg';
  a.href = 'data:image/svg+xml;base64,' + base64doc;
  a.dispatchEvent(e);
}

export function downloadSvgAsReact(svgRef) {
  const svg = svgRef.current.outerHTML;
  const snippet = `
  export default function SvgDesign() {
    return (
      <>
        ${svgToJsx(svg)}
      </>
    )
  }
  
  `;
  navigator.clipboard.writeText(snippet);
}

export function downloadSvgAsReactTS(svgRef) {
  const svg = svgRef.current.outerHTML;

  const snippet = `
  const SvgDesign: React.FunctionComponent = () => {
    return (
      <>
        ${svgToJsx(svg)}
      </>
    );
  };
  
  export default SvgDesign;
  `;
  navigator.clipboard.writeText(snippet);
}

function convertToBase64(svgRef) {
  const svgString = new XMLSerializer().serializeToString(svgRef.current);
  const decoded = unescape(encodeURIComponent(svgString));
  return btoa(decoded);
}

function getDimensions(svgRef) {
  const width = svgRef.current.getAttribute('width');
  const height = svgRef.current.getAttribute('height');
  return [width, height];
}

function convertToDataURL(svgRef) {
  // get image data
  const base64 = convertToBase64(svgRef);
  const [w, h] = getDimensions(svgRef);
  const img = document.createElement('img');
  const canvas = document.createElement('canvas');
  img.setAttribute('src', 'data:image/svg+xml;base64,' + base64);

  return new Promise((resolve) => {
    img.onload = () => {
      canvas.setAttribute('width', w);
      canvas.setAttribute('height', h);
      const context = canvas.getContext('2d');
      context.drawImage(img, 0, 0, w, h);
      const dataURL = canvas.toDataURL(
        'image/jpeg',
        w > 1000 ? 0.4 : w > 500 ? 0.8 : 1
      );
      resolve(dataURL);
    };
    img.onerror = () => {
      resolve(null);
    };
  });
}

async function dataURLToBlob(dataURL) {
  return await (await fetch(dataURL)).blob();
}

// Caution! This returns a promise!
export async function svgToBlob(svgRef) {
  return dataURLToBlob(await convertToDataURL(svgRef));
}

export function downloadSvgAsPng(svgRef) {
  const canvas = document.createElement('canvas');
  const base64 = convertToBase64(svgRef);
  const [w, h] = getDimensions(svgRef);
  const img = document.createElement('img');
  img.setAttribute('src', 'data:image/svg+xml;base64,' + base64);

  img.onload = function () {
    canvas.setAttribute('width', w);
    canvas.setAttribute('height', h);
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, w, h);
    const dataURL = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    const my_evt = new MouseEvent('click');
    a.download = 'download.png';
    a.href = dataURL;
    a.dispatchEvent(my_evt);
  };
}
