import './style/index.css'
import './style/Forms.css'
import './style/Search.css'
import  './style/Products.css'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import SignUp from './pages/Signup'
import LogIn from './pages/Login'
import Home from './pages/home'
import ShopLanguages from './pages/ShopLanguages'
import ShopFrameworks from './pages/ShopFrameworks'
function App() {

  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path= "/" element={<Home/>}/>
      <Route path= '/Signup' element={<SignUp/>}/>
      <Route path= '/Login' element={<LogIn/>}/>
      <Route path= '/ShopLanguages' element={<ShopLanguages/>}/>
      <Route path= '/ShopFrameworks' element={<ShopFrameworks/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
