import './App.css';
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useEffect, useState} from "react";
import {userData} from "../../context/context";
import auth from "../../utils/auth";
import {useNavigate} from "react-router-dom";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [user, setUser] = useState({ name: 'Undef', email: 'Undef'});
    const navigate = useNavigate();

    const handleLoggedIn = () => {
        setIsLoggedIn(true);
    }

    const handleLoggedOut = () => {
        localStorage.removeItem('jwt')
        localStorage.removeItem('foundMovies');
        localStorage.removeItem('foundSavedMovies');
        localStorage.removeItem('searchInput');

        navigate('/');
        setIsLoggedIn(null);
    }

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            auth.getCurrentProfile(token)
                .then(({name, email}) => {
                    setUser({ name, email});
                    handleLoggedIn();
                })
                .catch(e => console.log(e));
        } else {
            setIsLoggedIn(false)
        }
    }, [isLoggedIn])

    return (
        <div className="App">
            <userData.Provider value={user}>
                <Header isLoggedIn={isLoggedIn}/>
                <Main
                    isLoggedIn={isLoggedIn}
                    setLoggedIn={handleLoggedIn}
                    setLoggedOut={handleLoggedOut}
                    setUser={setUser}
                />
                <Footer/>
            </userData.Provider>
        </div>
    );
}

export default App;
