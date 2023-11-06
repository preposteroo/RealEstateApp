import { faBed, faHeart, faLocationDot, faRuler, faSink } from "@fortawesome/free-solid-svg-icons";
import "./featured.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Featured = () => {
    return (

        <div className="featured">
            <div className="recentlyAdded">
                <div className="recently">
                <h2>Recently Added</h2>
                <h3 style={{color: 'gray'}}>Check-Out Our Most Recent Listings!</h3>
                </div>


                <div className="featuredList">
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
                    <div className="Listing">
                        <img src="https://ap.rdcpix.com/b04b817de661554b5b8fa68815bdacd3l-m1586508520od-w480_h360_x2.webp" alt="listing" className="listImg"/>
                    <div className="info">
                    <h1 className="listingTitle">7529 Rue Chabot</h1>
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
                </div>
        
            </div>
            <div className="Location">
                <h2>Trending Locations</h2>
                <h3 style={{color: 'gray'}}>Most Popular Locations for Buyers in Montreal, Canada</h3>
            </div>
            <div className="featuredLocation">
            <div className="featuredItem">
                <img src="https://quartiergeneralgriffintown-prevel.ca/workspace/uploads/site/exte-uerieur_william_1200px-en-1578931948.jpg" alt="Berri" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Griffintown</h1>
                    <h2>526 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://www.engelvoelkers.com/images/46034819-41c0-4afa-9fbf-7501506687a8/montr%C3%A9al-c%C3%B4te-des-neigesnotre-dame-de-gr%C3%A2ce-qc" alt="Berri" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Notre-Dame-De-Grace</h1>
                    <h2>278 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://rlp.jumplisting.com/photos/18/20/36/20/18203620_0_1.jpg" alt="Berri" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Westmount</h1>
                    <h2>134 Properties</h2>
                </div>
            </div>
            </div>
            <div className="Property">
                <h2>Search By Property Type</h2>
                <h3 style={{color: 'gray'}}>Find what's best for you</h3>
            </div>
            <div className="featuredProperty">
            <div className="propertyType">
                <img src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="Berri" className="propertyImg" />
                <div className="featuredTitles">
                    <h2>Apartment</h2>
                </div>
            </div>
            <div className="propertyType">
                <img src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450056.jpeg?k=251e2507d43a24a4c58bb961b8d157147d56efbf91b49f9606bc768c58f581e4&o=" alt="Berri" className="propertyImg" />
                <div className="featuredTitles">
                    <h2>House</h2>
                </div>
            </div>
            <div className="propertyType">
                <img src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=" alt="Berri" className="propertyImg" />
                <div className="featuredTitles">
                    <h2>Townhouse</h2>
                </div>
            </div>
            <div className="propertyType">
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=" alt="Berri" className="propertyImg" />
                <div className="featuredTitles">
                    <h2>Condo</h2>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Featured;