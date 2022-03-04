import Login from './pages/Login';
import Register from './pages/Register';
import Home from "./pages/Home";
import './App.css';
import "./firebase";
import { getAuth, signOut } from 'firebase/auth'
import {Routes,Route,useNavigate} from "react-router-dom";

function App() {
  const auth = getAuth();
  const navigate = useNavigate();

  const logout=()=>{
    console.log('auth :>> ', auth);
    signOut(auth)
    navigate("/login");
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <br/>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;