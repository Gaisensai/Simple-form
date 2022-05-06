import React from "react";
import {FaAngleDown} from 'react-icons/fa';
import './Dropdown.css';

const Dropdown = () => {
    return ( 
        <div>
            <input  placeholder='I would describe my user type as' />
            <button className="icon">
               <FaAngleDown />
            </button>
        </div>
     );
}
 
export default Dropdown;