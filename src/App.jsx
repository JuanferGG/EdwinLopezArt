import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import './App.css'
import 'react-toastify/dist/ReactToastify.css';


import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import AdvertisingPage from './pages/AdvertisingPage'
import ContactPage from './pages/ContactPage'

import AbouPage from './pages/AbouPage'

function App() {

  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/gallery' element={ <GalleryPage/> } />
        <Route path='/advertising' element={ <AdvertisingPage/> } />
        <Route path='/contact' element={ <ContactPage/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
