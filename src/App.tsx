import React,{lazy,Suspense} from 'react';
import './App.css';
import {Route, Link, Routes} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import styled from "styled-components";

const Home=lazy(()=>import('./pages/Home'))
const History=lazy(()=>import('./pages/History'))
const About=lazy(()=>import('./pages/About'))
const Login=lazy(()=>import('./pages/Login'))
const Register=lazy(()=>import('./pages/Register'))

function App() {
    return (
        <Wrapper>
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
        </Wrapper>
    );
}
const Wrapper=styled.div`
  min-height:100vh;
  overflow-y: auto;
  width:100vw;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default App;
