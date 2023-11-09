import Navbar from "../../components/navbar/Navbar";
import Brokerheader from "../../components/brokerheader/Brokerheader";
import Featured from "../../components/featured/Featured";
import "./brokerpage.css";


const Brokerpage = () => {
    return (
        <div>
            <Navbar/>
            <Brokerheader type="home"/>
            <div className="homeContainer">
            <Featured/>
            </div>
        </div>
    );
}

export default Brokerpage;