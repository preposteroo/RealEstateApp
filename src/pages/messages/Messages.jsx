import "./messages.css";
import Navbar from "../../components/navbar/Navbar";
import Brokerheader from "../../components/brokerheader/Brokerheader";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Message = () => {
  const [messages, setMessages] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")); 

  const handleDecline = async (messageId) => {
    try {
      await axios.delete(`http://localhost:8800/messages/${messageId}`);
      setMessages((prevMessages) => prevMessages.filter((message) => message.id !== messageId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleAccept = async (messageId, propAddress) => {
    try {
      await axios.delete(`http://localhost:8800/new_table/${propAddress}`);

      await axios.put(`http://localhost:8800/messages/${messageId}`, { status: 'Sold!' });
      setMessages((prevMessages) => prevMessages.filter((message) => message.id !== messageId));
    } catch (error) {
      console.error(error);
    }
  };

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
          return message.toName === userName;
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
    <div>
      <h1>Your Messages</h1>
      <ul>
        {messages.map((message) => (
          
          <div className="note" key={message.id}>
            <div className="message">
              <div className="messageInfo">
            <b>New Message regarding {message.propAddress}: </b> <br/> <br/>
            <b>From: {message.fromName} | License Number: {message.licenseNumber} | Company: {message.agency}</b> <br/> <br/> 
            </div>
            <div className="actualMessage">
              <b>Message: <br/></b> <p>Hi! It's {message.fromName}.<br/> 
              My client would like to make an <b>offer of {message.offer}</b>. <br/>
              They would like to finalize the deed of sale on {message.deedDate} <br/>and are planning 
              on moving in on {message.moveDate}.<br/><br/>
              </p>Here's a little message from the buyer: {message.message}<br/><br/>
              <b>Here is their information:</b><br/>
              <b>Buyer Name:  </b>{message.buyerName}<br/>
              <b>Current Address: </b> {message.buyerAddress}<br/>
              <b>Email: </b>{message.buyerEmail}<br/>
              </div>
              </div>
              <div className="btn">
              <button className="accept" onClick={() => handleAccept(message.id,message.propAddress)}>Accept Offer </button><br/>
              <button className="decline" onClick={() => handleDecline(message.id)}>Decline Offer </button>
              </div>
            </div>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Message;

