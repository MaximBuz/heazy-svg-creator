import StackedWave from './components/StackedWave';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <StackedWave
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
          balance={0.5}
          velocity={70}
          breaks={3}
          stacks={3}
          distance={5}
        />
        <StackedWave
          type="peak"
          seed={7}
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
        />
      </div>
    </div>
  );
}

export default App;
