import './App.css';
import {Route , Routes} from  'react-router-dom';
import Sell from './Components/Sell/Sell';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import Best_sellers from './Components/Card_pages/Best_sellers';
import Trending from './Components/Card_pages/Trending';
import New_releases from './Components/Card_pages/New_releases';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path ="/" element = {<Home/>} />
      <Route exact path ="/sell" element = {<Sell/>} />
      <Route exact path ="/login" element = {<Login/>} />
      <Route exact path ="/contact" element = {<Contact/>} />
      <Route exact path ="/bestsellers" element = {<Best_sellers/>} />
      <Route exact path ="/trending" element = {<Trending/>} />
      <Route exact path ="/newreleases" element = {<New_releases/>} />
    </Routes>
     <Footer/> 
    </>
  );
}
export default App;
