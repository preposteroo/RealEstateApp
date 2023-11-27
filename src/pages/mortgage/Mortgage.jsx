import "./mortgage.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import React, { useState } from "react";

const Mortgage = () => {
    const [formValues, setFormValues] = useState({
        value: 0,
        down: 0,
        rate: 0,
        tenure: 0,
        monthlyPayment: 0,
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      };

      const calculateMortgage = (event) => {
        event.preventDefault();
        const P = parseFloat(formValues.value) - parseFloat(formValues.down);
        const r = (parseFloat(formValues.rate) / 100) / 12;
        const n = parseFloat(formValues.tenure) * 12;
        const monthlyPayment = ((P * r * Math.pow(1+r,n)) / (Math.pow(1 + r, n)-1)).toFixed(2);
        setFormValues({ ...formValues, monthlyPayment });
      };
   
    return (
        <div>
            <Navbar/>
            <Header type="home"/>
            <div className="homeContainer">
                <div className="mortgageCalculator">
                <form onSubmit={calculateMortgage}>
         <div className="payment">
          <h4>Monthly Payment: ${formValues.monthlyPayment}</h4>
        </div>
        <div className="calculator">
      <label className="labelInput">
        <span className="spanInput">Home Value:</span> 
        <input type="number" name="value" className="morInput" value={formValues.value} onChange={handleInputChange}/> 
        <br></br>
      </label>
      <label className="labelInput">
        <span className="spanInput">Down Payment:</span>
        <input type="number" name="down" className="morInput" value={formValues.down} onChange={handleInputChange}/>
        <br></br>
      </label>
      <label className="labelInput">
        <span className="spanInput">Interest Rate:</span>
        <input type="number" name="rate" className="morInput" value={formValues.rate} onChange={handleInputChange}/> 
        <br></br>
      </label>
      <label className="labelInput">
        <span className="spanInput">Tenure:</span>
        <input type="number" name="tenure" className="morInput" value={formValues.tenure} onChange={handleInputChange}/> 
        <br></br>
        </label>
        </div>
        <button className = "submitBtn" type="submit">Calculate!</button>
        </form>
                </div>
            </div>
            
        </div>
    );
}

export default Mortgage;