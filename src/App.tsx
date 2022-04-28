import { useCallback, useRef } from 'react';
import StackedWave from './components/StackedWave';
import { downloadBlob } from './utils/downloadBlob';

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
          seed={2}
          width={window.innerWidth / 3}
          height={window.innerHeight + 10}
          startWaveColor="#B7E7FF"
          stopWaveColor="#927ace"
          bgColor="#E8F7FF"
          shadowX={0}
          shadowY={5}
          shadowSD={10}
          shadowOpacity={0.5}
          balance={0.65}
          velocity={80}
          breaks={3}
          stacks={3}
          distance={5}
          stroke={false}
        />
        <StackedWave
          type="peak"
          seed={3}
          width={window.innerWidth / 3}
          height={window.innerHeight + 10}
          startWaveColor="#9e2424"
          stopWaveColor="#6e1111"
          bgColor="#4a5b64"
          shadowX={0}
          shadowY={0}
          shadowSD={15}
          shadowOpacity={0.5}
          balance={0.5}
          velocity={70}
          breaks={5}
          stacks={2}
          distance={5}
          stroke={false}
        />
        <StackedWave
          type="peak"
          seed={5}
          width={window.innerWidth / 3}
          height={window.innerHeight + 10}
          startWaveColor="#309e24"
          stopWaveColor="#e5de00"
          bgColor="#001439"
          balance={0.1}
          velocity={10}
          breaks={60}
          stacks={60}
          distance={1}
          stroke={true}
          strokeWidth={1.5}
        />
        {/* <button onClick = {downloadSVG}>Download</button> */}
      </div>
    </div>
  );
}

export default App;
