import "./app.scss";
import { FC } from "react";
import {Home, Register, Login, Watch} from './pages'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



const App : FC = () => {
  
  return (
    <Router>
      <Routes>
        <Route path = '/' element ={<Home/>}  />
        <Route path = '/register' element ={<Register />}  />
        <Route path = '/login' element ={<Login />}  />
        <Route path = '/movies' element ={ <Home />}  />
        <Route path = '/series' element ={ <Home />}  />
        <Route path = '/watch' element ={ <Watch />}  /> 
      </Routes>
    </Router>
  );
};

export default App;