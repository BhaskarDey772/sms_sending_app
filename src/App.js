import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MenuItemOne from "./pages/MenuItemOne"
import "./App.css"
import Home from './pages/Home';
import MenuItemTwo from './pages/MenuItemTwo';
import ContactInfo from './pages/ContactInfo';
import Message from './pages/Message';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>}>

            <Route path='/menuItemOne' element={<MenuItemOne/>}/>
            <Route path='/menuItemOne/contactInfo' element={<ContactInfo/>}/>
            <Route path='/menuItemOne/contactInfo/message' element={<Message/>}/>
            <Route path='/menuItemTwo' element={<MenuItemTwo/>}/>
          </Route>
          
        </Routes>
      </div>
    </Router>
  )
}

export default App