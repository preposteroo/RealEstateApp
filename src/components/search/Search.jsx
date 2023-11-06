import "./search.css";
import React, { useState } from "react";

const Search = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
      onSearch(searchQuery);
    };
    return (
        <div className="searchBar">
            <div className="searchBrokerName">
                <input
                className="brokerName"
                type="text"
                placeholder="Please Enter the Name of a Broker!"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                ></input>
            </div>
            <div className="SearchButton">
                <button className="searchbtn" onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}
export default Search;