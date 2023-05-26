import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom';

const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errorMsg, setErrMsg] = useState('');
    const [errorPass, setErrPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if(email && errorMsg.length===0 && pass && errorPass.length===0 ){
            navigate("/formpage")
        }else if(!email){
            setErrMsg(<div>Enter Email</div>)
            e.preventDefault();
        }else if(!pass){
            setErrPass(<div>Enter Password</div>)
            e.preventDefault();
        }
    }

    const setEmailFunc = (e) => {
        setEmail(e.target.value)
        if(!email.includes('@')){
            setErrMsg(<div>Email should include @</div>)
        }else{
        setErrMsg('')
        }
    }

    const setPassFunc = (e) => {
    var regex = /^\d(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
        setPass(e.target.value)
        if(!regex.test(pass) && pass.length<8){
            setErrPass(<div>password should be more than 8 characters including special characters and numbers</div>)
        }else{
        setErrPass('')
        }
    }

    return (
        <div className="App" style={{backgroundImage: "linear-gradient(79deg, #7439db, #C66FBC 48%, #F7944D)",textAlign: 'center',
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',  justifyContent: 'center',
        color: 'white'}}>
        <div className="auth-form-container" style={{display: 'flex',flexDirection: 'column',border:"2px solid white",borderRadius:'10px',padding:"30px",width:"28%",backgroundColor:"floralwhite"}}>
            <h2 style={{marginBottom:"20px",fontFamily: "Roboto",color:"darkviolet"}}>Login</h2>
            <form className="login-form" style={{display: 'flex',flexDirection: 'column'}} onSubmit={handleSubmit}>
                <label style={{textAlign: 'left',padding: '0.25rem 0',color:"white"}} htmlFor="email">Email</label>
                <input style={{margin: '0.5rem 0',padding: '1rem',border:errorMsg?"1px solid red": '1px solid darkviolet',borderRadius: '10px',marginBottom:"10px"}} value={email} onChange={(e) => setEmailFunc(e)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <div style={{color:"red",marginBottom:"20px"}}>{errorMsg?errorMsg:''}</div>
                <label style={{textAlign: 'left',padding: '0.25rem 0',color:"white"}} htmlFor="password">Password</label>
                <input style={{margin: '0.5rem 0',padding: '1rem',border:errorPass?"1px solid red": '1px solid darkviolet',borderRadius: '10px',marginBottom:"10px"}} value={pass} onChange={(e) => setPassFunc(e)} type="password" placeholder="********" id="password" name="password" />
                <div style={{color:"red",marginBottom:"20px"}}>{errorPass?errorPass:''}</div>
                <button style={{border: 'none',backgroundColor: 'darkviolet',padding: '15px',borderRadius: '10px',cursor: 'pointer',marginTop:"20px",fontFamily: "Roboto"}} type="submit" onClick={handleSubmit}>Log In</button>
            </form>
         </div>
        </div>
    )
};

export default LoginPage;