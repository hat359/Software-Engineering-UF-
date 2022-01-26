import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from './Nav'
import Main from './Main'
import Travel from './components/Travel'
import Finance from './components/Finance'
 
function App() {
  return (
    <BrowserRouter>

 
   <Routes>
   <Route exact path="/" element={<Main/>}/>
   <Route  exact path="/travel" element={<Travel/>}/>
   <Route  exact path="/finance" element={<Finance/>}/>

  
   
    
   </Routes>
   
  
   </BrowserRouter>
   
  );
}

export default App;
