import './App.css';
import {Route , Routes} from  'react-router-dom';
import Buy from './Buy';
import Contact from './Contact';
import Home from './Home';
import Donate from './Donate';
import Navbar from './Navbar';
import Footer from './Footer';
import Menu from './Menu';

function App() {
  return (
    <>
    <Navbar/>
    {/* <Menu/> */}
    <Routes>
      <Route exact path ="/" element = {<Home/>} />
      <Route exact path ="/buy" element = {<Buy/>} />
      <Route exact path ="/contact" element = {<Contact/>} />
      <Route exact path ="/donate" element = {<Donate/>} />
    </Routes>
    {/* <Footer/> */}
   
    </>
  );
}
export default App;