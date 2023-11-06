import "./property.css";
import Navbar from "../../components/navbar/Navbar";
import Brokerheader from "../../components/brokerheader/Brokerheader";
import Test from "../../components/test/Test";




const Property = () => {
    return (
        <div>
            <Navbar/>
            <Brokerheader/>
            <div className="homeContainer">
                <Test/>
                
            </div>
            
        </div>
    );
}

export default Property;