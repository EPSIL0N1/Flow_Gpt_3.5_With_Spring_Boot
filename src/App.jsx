import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './components/HeaderComponent'
import ListReport from './components/ListReport'
import FooterComponent from './components/FooterComponent'
import ReportComponent from './components/ReportComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    
    <HeaderComponent/>
    
    <Routes>
      <Route path='/' element={<ListReport/>}></Route>

      <Route path='/add-report' element={<ReportComponent/>}></Route>
      
      <Route path='/edit-report/:id' element={<ReportComponent/>}></Route>
    </Routes>
      
    <FooterComponent/>
    
    </BrowserRouter>
    </>
  )
}

export default App
