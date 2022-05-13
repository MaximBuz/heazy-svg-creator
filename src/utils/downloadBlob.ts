import { Buffer } from 'buffer';

export function downloadBlob(blob: Blob, filename: string) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
}

export function downloadSVGAsText(svgRef, filename) {
  const base64doc = Buffer.from(svgRef.current.outerHTML, 'base64');
  const a = document.createElement('a');
  const e = new MouseEvent('click');
  a.download = filename + '.svg';
  a.href = 'data:image/svg+xml;base64' + base64doc;
  a.dispatchEvent(e);
}

export function downloadSvgAsPng(e, svgRef) {
  const canvas = document.createElement('canvas');

  const base64doc = btoa(unescape(encodeURIComponent(svgRef.current.outerHTML)));
  const w = parseInt(svgRef.current.getAttribute('width'));
  const h = parseInt(svgRef.current.getAttribute('height'));
  const img_to_download = document.createElement('img');
  img_to_download.src = 'data:image/svg+xml;base64,' + base64doc;
  img_to_download.onload = function () {
    //@ts-expect-error
    canvas.setAttribute('width', w);
    //@ts-expect-error
    canvas.setAttribute('height', h);
    const context = canvas.getContext('2d');
    //context.clearRect(0, 0, w, h);
    context.drawImage(img_to_download, 0, 0, w, h);
    const dataURL = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    const my_evt = new MouseEvent('click');
    a.download = 'download.png';
    a.href = dataURL;
    a.dispatchEvent(my_evt);

    //canvas.parentNode.removeChild(canvas);
  };
}
