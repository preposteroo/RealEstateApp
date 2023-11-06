import "./mortgage.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import React, { useState } from "react";

const Mortgage = () => {
    const [formValues, setFormValues] = useState({
        value: 0,
        down: 0,
        loan: 0,
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
        // Mortgage calculation logic
        const P = parseFloat(formValues.value - formValues.down);
        const r = (parseFloat(formValues.rate) / 100) / 12;
        const n = parseFloat(formValues.tenure) * 12;
        const monthlyPayment = (P * r) / (1 - Math.pow(1 + r, -n));
        setFormValues({ ...formValues, monthlyPayment });
      };
   
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <div className="mortgageCalculator">
                <form onSubmit={calculateMortgage}>
      <label>Home Value:
        <input type="number" name="value" value={formValues.value} onChange={handleInputChange}/> 
        <br></br>
      </label>
      <label>Down Payment:
        <input type="number" name="down" value={formValues.down} onChange={handleInputChange}/>
        <br></br>
      </label>
      <label>Loan Amount:
        <input type="number" name="loan" value={formValues.loan} onChange={handleInputChange}/> 
        <br></br>
      </label>
      <label>Interest Rate:
        <input type="number" name="rate" value={formValues.rate} onChange={handleInputChange}/> 
        <br></br>
      </label>
      <label>Tenure:
        <input type="number" name="tenure" value={formValues.tenure} onChange={handleInputChange}/> 
        <br></br>
        </label>
        <button type="submit">Calculate!</button>
        </form>
        <div>
          <h2>Monthly Payment: ${formValues.monthlyPayment}</h2>
        </div>

                </div>
            </div>
            
        </div>
    );
}

export default Mortgage;