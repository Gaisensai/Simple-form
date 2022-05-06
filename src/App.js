import React from "react";
import Form from "./Components/Form";


const App = () => {
  return ( 
    <>
      <aside className="dummy-container">
        <h1 className="dummy-heading">Dummy Heading</h1>
        <p className="dummy-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </aside>

    <div className="form-container">
      <h1>Let's set up your account</h1>
      <p className="account">Already have an account? <span>Sign in</span></p><br/>
      <Form/>
      
      <br/><br/>
      <p className="footer">By clicking "Next" button, you agree to creating a free account, and to <span>Terms <br/> <br/>of Service</span> and  <span>Private Policy</span></p>
      </div>

       
    

    </>
   );
}
 
export default App;