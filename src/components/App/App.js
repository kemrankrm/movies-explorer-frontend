import './App.css';
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useEffect, useState} from "react";
import {mainApi} from "../../utils/utils";
import {userData} from "../../context/context";
import auth from "../../utils/auth";
import {useNavigate} from "react-router-dom";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false );
    const [user, setUser] = useState({ name: 'Undef', email: 'Undef'});
    const navigate = useNavigate();


    const handleLoggedIn = () => {
        setIsLoggedIn(true);
        navigate('/movies');
    }

    const handleLoggedOut = () => {
        localStorage.removeItem('jwt')
        setIsLoggedIn(false);
    }



    useEffect(() => {
        const token = localStorage.getItem('jwt')
        // console.log('TOKEN', token);
        if (token) {
            auth.getCurrentProfile(token)
                .then(res => {
                    setUser({ name: res.name, email: res.email});
                    handleLoggedIn();
                })
                .catch(e => console.log(e));
        } else console.log('NOT TOKEN', token);

    }, [])



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
