import "./list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faHeart, faRuler, faLocationDot, faSink,} from "@fortawesome/free-solid-svg-icons";

const List = () => {
    return(
        <div className="Listing">
        <img src="https://ap.rdcpix.com/3934fb3acf66e12fb2d087d968e73e0dl-m1345627527od-w480_h360_x2.webp" alt="listing" className="listImg"/>
    <div className="info">
    <h1 className="listingTitle">5207 Av. Coolbrook</h1>
    <FontAwesomeIcon icon={faBed} style={{color: "#000000",}} />
     <span> Bedrooms: <br/> <br/> </span> 
    <FontAwesomeIcon icon={faSink} style={{color: "#000000",}} />
         <span> Bathrooms:<br/> <br/> </span> 
    <FontAwesomeIcon icon={faRuler} style={{color: "#000000",}} />
         <span> Sq. Footage: <br/> <br/> <br/> </span> 
        <h4>Broker Name / Broker Company</h4>
    </div>
    <div className="favs">
    <FontAwesomeIcon icon={faLocationDot} style={{color: "#000000",fontSize:27,marginRight:10, marginTop:15}} />
    <FontAwesomeIcon icon={faHeart} style={{color: "#000000",fontSize:30, marginTop:20}} />
    </div>
    </div>
    )
      };

export default List;