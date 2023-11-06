import "./favourites.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faHeart, faRuler, faLocationDot, faSink } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";


const Favourites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
      // Load favorites from local storage when the component mounts
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    }, []);
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
            <h1>Favorites</h1>
        <div className="listings">
          {favorites.map((listing) => (
            <div key={listing.id} className="lists">
               <div className="Listing">
              <img src={listing.imgsource} alt={listing.address} className="listImg" />
              <div className="info">
                <h1 className="listingTitle">{listing.address}</h1>
                <FontAwesomeIcon icon={faBed} style={{ color: "#000000" }} />
                <span> Bedrooms: {listing.numBed} <br /> <br /> </span>
                <FontAwesomeIcon icon={faSink} style={{ color: "#000000" }} />
                <span> Bathrooms: {listing.numBath}<br /> <br /> </span>
                <FontAwesomeIcon icon={faRuler} style={{ color: "#000000" }} />
                <span> Sq. Footage: {listing.sqf} <br /> <br /> <br /> </span>
                <h4>{listing.bName} / {listing.bCompany}</h4>
              </div>
              <div className="favs">
                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#000000", fontSize: 27, marginRight: 10, marginTop: 15 }} />
                <FontAwesomeIcon icon={faHeart} style={{ color: "#000000", fontSize: 30, marginTop: 20 }} />
              </div>
              </div>
            </div>
          ))}
        </div>
            </div>
        </div>
    );
}

export default Favourites;