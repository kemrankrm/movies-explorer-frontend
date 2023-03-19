import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Movies from "../Movies/Movies";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route exact path={'/'} element={<Main/>}/>
            <Route path={'/movies'} element={<Movies/>}/>
            <Route path={'/saved-movies'} element={<Main/>}/>
            <Route path={'/profile'} element={<Main/>}/>
            <Route path={'/signin'} element={<Main/>}/>
            <Route path={'/signup'} element={<Main/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
