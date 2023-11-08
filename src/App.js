import Navbar from "./Components/UI/Navbar/Navbar";
import {
    BrowserRouter,
} from "react-router-dom";
import "./styles/App.css"
import Header from "./Components/UI/Header/Header";
import {useEffect, useState} from "react";
import {AuthContext} from "./context";
import Cookies from "js-cookie";
import AppRouter from "./Components/AppRouter";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        if (Cookies.get('auth') !== undefined) {
            setIsAuth(true)
        }
        setLoading(false)
    }, [])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
        <BrowserRouter>
            {isAuth && <Header/>}
            {isAuth && <Navbar/>}
            <AppRouter/>
        </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
