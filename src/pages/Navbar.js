import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../css/Navbar.css';
import '../css/NavBurgerMenu.css';
import gsap from "gsap";

function NavBar() {

    const [state, setState] = useState({ initial: false, clicked: null })
    const [menuIcon, setMenuIcon] = useState('=')

    const handleMenu = () => {
        if (state.initial === false) {
          setState({
            initial: null,
            clicked: true,
          })
          setMenuIcon('+')
          ;
        } else if (state.clicked === true) {
          setState({
            clicked: !state.clicked,
          })
          
          setMenuIcon('=');
        } else if (state.clicked === false) {
          setState({
            clicked: !state.clicked,
          })
          
          setMenuIcon('+');
        }
      };

      
      useEffect(() => {

        if (state.clicked === false) {

          gsap.to("body", {
            css: { height: "100vh", overflowY: "scroll" },
          });

          gsap.timeline()
                .to("#MenuUl", {duration: 0.5, opacity: 0, display: "none"})
                .to(".NavBurgerMenu", { height: 0 })

        } else if (
          state.clicked === true ||
          (state.clicked === true && state.initial === null)
        ) {

          gsap.to("body", {
            css: { height: "100%", overflowY: "hidden" },
          });

          gsap.timeline()
                .to(".NavBurgerMenu", { height: "100vh"})
                .to("#MenuUl", {duration: 1, opacity: 1, display: "block"})


        }
      }, [state]);

    return (
        <div className="Navbar">
            <div className="NavbarBackground">
                <div className="NavbarContainer CommonContainer">
                    <h1><Link to='/' className="NavbarLogo">MP</Link></h1>
                    <h1 className="NavBurgerButton" onClick={handleMenu}>
                        <Link className="NavbarLogo">{menuIcon}</Link>
                    </h1>
                </div>
            </div>
            
            <div className="NavBurgerMenu">
                <ul id="MenuUl">
                  <li>
                    <Link to='/' className="NavbarMenuOption" onClick={handleMenu}>Home</Link>
                  </li>
                  <li>
                    <Link to='/aboutMe' className="NavbarMenuOption" onClick={handleMenu}>About Me</Link>
                  </li>
                  <li>
                    <Link to='/projects' className="NavbarMenuOption" onClick={handleMenu}>Projects</Link>
                  </li>
                  <li>
                    <Link to='/contactMe' className="NavbarMenuOption" onClick={handleMenu}>Contact me</Link>
                  </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;