import Navbar from "../../components/navbar/Navbar";
import Brokerheader from "../../components/brokerheader/Brokerheader";
import "./brokerpage.css";


const Brokerpage = () => {
    return (
        <div>
            <Navbar/>
            <Brokerheader type="home"/>
            <div className="homeContainer">

            </div>
        </div>
    );
}

export default Brokerpage;