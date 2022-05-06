import React, {useState} from "react";
import {AiFillEye} from 'react-icons/ai';
import './Password.css';


const Password = ()=> {

    const [showPassword, setShowPassword] = useState(false)

    const passwordToggler = ()=>{
        setShowPassword(!showPassword)
    }

    return (
      <div className="password-container">
        <input className='input-field' type={showPassword ? 'text': 'password' } placeholder="Password" />
        <button className='password' onClick={passwordToggler}>
            <AiFillEye />
        </button>
        <br/><br/>
        <p style={{color: "grey"}}>Minimum 8 characters</p>
      </div>
    );
  }

  export default Password;