import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css'
import { Navbar } from './components/Navbar';
import Homes from './components/Home';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
   <Routes>
  
     <Route path='/' element={<Homes/>}/>
   </Routes>
  </BrowserRouter>
  );
}

export default App;
