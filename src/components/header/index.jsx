import { HeaderContainer } from "./style";
import logo from "../../assets/logoExtendBlue.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const path = useLocation().pathname;
  useEffect(() => {
    function scrollUp() {}
    scrollUp();
  }, [path]);

  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const elementOnscroll = document.addEventListener("scroll", function () {
      if (window.scrollY > 2300) {
        setAnimation(true);
      } else {
        setAnimation(false);
      }
    });

    document.addEventListener("DOMContentLoaded", function () {
      elementOnscroll();
    });
  }, []);
  useEffect(() => {
    const elementOnscroll = document.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        setAnimation(true);
      }
    });

    document.addEventListener("DOMContentLoaded", function () {
      elementOnscroll();
    });
  }, []);
  return (
    <>
      <HeaderContainer isVisible={menuIsVisible} isanimation={animation}>
        <nav className="header">
          <div className="content">
            <div className="logoSide">
              <img src={logo} alt="logotipo" />
            </div>
            <AiOutlineMenu
              onClick={() => setMenuIsVisible(true)}
              className="menu"
            />
            <AiOutlineClose
              onClick={() => setMenuIsVisible(false)}
              className="menu closeMenu"
            />
            <li className="menuSide">
              <Link to="">
                <ul
                  className={`${path === "/" ? " color Options" : "Options"}`}
                  onClick={() => setMenuIsVisible(false)}
                >
                  Sobre nós
                </ul>
              </Link>
              <Link to="">
                <ul
                  className={`${path === "/a" ? " color Options" : "Options"}`}
                  onClick={() => setMenuIsVisible(false)}
                >
                  Sobre nós
                </ul>
              </Link>
              <Link to="">
                <ul
                  className={`${path === "/a" ? " color Options" : "Options"}`}
                  onClick={() => setMenuIsVisible(false)}
                >
                  Sobre nós
                </ul>
              </Link>
              <Link to="">
                <ul
                  className={`${path === "/a" ? " color Options" : "Options"}`}
                  onClick={() => setMenuIsVisible(false)}
                >
                  Sobre nós
                </ul>
              </Link>
              <Link to="">
                <ul
                  className={`${path === "/a" ? " color Options" : "Options"}`}
                  onClick={() => setMenuIsVisible(false)}
                >
                  Sobre nós
                </ul>
              </Link>
            </li>
          </div>
        </nav>
      </HeaderContainer>
    </>
  );
}
