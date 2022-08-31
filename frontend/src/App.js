import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Movies from './Pages/Movies/Movies'

import './App.css';
// import Navbar from "./components/Navbar/Navbar";
import PageNotFound from './Pages/404/404';

function App() {
  return (
    <Router>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      
      <Route path="/login" element={<Login/>}/>

      <Route path="/register" element={<Register/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
      <Route path="/movies"element={<Movies/>}/>
    </Routes>
    </Router>
  );
}

export default App;

