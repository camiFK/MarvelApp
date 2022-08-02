import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Landing from './pages/Landing/Landing.jsx'
import Home from './pages/Home/Home.jsx';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/home" element={<Home/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
