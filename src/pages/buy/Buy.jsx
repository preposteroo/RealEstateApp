import "./buy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faHeart, faRuler, faSink,} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const Buy = () => {
    const [formValues, setFormValues] = useState([])
    const [favorites, setFavorites] = useState([])

    useEffect(()=>{
        const  fetchAllBooks = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/new_table")
                setFormValues(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks();
    },[])

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
      }, []);

    const addToFavorites = (listing) => {
        const updatedFavorites = [...favorites, listing];
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      };

      const removeFromFavorites = (listing) => {
        const updatedFavorites = favorites.filter((fav) => fav.id !== listing.id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      };

    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <div className="listings">
                    {formValues.map((list)=>(
                        <div className="lists" key={list.id}>
                             <div className="Listing">
                                 <img src={list.imgsource} alt="There should be an Image here" className="listImg"/>
                                     <div className="info">
                                     <h1 className="listingTitle">{list.address}</h1>
                                     <FontAwesomeIcon icon={faBed} style={{color: "#000000",}} />
                                    <span> Bedrooms:{list.numBed} <br/> <br/> </span> 
                                     <FontAwesomeIcon icon={faSink} style={{color: "#000000",}} />
                                     <span> Bathrooms:{list.numBath}<br/> <br/> </span> 
                                     <FontAwesomeIcon icon={faRuler} style={{color: "#000000",}} />
                                     <span> Sq. Footage:{list.sqf} <br/> <br/> <br/> </span> 
                                      <h4>{list.bName} / {list.bCompany}</h4> 
                                     

                                  </div>
                                <div className="favs">
                         <button className="heartBtn"  onClick={() =>
                    favorites.some((fav) => fav.id === list.id)
                      ? removeFromFavorites(list)
                      : addToFavorites(list)
                  }
                >
                  {favorites.some((fav) => fav.id === list.id)
                    ? "Remove from Favorites"
                    : "Add to Favorites"}
                         <FontAwesomeIcon icon={faHeart} style={{color: "#000000",fontSize:30}} />
                         </button>
                     </div>
                 </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}

export default Buy;