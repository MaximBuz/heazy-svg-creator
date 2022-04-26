import StackedWave from './components/StackedWave';
import './App.css';
import SmoothWave from './components/SmoothWave';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex'}}>
      <StackedWave
        seed={1}
        width={window.innerWidth / 3}
        height={window.innerHeight+10}
        startWaveColor="#B7E7FF"
        stopWaveColor="#927ace"
        bgColor='#E8F7FF'
        shadowX={0}
        shadowY={5}
        shadowSD={10}
        shadowOpacity={0.5}
        balance={0.5}
        velocity={50}
        breaks={4}
        stacks={4}
        distance={4}
      />
      <SmoothWave
        seed={5}
        width={window.innerWidth / 3}
        height={window.innerHeight+10}
        startWaveColor="#9e2424"
        stopWaveColor="#6e1111"
        bgColor='#E8F7FF'
        shadowX={0}
        shadowY={0}
        shadowSD={0}
        shadowOpacity={0.5}
        balance={0.7}
        velocity={70}
        breaks={5}
      />
      <StackedWave
        seed={3}
        width={window.innerWidth / 3}
        height={window.innerHeight+10}
        startWaveColor="#B7E7FF"
        stopWaveColor="#927ace"
        bgColor='#E8F7FF'
        shadowX={0}
        shadowY={5}
        shadowSD={10}
        shadowOpacity={0.5}
        balance={0.3}
        velocity={50}
        breaks={2}
        stacks={4}
        distance={4}
      />

      </div>
    </div>
  );
}

export default App;
