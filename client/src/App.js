import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Landing from './pages/Landing/Landing.jsx'
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path='/home' element={<Home/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
