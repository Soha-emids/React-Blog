import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <div className='d-flex flex-column min-vh-100'>
      <Navbar/>
      <div className='flex-grow-1'>
        <div className='container mt-4 mb-5'>
          <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
        <Route path='/posts/:id' element={<PostDetail/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        </div>

      
        </div>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App;
