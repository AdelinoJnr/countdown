import './styles/global.css';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Navbar from './components/Navbar';
import { RiTimerFill } from 'react-icons/ri';

function App() {
  return (
    <div>
      <Header />
      <hr />
      <div className="content-icon-countdown">
        <RiTimerFill className="icon-countdown" />
      </div>
      <Countdown />
      <Navbar />
    </div>
  );
}

export default App;
