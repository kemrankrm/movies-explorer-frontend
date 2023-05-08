import './App.css';
import Main from "../Main/Main";
import {Route, Routes, useLocation} from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import {useState} from "react";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../404/404";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const location = useLocation();
  return (
    <div className="App">
        <Header isLoggedIn={false}/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
