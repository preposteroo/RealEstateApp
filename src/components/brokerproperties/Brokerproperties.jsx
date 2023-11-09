import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faHeart, faRuler, faSink,} from "@fortawesome/free-solid-svg-icons";

const BrokerProperties = () => {
  const {id} = useParams();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchPropertiesByBroker = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/new_table/search?bName=${id}`);
        setProperties(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPropertiesByBroker();
  }, [id]);

  return (
    <div>
      <h1>Properties listed by {id}:</h1>
      {properties.length > 0 ? (
        properties.map((property) => (
          <div className="propertyInfo" key={property.id}>
            <div className="Listing">
                <img src={property.imgsource} alt="There should be an Image here" className="listImg"/>
                 <div className="info">
                 <h1 className="listingTitle">{property.address}</h1>
                 <FontAwesomeIcon icon={faBed} style={{color: "#000000",}} />
                  <span> Bedrooms:{property.numBed} <br/> <br/> </span> 
                 <FontAwesomeIcon icon={faSink} style={{color: "#000000",}} />
                   <span> Bathrooms:{property.numBath}<br/> <br/> </span> 
                  <FontAwesomeIcon icon={faRuler} style={{color: "#000000",}} />
                   <span> Sq. Footage:{property.sqf} <br/> <br/> <br/> </span> 
                   <h4>{property.bName} / {property.bCompany}</h4> 
                </div>
                
            </div>
          </div>
        ))
      ) : (
        <p>No properties listed by {id}.</p>
      )}
    </div>
  );
};

export default BrokerProperties;
