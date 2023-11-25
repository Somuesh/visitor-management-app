import './App.css';
import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/navbar/Navbar';
import LandingPage from './components/landingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <div className='side-layout-1'>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
