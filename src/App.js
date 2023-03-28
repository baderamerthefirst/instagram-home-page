import './App.css';
import MainArea from './components/main/Middle/MainArea'
import SideBar from './components/main/Left/SideBar';
import RightBar from './components/main/Right/RightBar';

function App() {
  return (
    <div className="Bars">
      <SideBar/>
      <div className='OtherBars'>
      <MainArea/>
      <RightBar/>
      </div>
    </div>
  );
}

export default App;
