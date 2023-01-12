import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Events from './pages/events/Events';
import Home from './pages/home/Home';
import Libray from './pages/library/Libray';
import Ministries from './pages/ministries/Ministries';
import Videos from './pages/videos/Videos';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import Admin from './pages/admin/Admin';

function App() {
  return (
     <BrowserRouter>
    <div className="App">
        <Navbar/>
        <Routes> 
          <Route  exact path='/' element={ <Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/ministries' element={<Ministries/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/article' element={<Blog/>}/>
          <Route path='/videos' element={<Videos/>}/>
          <Route path='/library' element={<Libray/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
