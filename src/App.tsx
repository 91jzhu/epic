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
  display: flex;
  height:100vh;
  width:100vw;
  overflow-x:hidden;
  overflow-y:auto;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  ::-webkit-scrollbar {
    display: none;
  }
`
export default App;
