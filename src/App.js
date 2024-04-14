import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';

const App =()=> { 
  return (
   
   <div>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About"element={<About/>}/>
        <Route path='/Portfolio'element={<Portfolio/>}/>
        <Route path='/Contact'element={<Services/>}/>
       
      </Routes>
      
     </BrowserRouter>
     </div>
  );
}

export default App;
