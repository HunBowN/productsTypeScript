import {Route, Router, Routes} from 'react-router-dom'
import { AboutPage } from './pages/aboutPage';
import { ProductPage } from './pages/productsPage';
import { Navigation } from './component/Navigation';
// import { ProductPage } from './pages/productsPage';
// import productsPage from './pages/productsPage'



function App() {
  return(
    <>
    <Navigation />
    <Routes>
        {/* <Route path='/' element = { <productsPage /> } /> */}
        <Route path='/about' element = { <AboutPage /> } />
        <Route path='/' element = { <ProductPage /> } />
    </Routes>
    </>
  )
  
}

export default App;
