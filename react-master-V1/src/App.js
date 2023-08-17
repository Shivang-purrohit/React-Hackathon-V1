import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Register from "./Components/Register";
import Login from "./Components/Login";
import Movie from "./Components/Movie";
import Favorites from "./Components/Favorites";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/favorite" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
