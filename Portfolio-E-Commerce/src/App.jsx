
import './App.css'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import SignUp from './pages/Signup'
function App() {

  return (
    <>
    <a href="/signup">
    <button>SignUp</button>
  </a>
    <BrowserRouter>
    <Routes>
      <Route path= '/Signup' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
