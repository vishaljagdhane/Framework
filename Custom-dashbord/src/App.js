import logo from './logo.svg';
import './App.css';
import VideoBackGround from './Nagivationspages/VideoBackGround';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import LoginPage from './Nagivationspages/LoginPage';
import NagivationBar from './Nagivationspages/NagivationBar';
import TopBarComponent from './Dashbaord/TopBarComponent';
import MainDashbaord from './Dashbaord/MainDashbaord';
function App() {
  return (
    <>
    
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<NagivationBar/>}></Route>
  <Route path='/login' element={<LoginPage/>}></Route>
  <Route path='/topbar' element={<MainDashbaord/>}></Route>
  
  
  </Routes>
  
  
  </BrowserRouter>
    </>
  );
}

export default App;
