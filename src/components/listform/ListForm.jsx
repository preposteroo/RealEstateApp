import { useNavigate } from "react-router-dom";
import "./listform.css";
import React, { useState } from "react";
import axios from "axios";


const ListForm = () => {
    const [formValues, setFormValues] = useState({
        pType: "",
        price: 0,
        pAddress: "",
        city:"",
        bedrooms:0,
        bathrooms:0,
        squareft: 0,
        pDescription:"",
        brokerID:0,
        rentorbuy:"",
        pImage:""
      });

      const navigate = useNavigate()

      const handleChange = (e) => {
        setFormValues((prev) => ({...prev, [e.target.name]: e.target.value}));
      };

      const handleClick = async e =>{
        e.preventDefault()
        try{
          await axios.post("http://localhost:8800/property", formValues)
          navigate("/")
        }catch(err){
          console.log(err)
        }
      }
    return (
       <div className="addListing">
        <form className="form">
      <label>Address:
        <input type="text" name="pAddress" value={formValues.pAddress} onChange={handleChange}/> 
        <br></br>
      </label>
      <label>City:
        <input type="text" name="city" value={formValues.city} onChange={handleChange}/>
        <br></br>
      </label>
      <label>Property Price:
        <input type="number" name="price" value={formValues.price} onChange={handleChange}/> 
        <br></br>
      </label>
      <label>Number of Bedrooms:
        <input type="number" name="bedrooms" value={formValues.bedrooms} onChange={handleChange}/> 
        <br></br>
      </label>
      <label>Number of Bathrooms:
        <input type="number" name="bathrooms" value={formValues.bathrooms} onChange={handleChange}/> 
        <br></br>
      </label>
      <label>Square Footage:
        <input type="number" name="squareft" value={formValues.squareft} onChange={handleChange}/> 
        <br></br>
      </label>
      <label>Broker ID:
        <input type="number" name="brokerID" value={formValues.brokerID} onChange={handleChange}/> 
        <br></br>
      </label>
      <label>For Rent or To Buy?:
        <input type="text" name="rentorbuy" value={formValues.rentorbuy} onChange={handleChange}/> 
        <br></br>
      </label>
      <label>IMG source:
        <input type="text" name="pImage" value={formValues.pImage} onChange={handleChange}/> 
        <br></br>
      </label>
      <br></br>
      <button type="submit" onClick={handleClick}>Add Property</button>
    </form>
       </div>
    )
}
export default ListForm;