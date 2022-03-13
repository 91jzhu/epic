import {Link,useLocation} from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";
import {useEffect, useRef, useState} from "react";

const Header = () => {
    const url=useLocation().pathname
    const lineRef=useRef<HTMLDivElement>(null)
    const navRef=useRef<HTMLDivElement>(null)
    const selected=useRef<HTMLAnchorElement>(null)
    const toggle=(e:any)=>{
        if(e.localName==='a'&&lineRef.current){
            const {left:wLeft}=navRef.current!.getBoundingClientRect()
            const {width,left:eLeft}=e.getBoundingClientRect()
            lineRef.current.style.width=width+'px'
            lineRef.current.style.left=(eLeft-wLeft)+'px'
        }
    }
    useEffect(()=>{
        if(selected.current){
            toggle(selected.current)
        }
    })
    return (
        <Wrapper>
            <Pic><Icon name='cloud'/></Pic>
            <Nav onClick={toggle} ref={navRef}>
                <div className='line' ref={lineRef}/>
                <Link to='/' ref={url==='/'?selected:null}>首页</Link>
                <Link to='/history' ref={url==='/history'?selected:null}>上传历史</Link>
                <Link to='/about' ref={url==='/about'?selected:null}>我的</Link>
            </Nav>
            <Info>Github</Info>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background: #373756;
  color: #ffffff;
  text-shadow: 1px 1px 1px #a2a2b4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:80px;
`
const Pic = styled.div`
  padding: 0 48px;
`
const Nav = styled.div`
  text-shadow: 1px 1px 1px #a2a2b4;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height:100%;
  position: relative;
  .line{
    position: absolute;
    bottom:4px;
    height:4px;
    background: white;
    transition: all 250ms linear;
  }
  a {
    height:100%;
    color: #ffffff;
    font-size: 1.5rem;
    padding:0 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Info = styled.div`
  border: 1px solid white;
  height:100%;
  padding:0 18px;
  font-size: 1.5rem;
`
export default Header