import './Main.css';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../404/404";
import {Home} from "../Home/Home";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import {useEffect, useState} from "react";
import {mainApi} from "../../utils/utils";


const Main = ({ isLoggedIn, setLoggedIn, setLoggedOut, setUser }) => {
    const [windowWidth, setWindowWidth] = useState(null);
    const [savedMovies, setSavedMovies] = useState([]);

    const handleLogin = () => {
        setLoggedIn()
    }

    const handleLogout = () => {
        setLoggedOut()
    }

    const handleWindowResize = () => {
        const windowSize = window.innerWidth;
        setWindowWidth(windowSize);
    }

    const handleMovieSave = (movies) => {
        // console.log('HANDLE MOVIE SAVE   ', movies)
        setSavedMovies(movies)
    }


    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return (() => {
            window.removeEventListener('resize', handleWindowResize);
        })
    }, [windowWidth])

    useEffect(() => {
        handleWindowResize();
    }, []);

    // console.log('RENDER', Date.now())

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            mainApi.getMovies(token)
                .then(res => {
                    // console.log(res);
                    setSavedMovies(res);
                })
        }
    }, [])

    return (
        <>
            <main className={'main'}>
                <Routes>
                    {/*PROTECTED ROUTES*/}
                    <Route
                        path={'/movies'}
                        element={
                            <ProtectedRouteElement
                                element={Movies}
                                loggedIn={isLoggedIn}
                                windowSize={windowWidth}
                                savedMovies={savedMovies}
                                setSavedMovies={handleMovieSave}
                            />
                        }
                    />
                    <Route
                        path={'/saved-movies'}
                        element={
                            <ProtectedRouteElement
                                element={SavedMovies}
                                loggedIn={isLoggedIn}
                                windowSize={windowWidth}
                                savedMovies={savedMovies}
                                setSavedMovies={setSavedMovies}
                            />
                        }
                    />
                    <Route
                        path={'/profile'}
                        element={
                            <ProtectedRouteElement
                                element={Profile}
                                loggedIn={isLoggedIn}
                                onLogout={handleLogout}
                                setUser={setUser}
                            />
                        }
                    />

                    {/*OPEN ROUTES*/}
                    <Route
                        exact path={'/'}
                        element={
                        <Home isLoggedIn={isLoggedIn}/>
                    }
                    />
                    <Route
                        path={'/signin'}
                        element={<Login setLoggedIn={setLoggedIn}/>}
                    />
                    <Route
                        path={'/signup'}
                        element={<Register setLoggedIn={handleLogin}/>}
                    />
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </main>
        </>
    )
}

export default Main
