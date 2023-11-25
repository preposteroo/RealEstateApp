import React, { useEffect, useState } from 'react';
import "./propertydetails.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faLocationDot, faPaperPlane, faRuler, faSink, faTag,} from "@fortawesome/free-solid-svg-icons";
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import { useNavigate } from "react-router-dom";


const Propertydetails = () => {
  const {id} = useParams();
  console.log("ID from useParams:", id);
  const [property, setProperty] = useState(null);
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    toName: "",
    fromName: "",
    message:"",
    offer:"",
    buyerEmail:"",
    buyerAddress:"",
    buyerName:"",
    deedDate:"",
    moveDate:"",
    propAddress:"",
    licenseNumber:"",
    agency:"",
  });

  const handleChange = (e) => {
    console.log('handleChange called');
    setFormValues((prev) => ({...prev, [e.target.name]: e.target.value}));
    console.log('Form values updated:', formValues);
  };

  const handleClick = async e =>{
    e.preventDefault()
    try{
      console.log('handleclick started');
      await axios.post("http://localhost:8800/messages", formValues)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  };
  

  useEffect(() => {
    console.log("useEffect started");
    const fetchPropertyByID = async () => {
      console.log("fetchPropertyByID function called");
      try {
        const res = await axios.get(`http://localhost:8800/new_table/${id}`);
        console.log("API Request Successful");
        console.log("API Response Data:", res.data);
    
          setFormValues((prev) => ({
          ...prev,
          toName: res.data.bName,
          propAddress: res.data.address,
          fromName: JSON.parse(localStorage.getItem("user")).name,
          licenseNumber: JSON.parse(localStorage.getItem("user")).licenseNum,
          agency: JSON.parse(localStorage.getItem("user")).company,
        }));
  
        setProperty(res.data);
        console.log("property:", property);    
      } catch (err) {
        if (err.response) {
          console.error("Server Response Error - Status:", err.response.status);
          console.error("Server Response Data:", err.response.data);
        } else if (err.request) {
          console.error("Request Error - No Response Received");
        } else {
          console.error("Other Error:", err.message);
        }
      }
    };
    fetchPropertyByID();
  }, [id]);
  
  useEffect(() => {
    console.log("Property state:", property);
  }, [property]);

  
  return (
    <div>
    <Navbar/>
    <Header type="home"/>
    <div className="homeContainer">
     <div className="specifics">
       {property ? (
        <div className="container">
          <h1 className="listingTitle">{property.address}</h1>
        <div className="specifics">
         <div className="listingspecific">
         
          <img src={property.imgsource} alt="There should be an Image here" className="listImage"/>
          <div className="infospecific">
            <div className="title">
            <h3>Property Details</h3>
            </div>
            <div className="propertydetail">
            <div className="details">    
          <FontAwesomeIcon icon={faBed} style={{color: "#000000",}} />
          <span> Bedrooms:{property.numBed} <br/> <br/> </span> 
          <FontAwesomeIcon icon={faLocationDot} style={{color: "#000000",}} />
          <span> Location: {property.location} <br/> <br/> </span> 
           <FontAwesomeIcon icon={faSink} style={{color: "#000000",}} />
           <span> Bathrooms:{property.numBath}<br/> <br/> </span> 
           <FontAwesomeIcon icon={faRuler} style={{color: "#000000",}} />
          <span> Sq. Footage:{property.sqf} <br/> <br/></span>
          <FontAwesomeIcon  icon={faTag} style={{color: "#000000",}} />
          <span>Asking For {property.price}$ <br/> <br/> </span> 
          </div>
          <div className="broker">
          <h4>Broker Name: {property.bName}</h4> 
          <h4>Broker Company: {property.bCompany}</h4>
          </div>
          </div>
          
          </div>
        </div>
        <div className="contact">
          <h2 className="contactUs">Contact The Broker of this Listing</h2>
          <form className="contact_form">
            <label><br/> <br/>Your Client's Name:<br/> </label>
            <input
            type="text"
            name="buyerName"
            id="buyer_name"
            className="name_input"
            value={formValues.buyerName}
            onChange={handleChange}
            />
             <label><br/> <br/>Your Client's Current Address:<br/> </label>
            <input
            type="text"
            name="buyerAddress"
            id="buyer_address"
            className="address_input"
            value={formValues.buyerAddress}
            onChange={handleChange}
            />
            {/**  <label><br/> <br/>Address Interested In:<br/> </label>
            <input
            type="text"
            name="propAddress"
            id="prop_address"
            className="propaddress_input"
            value={formValues.propAddress}
            onChange={handleChange}
            />*/}
            <label><br/> <br/>Your Client's Email:<br/> </label>
            <input
            type="text"
            name="buyerEmail"
            id="email"
            className="email_input"
            value={formValues.buyerEmail}
            onChange={handleChange}
            />
            <label><br/> <br/>Your Client's Offer:<br/> </label>
            <input
            type="text"
            name="offer"
            id="client_offer"
            className="offer_input"
            value={formValues.offer}
            onChange={handleChange}
            />
            <label><br/> <br/>Deed Sale Date:<br/> </label>
            <input
            type="text"
            name="deedDate"
            id="deed_date"
            className="deed_input"
            value={formValues.deedDate}
            onChange={handleChange}
            />
            <label><br/> <br/>Move In Date:<br/> </label>
            <input
            type="text"
            name="moveDate"
            id="move_date"
            className="move_input"
            value={formValues.moveDate}
            onChange={handleChange}
            />
            <label><br/> <br/>Message: <br/> </label>
            <textarea name="message" id="message" className="message_box" value={formValues.message} onChange={handleChange}></textarea><br/>
            <button type="submit"  className="submit" onClick={handleClick}>
              <FontAwesomeIcon icon={faPaperPlane} style={{color: "#000000",}} />
              <span>Send</span></button>
          </form>

          
          </div>
        </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
    </div>
  );
};

export default Propertydetails;

