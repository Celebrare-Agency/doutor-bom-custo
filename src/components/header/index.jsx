import { HeaderContainer } from "./style";
import logo from "../../assets/logoExtendBlue.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const path = useLocation().pathname;
  useEffect(() => {
    function scrollUp() {
      window.scroll(0, 0);
    }
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
              onClick={() => setMenuIsVisible(false)}
              className="menu closeMenu"
            />
            <ul className="menuSide">
              <ScrollLink to="sobre">
                <Link to="/">
                  <li
                    className={`${
                      path === "sobre" ? " color Options" : "Options"
                    }`}
                    onClick={() => setMenuIsVisible(false)}
                  >
                    Sobre nós
                  </li>
                </Link>
              </ScrollLink>
              <Link to="/oftalmo">
                <li
                  className={`${
                    path === "/oftalmo" ? " color Options" : "Options"
                  }`}
                  onClick={() => setMenuIsVisible(false)}
                >
                  Serviços
                </li>
              </Link>
              <ScrollLink to="duvidas">
                <Link to="/">
                  <li
                    className={`${
                      path === "/a" ? " color Options" : "Options"
                    }`}
                    onClick={() => setMenuIsVisible(false)}
                  >
                    Dúvidas
                  </li>
                </Link>
              </ScrollLink>
              <a
                href="https://api.whatsapp.com/send?phone=5511950212678&text=Olá!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20"
                target="blanked"
              >
                <li
                  className={`${path === "/a" ? " color Options" : "Options"}`}
                  onClick={() => setMenuIsVisible(false)}
                >
                  Atendimento
                </li>
              </a>
              <ScrollLink to="parceiros">
                <Link to="/">
                  <li
                    className={`${
                      path === "/a" ? " color Options" : "Options"
                    }`}
                    onClick={() => setMenuIsVisible(false)}
                  >
                    Parceiros
                  </li>
                </Link>
              </ScrollLink>
            </ul>
          </div>
        </nav>
      </HeaderContainer>
    </>
  );
}
