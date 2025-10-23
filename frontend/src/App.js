
import './App.css';

import "./assets/css/layout.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='layout '>
      <Navbar/>
      <HomePage/>
    </div>
  );
}

export default App;
