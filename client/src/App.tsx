import { useEffect, useState } from 'react'
import { Routes,Route, useLocation, useNavigate,} from "react-router-dom";
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] =useState(false);
  function logout() {
    setAccess(false);
  }
  function login(userData) {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/user/login/';
  axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
    const { access } = data;
    setAccess(access);
    access && navigate('/Landing');
  });
    }
  useEffect(() => {!access && navigate("/");
   }, [access]);
  return (
    <>
      {(location.pathname !== "/" && location.pathname !== "/Landing") && (<Nav out={logout}/>)}
      <Routes>
        <Route path='/' element={<Login login={login}/>}/>
        <Route path='/landing'element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create' element={<CreateForm/>}/>
        <Route path='*' element={<div>This is the wrong page</div>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </>
  )
}

export default App
