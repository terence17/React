import React from 'react'
import '../styles/login.css'
import {Link, Redirect} from 'react-router-dom'
import {useHistory} from "react-router-dom"
import { TopNavBar } from '../components/navbar';
import { Footer } from '../components/footer';

function Login() {
    const history = useHistory();
    const goLogin = () => history.push('/App');


    return (
        <div>

        <TopNavBar />
        <br></br>
        <div className='bckg'>
            <h1 className="login">Login</h1>
            <input type="text" className="input" placeholder="username"></input>
            <button className="btnx" onClick={goLogin}>LOGIN</button>
            {/* <Link to="/Store">Login</Link> */}
            <h2 className="or">OR</h2>
            <button className="btnx" onClick={goLogin}>CONTINUE AS GUEST</button>
        </div>
        <br></br>

        <Footer />
        </div>
    )
}

export default Login
