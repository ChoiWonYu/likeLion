import Study from './Study';
import Fancy from './Fancy';
import { Link, Route, BrowserRouter as Router, Routes, BrowserRouter } from "react-router-dom";
import StudyLogin from './StudyLogin';
import FancyLogin from './FancyLogin';
import Home from './Home';
import Header from './Header';

function App(){
  return (
 <BrowserRouter>
 <Header/> 
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/StudyLogin" element={<StudyLogin/>}/>
    <Route path="/FancyLogin" element={<FancyLogin/>}/>
    <Route path="/Study" element={<Study/>}/>
    <Route path="/Fancy" element={<Fancy/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
