import './Main.css';
import { Route, Routes } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../404/404";
import {Home} from "../Home/Home";

const Main = () => {
    return (
        <>
            <main className={'main'}>
                <Routes>
                    <Route exact path={'/'} element={<Home/>}/>
                    <Route path={'/movies'} element={<Movies/>}/>
                    <Route path={'/saved-movies'} element={<SavedMovies/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/signin'} element={<Login/>}/>
                    <Route path={'/signup'} element={<Register/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </main>
        </>
    )
}

export default Main
