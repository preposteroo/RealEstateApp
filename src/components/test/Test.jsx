import { useNavigate } from "react-router-dom";
import "./test.css";
import React, { useState } from "react";
import axios from "axios";


const Test = () => {
  const [formValues, setFormValues] = useState({
      address: "",
      numBath: 0,
      numBed: 0,
      location:"",
      bName:"",
      bCompany:"",
      sqf: 0,
      price:0,
      imgsource:""
    });

    const [deleteId, setDeleteId] = useState("");
    const navigate = useNavigate()

    const handleChange = (e) => {
      setFormValues((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleDeleteChange = (e) => {
      setDeleteId(e.target.value);
    };
    const handleDeleteClick = async () => {
      try {
        await axios.delete(`http://localhost:8800/new_table/${deleteId}`, {
          data: { idBroker: deleteId },
        });
      } catch (err) {
        console.log(err);
      }
    };

    const handleClick = async e =>{
      e.preventDefault()
      try{
        await axios.post("http://localhost:8800/new_table", formValues)
        navigate("/")
      }catch(err){
        console.log(err)
      }
    }
  return (
     <div className="addListing">
      <form className="form">
        <div className="delete">
      <label>
          <h1>Delete A Property</h1>
          Enter Property ID to Delete:
          <input
            type="text"
            name="idBroker"
            value={deleteId}
            onChange={handleDeleteChange}
          />
        </label>
        <br></br>
        <button className="deleteBtn" onClick={handleDeleteClick}>
          Delete
        </button>
        <br></br>
        </div>
        <div className="propertyInfo">
    <label>
      <h1>Add A Property</h1>
      Address:
      <input type="text" name="address" value={formValues.address} onChange={handleChange}/> 
      <br></br>
    </label>
    <label>Location:
      <input type="text" name="location" value={formValues.location} onChange={handleChange}/>
      <br></br>
    </label>
    <label>Property Price:
      <input type="number" name="price" value={formValues.price} onChange={handleChange}/> 
      <br></br>
    </label>
    <label>Number of Bedrooms:
      <input type="number" name="numBed" value={formValues.numBed} onChange={handleChange}/> 
      <br></br>
    </label>
    <label>Number of Bathrooms:
      <input type="number" name="numBath" value={formValues.numBath} onChange={handleChange}/> 
      <br></br>
    </label>
    <label>Square Footage:
      <input type="number" name="sqf" value={formValues.sqf} onChange={handleChange}/> 
      <br></br>
    </label>
    <label>Broker Name:
      <input type="text" name="bName" value={formValues.bName} onChange={handleChange}/> 
      <br></br>
    </label>
    <label>Enter Broker Company:
      <input type="text" name="bCompany" value={formValues.bCompany} onChange={handleChange}/> 
      <br></br>
    </label>
    <label>IMG source:
      <input type="text" name="imgsource" value={formValues.imgsource} onChange={handleChange}/> 
      <br></br>
    </label>
    <br></br>
    <button className="propertyBtn" type="submit" onClick={handleClick}>Add Property</button>
    </div>
  </form>
     </div>
  )
}
export default Test;