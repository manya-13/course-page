import { Router } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/main.component";
import Mainright from "./components/Main/mainright.component";
import {Routes,Route} from "react-router-dom"; 


function App() {
  return (
  <>
    <Navbar/>
    <Routes>
      <Route path= "/" element={<Main/> }/> 
    </Routes>    
  </>
    
  );
}

export default App;

