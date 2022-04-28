import { useCallback, useRef } from 'react';
import StackedWave from './components/StackedWave';
import { downloadBlob } from './utils/downloadBlob';

import { blob } from 'stream/consumers';

function App() {
  // test downloading
  const svgRef = useRef<SVGAElement | null>(null);

  const downloadSVG = useCallback(() => {
    const svg = svgRef.current?.innerHTML;
    const blob = new Blob([svg as BlobPart], { type: 'image/svg+xml' });
    downloadBlob(blob, 'design.svg');
  }, []);

  return (
    <div className="App">
      <div style={{ display: 'flex', gap: 10}}>
        <StackedWave
          svgRef = {svgRef}
          type="smooth"
          seed={1}
          width={window.innerWidth / 3}
          height={window.innerHeight + 10}
          startWaveColor="#B7E7FF"
          stopWaveColor="#927ace"
          bgColor="#E8F7FF"
          shadowX={0}
          shadowY={5}
          shadowSD={10}
          shadowOpacity={0.5}
          balance={0.50}
          velocity={120}
          breaks={1}
          stacks={3}
          distance={5}
          stroke={false}
        />
        <StackedWave
          type="peak"
          seed={2}
          width={window.innerWidth / 3}
          height={window.innerHeight + 10}
          startWaveColor="#0066FF"
          stopWaveColor="#2e82ff"
          bgColor="#002233"
          shadowX={0}
          shadowY={0}
          shadowSD={15}
          shadowOpacity={0.5}
          balance={0.5}
          velocity={150}
          breaks={6}
          stacks={2}
          distance={5}
          stroke={false}
        />
        <StackedWave
          type="peak"
          seed={1}
          width={window.innerWidth / 3}
          height={window.innerHeight + 10}
          startWaveColor="#309e24"
          stopWaveColor="#e5de00"
          bgColor="#540e42"
          balance={0.1}
          velocity={10}
          breaks={60}
          stacks={40}
          distance={0.7}
          stroke={true}
          strokeWidth={3}
          strokeShrink={true}
        />
        {/* <button onClick = {downloadSVG}>Download</button> */}
      </div>
    </div>
  );
}

export default App;
