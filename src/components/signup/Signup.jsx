import "./signup.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        name: "",
        licenseNum: "",
        company: ""
      });

      const navigate = useNavigate()

      const handleChange = (e) => {
        setFormValues((prev) => ({...prev, [e.target.name]: e.target.value}));
      };

      const handleClick = async e =>{
        e.preventDefault()
        try{
          await axios.post("http://localhost:8800/broker", formValues)
          navigate("/")
        }catch(err){
          console.log(err.response)
        }
      }

    return(
        <div className="background">
        <div className="signUpContainer">
            <h1>Registration</h1>
            <h3>We need a few things from you!</h3>
            <form className="information">
            <label > Your Email:
                    <input type="text" name="email" value={formValues.email} onChange={handleChange}/>
                    <br></br>
                </label>
                <label > Your New Password (Don't forget it!):
                    <input type="text" name="password" value={formValues.password} onChange={handleChange}/>
                    <br></br>
                </label>
                <label > Your Full Name:
                    <input type="text" name="name" value={formValues.name} onChange={handleChange}/>
                    <br></br>
                </label>
                <label > Your License Number:
                    <input type="text" name="licenseNum" value={formValues.licenseNum} onChange={handleChange}/>
                    <br></br>
                </label>
                <label > The Company You Work For:
                    <input type="text" name="company" value={formValues.company} onChange={handleChange}/>
                    <br></br>
                </label>

                <button type="submit" onClick={handleClick}>Register</button>
            </form>
            
        </div>
        </div>
    );

}

export default Signup;