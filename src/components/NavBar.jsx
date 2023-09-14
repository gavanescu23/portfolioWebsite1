import React from "react"
import { useState, useEffect } from "react";
import useScrollListener from "./hooks/navScroll";
import '../index.css'

const NavBar = () => {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

    // DO NOT DELETE font-navLinks text-[15px] h-[30px] md:h-[40px] mt-10 mx-12 mb-10 pt-4 z-50 sticky overflow-hidden
  return (

    <nav className={navClassList.join(" ")}>
        <div className="flex justify-between text-[13px] md:text-[15px]">
        <a href="/about">ABOUT</a>
        <a href="/">GAVANESCU VLAD</a>
        <a href="/archive">ARCHIVE</a>
        </div>
     </nav>
  )}
// }

export default NavBar