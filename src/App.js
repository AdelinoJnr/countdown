import './styles/global.css';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Navbar from './components/Navbar';
import CountdownProvider from './context/countdown';
import InputTimer from './components/InputTimer';

function App() {
  return (
    <CountdownProvider>
      <div>
        <Header />
        <hr />
        <InputTimer />
        <Countdown />
        <Navbar />
      </div>
    </CountdownProvider>
  );
}

export default App;
