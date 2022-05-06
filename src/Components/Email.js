import React, {useState} from "react";
import './Email.css';

const Email = () => {
    const [emailisValid, setEmailIsValid] = useState(true)
    const [message, setMessage]= useState("")
    const emailRegex = /\S+@\S+\.\S+/;

    const validateEmail = (event) => {
        const email = event.target.value;
        if (emailRegex.test(email)) {
          setEmailIsValid(true);
        } else {
          setEmailIsValid(false);
          setMessage('Please enter a valid Email Address');
        }
      };

    return ( 
        <div className="email-container">
            <input  type="email" placeholder="Email Address" onChange={validateEmail} />
            {!emailisValid && <div><p className="message">{message}</p></div>}
        </div>
     );
}
 
export default Email;