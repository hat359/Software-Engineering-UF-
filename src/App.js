import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from './Nav'
import Main from './Main'
import Travel from './components/Travel'
import Finance from './components/Finance'
import Signup from './components/Signup/Signup.tsx'
import Signin from './components/Signin'
import Landing from './components/Landing'
function App() {
  return (
    <BrowserRouter>

 
   <Routes>
   <Route exact path="/" element={<Main/>}/>
   <Route  exact path="/travel" element={<Travel/>}/>
   <Route  exact path="/finance" element={<Finance/>}/>
   <Route  exact path="/signup" element={<Signup/>}/>
   <Route  exact path="/signin" element={<Signin/>}/>
   <Route  exact path="/landing" element={<Landing/>}/>

  
   
    
   </Routes>
   
  
   </BrowserRouter>
   
  );
}

export default App;
