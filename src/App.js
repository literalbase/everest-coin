import './App.css';

import { Navbar ,SearchBtn,Body} from './Components';
import {BrowserRouter as  Router ,
  Routes,
  Route} from 'react-router-dom';
  
import Marketplace from "../src/Pages/MarketPlace/Marketplace"
import Collection from './Pages/Collection/Collection';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import ConnectWallet from './Pages/ConnectWallet/ConnectWallet';
import Login from './Pages/Login/Login';
import SignUp from './Sign Up/SignUp';
import Create from './Pages/Create/Create';
import Profile from './Pages/Profile/Profile';
import UserItemDetail from './Pages/UserItemDetail/UserItemDetail';
function App() {
  return (
  
       
    <Router>
    
     <div className = "everest-topbar">
       <Navbar/>
       <SearchBtn/>
       </div>
       <Routes>
       <Route exact path = "/" element = {<Body/>}/>
       <Route exact path = "/Marketplace" element = {<Marketplace/>}/>
       <Route exact path = "/Collection" element = {<Collection/>}/>
       <Route exact path = "/ItemDetails" element = {<ItemDetails/>}/>
       <Route exact path = "/ConnectWallet" element = {<ConnectWallet/>}/>
       <Route exact path = "/Login" element = {<Login/>}/>
       <Route exact path = "/SignUp" element = {<SignUp/>}/>
       <Route exact path = "/Create" element = {<Create/>}/>
       <Route exact path = "/Profile" element = {<Profile/>}/>
       <Route exact path = "/UserItemDetail" element = {<UserItemDetail/>}/>
       
   </Routes>
   </Router>
  );
}

export default App;
