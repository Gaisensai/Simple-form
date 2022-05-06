import React from "react";
import Dropdown from "./Dropdown";
import Password from "./Password";
import Email from "./Email";

const Form = () => {
    return ( 
        <>
        <div className="name-container">
      <input className = 'input-field' placeholder= "Your Name" type ="text"/>
      </div><br/>
      <Email />
      <br/>
      <div className="name-container">
        <Dropdown />
      </div><br/>
      <div className="name-container">
      <Password/>
      </div><br/><br/>
      
      <button className="button">Next</button>
      
        </>
     );
}
 
export default Form;