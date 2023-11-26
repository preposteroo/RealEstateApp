import Navbar from "../../components/navbar/Navbar";
import Brokerheader from "../../components/brokerheader/Brokerheader";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./pending.css";


const Pending = () => {
    const [messages, setMessages] = useState([]);
    const user = JSON.parse(localStorage.getItem("user")); 

  
    useEffect(() => {

      const token = localStorage.getItem('token');
      const userName = user.name;
      
      axios.get('http://localhost:8800/messages', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const userMessages = response.data.filter((message) => {
            return message.fromName === userName;
        })
        setMessages(userMessages);
      })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    return (
      <div>
        <Navbar/>
        <Brokerheader type="home"/>
        <h1>Pending Requests</h1>
        <ul>
          {messages.map((message) => (
            
            <div className="note" key={message.id}>
              <div className="message">
              <b>New Message regarding {message.propAddress}: </b> <br/> <br/>
                <b>Message: <br/></b> <p>Hi! It's {message.fromName}.<br/> 
                Here's my license number: {message.licenseNumber}<br/> 
                Here is the agency I work for: {message.agency}<br/> 
                My client would like to make an <b>offer of {message.offer}$</b>. <br/>
                They would like to finalize the deed of sale on {message.deedDate} <br/>and are planning 
                on moving in on {message.moveDate}.<br/><br/>
                </p>Here's a little message from the buyer: {message.message}<br/><br/>
                <b>Here is their information:</b><br/>
                <b>Buyer Name:  </b>{message.buyerName}<br/>
                <b>Current Address: </b> {message.buyerAddress}<br/>
                <b>Email: </b>{message.buyerEmail}<br/>
                </div>
                <div className="status">
                    <button>
                    {message.status}
                    </button>
                </div>
              </div>
          ))}
        </ul>
      </div>
    );
  };

export default Pending;