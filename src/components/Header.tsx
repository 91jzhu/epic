import {Link, useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";
import {useEffect, useRef} from "react";
import {Button} from 'antd';
import {useStores} from "../store";
import {observer} from "mobx-react";

const Header = observer(() => {
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
    const {UserStore, AuthStore} = useStores()
    useEffect(() => {
        if (selected.current) {
            toggle(selected.current)
        }
    })
    useEffect(() => {
        UserStore.pullUser();
    }, [])
    const h = useNavigate()
    const handleLogout = () => {
        AuthStore.logOut().then(() => {
            h('/login')
        })
    }
    const handleRegister = () => {
        // console.log('跳转到注册页面')
        h('/register')
    }
    const handleLogin = () => {
        // console.log('跳转至登录页')
        h('/login')
    }
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
                        UserStore.currentUser ? <>
                                <div>你好，{UserStore.currentUser['attributes']['username']}</div>
                                <Btn size='large' onClick={handleLogout}>注销</Btn>
                            </> :
                            <>
                                <Btn size='large' onClick={handleRegister}>注册</Btn>
                                <Btn size='large' onClick={handleLogin}>登录</Btn>
                            </>
                    }
                    {/*<Link to='/register'>注册</Link>*/}
                    {/*<Link to='/login'>登录</Link>*/}
                </Buttons>
            </Nav>
            <Info><Icon name='github'/></Info>
        </Wrapper>
    )
})
const Wrapper = styled.div`
  width: 100vw;
  background: #373756;
  color: #ffffff; 
  text-shadow: 1px 1px 1px #a2a2b4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  position: sticky;
  top:0;
  z-index: 1;
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
    bottom: -6px;
    height: 6px;
    border-radius: 24px;
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
  height: 100%;
  padding: 0 64px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Links = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`
const Buttons = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    font-size: 24px;
  }
`
const Btn = styled(Button)`
  margin: 0 12px;
`

export default Header


