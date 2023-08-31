import { useLocation, Route, Routes } from 'react-router-dom'; // Añade Route y Routes a tus importaciones
import Landing from './views/Landing/Landing'
import './App.css'

function App() {

  const location = useLocation()

  if(location.pathname === '/'){
    return (
      <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </>
      )
  }

}

export default App
