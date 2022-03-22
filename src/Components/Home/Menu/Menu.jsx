// import React,{useState} from 'react'
// import {Link} from 'react-router-dom'
// import './Menu.css';
// import Dropdown from './dropdown/Dropdown';

// function Menu() {
//   const [click, setClick] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const onMouseEnter = () => {
//     if (window.innerWidth < 768) {
//       setDropdown(false);
//     } else {
//       setDropdown(true);
//     }
//   };

//   const onMouseLeave = () => {
//     if (window.innerWidth < 560) {
//       setDropdown(false);
//     } else {
//       setDropdown(false);
//     }
//   };
//   return (
//     <>
//       <nav className='menu-bar'>
//         <ul className={click ? 'main-menu active' : 'main-menu'}>
//           <div className="item-container">
//           <li className='menu-item'
//           onClick={onMouseEnter} 
//           onMouseLeave={onMouseLeave} 
//           >
//             <Link
//               to='/' 
//               className='menu-links' 
//               onClick={closeMobileMenu}
//               >
//               Categories <i className='fas fa-caret-down' />
//             </Link>
//             {dropdown && <Dropdown />}
//           </li>
//           <li className='menu-item'>
//             <Link to='/' className='menu-links' onClick={closeMobileMenu}>
//             Trending
//             </Link>
//           </li>
//           <li className='menu-item'>
//             <Link
//               to='/'
//               className='menu-links'
//               onClick={closeMobileMenu}
//             >
//               Best Sellers
//             </Link>
//           </li>
//           <li className='menu-item'>
//             <Link
//               to='/'
//               className='menu-links'
//               onClick={closeMobileMenu}
//             >
//               New Releases
//             </Link>
//           </li>
//           </div>
//         </ul>
//       </nav>
//     </>
//   );
// }
// export default Menu