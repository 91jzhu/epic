import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";
import {useEffect, useRef, useState} from "react";
import {Button} from 'antd';

const Header = () => {
    const url = useLocation().pathname
    const lineRef = useRef<HTMLDivElement>(null)
    const navRef = useRef<HTMLDivElement>(null)
    const selected = useRef<HTMLAnchorElement>(null)
    const toggle = (e: any) => {
        if (e.localName === 'a' && lineRef.current) {
            const {left: wLeft} = navRef.current!.getBoundingClientRect()
            const {width, left: eLeft} = e.getBoundingClientRect()
            lineRef.current.style.width = width + 'px'
            lineRef.current.style.left = (eLeft - wLeft) + 'px'
        }
    }
    const [login, setLogin] = useState(false)
    useEffect(() => {
        if (selected.current) {
            toggle(selected.current)
        }
    })
    return (
        <Wrapper>
            <Pic><Icon name='cloud'/></Pic>
            <Nav onClick={toggle} ref={navRef}>
                <div className='line' ref={lineRef}/>
                <Links>
                    <Link to='/' ref={url === '/' ? selected : null}>首页</Link>
                    <Link to='/history' ref={url === '/history' ? selected : null}>上传历史</Link>
                    <Link to='/about' ref={url === '/about' ? selected : null}>我的</Link>
                </Links>
                <Buttons>
                    {
                        login ? <>
                                <h2>几人古</h2>
                                <Btn size='large' onClick={()=>setLogin(false)}>注销</Btn>
                            </> :
                            <>
                                <Btn size='large'>注册</Btn>
                                <Btn size='large' onClick={()=>setLogin(true)}>登录</Btn>
                            </>
                    }
                    {/*<Link to='/register'>注册</Link>*/}
                    {/*<Link to='/login'>登录</Link>*/}
                </Buttons>
            </Nav>
            <Info><Icon name='github'/></Info>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width:100vw;
  background: #373756;
  color: #ffffff;
  text-shadow: 1px 1px 1px #a2a2b4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`
const Pic = styled.div`
  padding: 0 64px;
`
const Nav = styled.div`
  text-shadow: 1px 1px 1px #a2a2b4;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;

  .line {
    position: absolute;
    bottom: 4px;
    height: 4px;
    background: white;
    transition: all 250ms linear;
  }

  a {
    height: 100%;
    color: #ffffff;
    font-size: 1.5rem;
    margin: 0 64px;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Info = styled.div`
  //border: 1px solid white;
  height: 100%;
  padding: 0 64px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Links = styled.div`
  //border: 1px solid white;
  display: flex;
  align-items: center;
  height: 100%;
`
const Buttons = styled.div`
  //border: 1px solid white;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;


  //a {
  //  display: block;
  //  text-decoration: none;
  //  color:#373756;
  //  background: white;
  //  border-radius: 4px;
  //  padding: 8px 12px;
  //  font-size: 20px;
  //  margin: 0 24px;
  //}
`
const Btn = styled(Button)`
  margin: 0 12px;
`
export default Header