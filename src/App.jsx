import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import DetailFilm from './Pages/DetailFilm/DetailFilm';
import SearchResult from './Pages/SearchResult/SearchResult';
import SignIn from './Pages/SignIn/SignIn';
import Register from './Pages/Register/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/detail/:id" element={<DetailFilm />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
