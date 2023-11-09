import "./request.css";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Brokerheader from "../../components/brokerheader/Brokerheader";

const Request = () => {
  const [requests, setRequests] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userName = user.name;

    fetch(`http://localhost:8800/test/search?nameBroker=${userName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setRequests(data))
      .catch((error) => console.error(error));
  }, [user]);

  return (
    <div>
      <Navbar />
      <Brokerheader/>
      <div className="homeContainer">
        <h1>Requests for {user.name} from Website Users</h1>
        <ul>
          {requests.map((request) => (
            <div className="requestItem" key={request.id}>
              <div className="requestDetails">
                <p>
                  <strong>Request:</strong> {request.request}
                </p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Request;
