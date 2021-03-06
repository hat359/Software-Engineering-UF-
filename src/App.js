import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from './Nav'
import Main from './Main'
import Travel from './components/Travel'
import Finance from './components/Finance'
import BankAccount from './components/BankAccount'
import FinancialAid from './components/FinancialAid'
import HealthInsurance from './components/HealthInsurance'
import Academics from './components/Academics'
import Signup from './components/Signup/Signup.tsx'
import Signin from './components/Signin'
import Landing from './components/Landing'
import Map from './components/Maps'
import Profs from './components/Profrating' 
import Cameras from './components/Cameras';
function App() {
  return (
    <BrowserRouter>

 
   <Routes>
   <Route exact path="/" element={<Main/>}/>
   <Route exact path="/map" element={<Map/>}/>
   <Route  exact path="/travel" element={<Travel/>}/>
   <Route  exact path="/finance" element={<Finance/>}/>
   <Route  exact path="/academics" element={<Academics/>}/>
   <Route  exact path="/BankAccount" element={<BankAccount/>}/>
   <Route  exact path="/FinancialAid" element={<FinancialAid/>}/>
   <Route  exact path="/HealthInsurance" element={<HealthInsurance/>}/>
   <Route  exact path="/signup" element={<Signup/>}/>
   <Route  exact path="/signin" element={<Signin/>}/>
   <Route  exact path="/landing" element={<Landing/>}/>
   <Route  exact path="/academics/profs" element={<Profs/>}/>
   <Route  exact path="/cameras" element={<Cameras/>}/>

  
   
    
   </Routes>
   
  
   </BrowserRouter>
   
  );
}

export default App;
