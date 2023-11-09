import { Link } from 'react-router-dom';
import "./findBroker.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const FindBroker = () => {
    const [formValues, setFormValues] = useState([])
    const [filteredBrokers, setFilteredBrokers] = useState([]);
    const [requestInfo, setRequestInfo] = useState([]);

    useEffect(()=>{
        const  fetchAllBooks = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/broker")
                setFormValues(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks();
    },[])
    const handleSearch = (searchQuery) => {
        const filteredResults = formValues.filter((broker) =>
          broker.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBrokers(filteredResults);
      };
      const handleSubmitRequest = async (nameBroker) => {
        try {
          await axios.post("http://localhost:8800/test", {
            nameBroker: nameBroker,
            request: requestInfo,
          });
          setRequestInfo("");
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div>
            <Navbar/>
            <Header type="home"/>
            <Search onSearch={handleSearch}/>
            <div className="homeContainer">    
                <div className="brokers">
                <h1>Brokers:</h1>
          {filteredBrokers.length > 0 ? (
            filteredBrokers.map((broker) => (
              <div className="brokerInfo" key={broker.idBroker}>
                <div className="broker_name">Name: {broker.name}</div>
                <div className="company">Company: {broker.company}</div>
                <div className="licenseNum">License: {broker.licenseNum}</div>
                <div className="email">Email: {broker.email}</div>
                <Link to={`/brokerProperties/${encodeURIComponent(broker.name)}`}>View Properties By This Broker</Link>
                <br/><br/>
                <div className="request">
                <label>Request Information, Make sure to include a contact method!</label><br/>
                <textarea
                name="requestinfo"
                id="request"
                value={requestInfo}
                onChange={(e) => setRequestInfo(e.target.value)}>
                </textarea><br/>
                <button onClick={() => handleSubmitRequest(broker.name)}>Request Info</button>
                </div>
              </div>
            ))
          ) : (
            <p>No brokers found.</p>
          )}  

                </div>
            </div>
        </div>
    );
}

export default FindBroker;