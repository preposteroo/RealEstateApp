import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Buy from "./pages/buy/Buy";
import FindBroker from "./pages/findBroker/FindBroker";
import Login from "./pages/login/Login";
import Property from "./pages/property/Property";
import Mortgage from "./pages/mortgage/Mortgage";
import Favourites from "./pages/favourites/Favourites";
import Registration from "./pages/registration/Registration";
import Brokerpage from "./pages/brokerpage/Brokerpage";
import Buybroker from "./pages/buybroker/Buybroker";
import BrokerProperties from "./components/brokerproperties/Brokerproperties";
import Propertydetails from "./components/propertydetails/Propertydetails";



function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/buy" element={<Buy/>}/>
        <Route path="/findBroker" element={<FindBroker/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/property" element={<Property/>}/>
        <Route path="/mortgage" element={<Mortgage/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/brokerpage" element={<Brokerpage/>}/>
        <Route path="/buybroker" element={<Buybroker/>}/>
        <Route path="/properties/:id" element={<Propertydetails/>} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
