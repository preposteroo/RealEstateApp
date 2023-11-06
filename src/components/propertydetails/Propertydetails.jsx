import React, { useEffect, useState } from 'react';
import "./propertydetails.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faDollarSign, faLocationDot, faPaperPlane, faRuler, faSink, faTag,} from "@fortawesome/free-solid-svg-icons";
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';


const Propertydetails = () => {
  const {id} = useParams();
  console.log("ID from useParams:", id);
  const [property, setProperty] = useState(null);


  useEffect(() => {
    console.log("useEffect started");
    const fetchPropertyByID = async () => {
      console.log("fetchPropertyByID function called");
      try {
        const res = await axios.get(`http://localhost:8800/new_table/${id}`);
        console.log("API Request Successful");
        console.log("API Response Data:", res.data);
  
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
            <label >Your Email:<br/> </label>
            <input type="text" name="email_from" id="emailFrom" className="email__from" placeholder='example@me.com'></input>
            <label ><br/> <br/>Message: <br/> </label>
            <textarea name="message" id="message" className="message_box"></textarea><br/>
            <button type="submit"  className="submit">
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

