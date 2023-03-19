import './App.css';
import Main from "../Main/Main";
import {Route, Routes, useLocation} from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import {useState} from "react";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const location = useLocation();
  return (
    <div className="App">
        <Routes>
            <Route exact path={'/'} element={<Main/>}/>
            <Route path={'/movies'} element={<Movies/>}/>
            <Route path={'/saved-movies'} element={<SavedMovies/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'/signin'} element={<Login/>}/>
            <Route path={'/signup'} element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
