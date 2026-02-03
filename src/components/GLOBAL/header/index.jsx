import { useState, useEffect } from "react";
import { HeaderContainer } from "./style";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Modal from "../../FormHome/index.jsx";
import logo from "../../../assets/logoExtendBlue.svg";

const menuItems = [
  { path: "/", label: "Sobre nós" },
  { path: "/catarata", label: "Catarata" },
  { path: "/refrativa", label: "Refrativa" },
  { path: "/blefaroplastia", label: "Blefaroplastia" },
  { path: "/blog-catarata", label: "Blog" },
  { path: "atendimento", label: "Atendimento" }, // Deixe apenas o path "atendimento"
];

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [showModal, setShowModal] = useState(false); // Adicionando estado para o modal
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

  const openModal = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de navegação
    setShowModal(true); // Abre o modal
  };

  const closeModal = () => {
    setShowModal(false); // Fecha o modal
  };

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
                {item.path === "atendimento" ? (
                  <a href="https://api.whatsapp.com/send?phone=5511945852272&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20pelo%20site%20e%20gostaria%20de%20atendimento.">
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.path}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Exibe o Modal quando showModal for true */}
      {showModal && (
        <Modal display={showModal} onClose={closeModal} modalId="1" />
      )}
    </HeaderContainer>
  );
}
