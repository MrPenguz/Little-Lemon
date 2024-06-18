
import './App.css';
// import { Advert } from './Components/Advert';
// import { Footer } from './Components/Footer';
// import Header from './Components/Header';
// import { Menu } from './Components/Menu';
// import Nav from './Components/Nav';
// import { Testimonials } from './Components/Testimonials';
import './bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Booking } from './Pages/Booking';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' index element={<Home />} />
          <Route path='/home' index element={<Home />} />
          <Route path='/reserve' element={<Booking />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
