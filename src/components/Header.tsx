import {Link} from "react-router-dom";

const Header=()=>{
    return (
        <>
            <h2>Header</h2>
            <nav>
                <Link to='/'>首页</Link>|
                <Link to='/history'>历史</Link>|
                <Link to='/about'>我的</Link>
            </nav>
        </>
    )
}
export default Header