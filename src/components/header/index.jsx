import { HeaderContainer } from "./style";
import logo from "../../assets/logoExtendBlue.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
const wppLink =
  "https://api.whatsapp.com/send?phone=5511950212678&text=Olá!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20";
const menuItems = [
  { path: "sobre", label: "Sobre nós" },
  { path: "/oftalmo", label: "Serviços" },
  { path: "duvidas", label: "Dúvidas" },
  { path: wppLink, label: "Atendimento" },
  { path: "parceiros", label: "Parceiros" },
];

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [animation, setAnimation] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    function handleScroll() {
      setAnimation(window.scrollY > 2300);
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
              <li key={item.path} className="Options  ">
                {item.path === wppLink ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : item.path.startsWith("/") ? (
                  <Link to={item.path}>{item.label}</Link>
                ) : path === "/oftalmo" ? (
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
