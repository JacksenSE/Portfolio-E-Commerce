import './style/index.css'
import './style/Forms.css'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import SignUp from './pages/Signup'
import SearchBar from './components/SearchBar'
import LogIn from './pages/Login'
import Home from './pages/home'
function App() {

  return (
    <>
    <SearchBar/>
    <BrowserRouter>
    <Routes>
    <Route path= "/" element={<Home/>}/>
      <Route path= '/Signup' element={<SignUp/>}/>
      <Route path= '/Login' element={<LogIn/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
