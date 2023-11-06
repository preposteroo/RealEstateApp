import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { faBed, faCaretDown, faHouse, faLocationDot, faSink, faTag } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = ({type}) => {
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        Bedrooms: 0,
        Bathrooms: 1,
    });
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
const handleOption = (name, operation) => {
    setOptions((prev) => {
        return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
    });
};
    return(
        <div className = "header">
            <div className="headerContainer">
            <div className="headerList">

            <div className="headerListItem active">
             <FontAwesomeIcon icon={faCaretDown} style={{color: "#000000",}} />
                <span onClick={() => openInNewTab("http://localhost:3000/")}> &#160;Home Page </span>  
                </div>

                <div className="headerListItem active">
                <FontAwesomeIcon icon={faCaretDown} style={{color: "#000000",}} />
                <span onClick={() => openInNewTab("http://localhost:3000/Buy")}> &#160;Buy </span>  
                </div>

                <div className="headerListItem active">
                <FontAwesomeIcon icon={faCaretDown} style={{color: "#000000",}} />
                <span onClick={() => openInNewTab("http://localhost:3000/Favourites")}> &#160;Favourites </span>  
                </div>

                <div className="headerListItem active">
                <FontAwesomeIcon icon={faCaretDown} style={{color: "#000000",}} />
                <span onClick={() => openInNewTab("http://localhost:3000/findBroker")}> &#160;Find a Broker </span>  
                </div>

                <div className="headerListItem active">
                <FontAwesomeIcon icon={faCaretDown} style={{color: "#000000",}} />
                <span>&#160; Mortgage Calculator </span>  
                </div>

            </div>
            <div className="company">
            <div className="tagLine">
            <h1 className="headerTitle">Your Future, Our Focus</h1>
            <p className="headerDesc">Because Your Home Matters...</p>
            <button onClick={() => openInNewTab("http://localhost:3000/Login")}className="headerBtn"> Log In / Register </button>
            </div>
            <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/old-montreal-cobblestone-streets-brendan-reals.jpg" className="montreal"></img>
            </div>
            {type !== "home" &&
                <>
            <div className="headerSearch">
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faLocationDot} className="headerIcon" style={{color: "#000000",}} />
                <input type="text" placeholder="Location" className="headerSearchInput"/>
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faTag} className="headerIcon" style={{color: "#000000",}} />
                <input type="text" placeholder="Price Range" className="headerSearchInput"/>
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faHouse}  className="headerIcon" style={{color: "#000000",}} />
                <input type="text" className="headerSearchInput" placeholder="Type of Property"/>
                </div>

                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faSink} className="headerIcon" style={{color: "#000000",}} /> 
                <span onClick={()=>setOpenOptions(!openOptions)}className="headerSearchBed">{`${options.Bathrooms} Bathrooms`}</span>
                {openOptions && <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Bathrooms</span>
                        <div className="optionCounter">
                        <button disabled={options.Bathrooms <= 1} className="optionCounterButton" onClick={()=>handleOption("Bathrooms","d")}>-</button>
                        <span className="optionCounterNumber">{options.Bathrooms}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("Bathrooms","i")}>+</button>
                        </div>
                    </div>
                </div>}
                </div>

                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon"  style={{color: "#000000",}}/>
                <span onClick={()=>setOpenOptions(!openOptions)}className="headerSearchBed">{`${options.Bedrooms} Bedrooms`}</span>
                {openOptions &&<div className="options">
                    <div className="optionItem">
                        <span className="optionText">Bedrooms</span>
                        <div className="optionCounter">
                        <button disabled={options.Bedrooms <= 0} className="optionCounterButton" onClick={()=>handleOption("Bedrooms","d")}>-</button>
                        <span className="optionCounterNumber">{options.Bedrooms}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("Bedrooms","i")}>+</button>
                        </div>
                    </div>
                </div>}
                </div>

                <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
                </div>

            </div></>}
            </div>
        </div>
    );
}

export default Header;