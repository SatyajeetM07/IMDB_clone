import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import Banner from "./components/Banner"
import Movies from "./components/Movies"
import Pagin from "./components/Pagination"
import Favourites from "./components/Favourites"

import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/Movies" element={<>
          <Banner />
          <Movies />
         </>}>
        </Route>
        <Route path="/favourites" element={<Favourites/>} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;