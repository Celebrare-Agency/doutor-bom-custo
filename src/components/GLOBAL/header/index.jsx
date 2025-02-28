import { HeaderContainer } from "./style";
import logo from "../../../assets/logoExtendBlue.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
const wppLink = "https://wa.me/551196277567";
const menuItems = [
  { path: "sobre", label: "Sobre nós" },
  { path: "/catarata", label: "Catarata" },
  { path: "/refrativa", label: "Refrativa" },
  { path: "/blefaroplastia", label: "Blefaroplastia" },
  { path: "/blog-catarata", label: "Blog" },
  { path: wppLink, label: "Atendimento" },
];

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [animation, setAnimation] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    function handleScroll() {
      setAnimation(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClose = () => {
    setMenuIsVisible(false);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [path]);

  return (
    <HeaderContainer isVisible={menuIsVisible} isanimation={animation}>
      <nav className="header">
        <div className="content">
          <Link to="/">
            <div className="logoSide">
              <img src={logo} alt="logotipo" />
            </div>
          </Link>
          <AiOutlineMenu
            onClick={() => setMenuIsVisible(true)}
            className="menu"
          />
          <AiOutlineClose
            onClick={handleMenuClose}
            className={`menu closeMenu ${menuIsVisible ? "visible" : ""}`}
          />
          <ul className="menuSide">
            {menuItems.map((item) => (
              <li
                key={item.path}
                className={`Options ${
                  path === "/blefaroplastia" ? "light" : ""
                }`}
              >
                {item.path === wppLink ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : item.path.startsWith("/") ? (
                  <Link to={item.path}>{item.label}</Link>
                ) : path === "/catarata" ||
                  "/blefaroplastia" ||
                  "/refrativa" ? (
                  <Link to="/">{item.label}</Link>
                ) : (
                  <ScrollLink to={item.path} onClick={handleMenuClose}>
                    {item.label}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </HeaderContainer>
  );
}
