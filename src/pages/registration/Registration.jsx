import "./registration.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Signup from "../../components/signup/Signup";



const Registration = () => {
  return (
    <div>
      <Navbar/>
      <Header type="home"/>
        <Signup/>
    </div>
  );
}

export default Registration;