import React,{lazy,Suspense} from 'react';
import './App.css';
import {Route, Link, Routes} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const Home=lazy(()=>import('./pages/Home'))
const History=lazy(()=>import('./pages/History'))
const About=lazy(()=>import('./pages/About'))
const Login=lazy(()=>import('./pages/Login'))
const Register=lazy(()=>import('./pages/Register'))

function App() {
    return (
        <div>
            <Header/>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/history' element={<History/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </Suspense>
            <Footer/>
        </div>
    );
}

export default App;
