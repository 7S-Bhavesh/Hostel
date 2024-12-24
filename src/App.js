import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import HostelAllocation from './Components/HostelAllocation';
import Mess from './Components/Mess';
import Navbar from './Components/Navbar';

function App() {
  return (
  <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hostel' element={<HostelAllocation/>}/>
        <Route path='/mess' element={<Mess/>}/>
      </Routes>
    </Router>
  </>
  );
}

export default App;
