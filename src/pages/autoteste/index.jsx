import { ContainerAuto, Header, Cover, Ortoce, Beneficios, Quem, Indi, ContatoB, Depoimento, MapaB } from "./style";
import logo from "../../assets/logoExtendBlue.svg";
import Lens from "./images/Lens.png";
import Pessoas from "./images/Pessoas.png";
import Maps from "./images/Maps.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { SlCalender, SlPhone } from "react-icons/sl";
import { FaHeartbeat } from "react-icons/fa";
import MapEmbed from './components/maps';
import Carousel from './components/carousel';

const wppLink =
  "https://api.whatsapp.com/send?phone=5511950212678&text=Olá!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20";
const menuItems = [
  { path: "autoteste", label: "Autoteste" },
  { path: wppLink, icon: <SlCalender />, label: "Agendar consulta" },
  { path: "tel:+5511950212678", icon: <SlPhone />, label: "Ligue (11) 95021-2678" },
];

export default function AutoTeste() {
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
    <>
      <ContainerAuto>
        <Header isVisible={menuIsVisible} isanimation={animation}>
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
                    <li key={item.path} className="Options">
                      {item.path === wppLink ? (
                        <a href={item.path} target="_blank" rel="noopener noreferrer">
                          {item.icon} {item.label}
                        </a>
                      ) : item.path.startsWith("/") ? (
                        <Link to={item.path}>
                          {item.icon} {item.label}
                        </Link>
                      ) : path === "/oftalmo-taboaodaserra" ? (
                        <Link to="/">
                          {item.label}
                        </Link>
                      ) : (
                        <ScrollLink to={item.path} onClick={handleMenuClose}>
                          {item.icon} {item.label}
                        </ScrollLink>
                      )}
                    </li>
                  ))}
                </ul>
            </div>
          </nav>
        </Header>

        <Cover>
          <div className="textos">
            <h2>Acorde com uma Visão Clara:</h2>
            <h1>Lentes de Ortoceratologia que Transformam suas Noites e Dias!</h1>
            <p>Diga adeus às lentes de contato durante o dia e aproveite a liberdade de uma visão nítida sem preocupações.</p>
            <button>Quero enxergar melhor</button>
          </div>
        </Cover>

        <Ortoce>
          <div className="Orto">
            <div className="containerOrto">
              <div className="textosOrto">
                <h2><div className="linha"></div>Liberdade Total Durante o Dia</h2>
                <h1>O Que é Ortoceratologia?</h1>
                <p>A ortoceratologia é uma tecnologia avançada que utiliza lentes de contato especiais para moldar temporariamente a sua córnea enquanto você dorme. </p>          
                <p>Ao acordar, sua visão está corrigida, permitindo que você passe o dia inteiro sem a necessidade de óculos ou lentes de contato tradicionais. </p>          
                <p>Simples, eficaz e sem dor, essa é a solução para quem busca liberdade visual sem comprometer o conforto.</p>
              </div>
              <div className="containerImgOrto">
                <img src={Lens} alt="Lens" />
              </div>
            </div>          
          </div>
        </Ortoce>

        <Beneficios>
          <div className="Bef">
            <div className="containerBef">
              <div className="textosBef">
                <h1>Benefícios que<br /> Você Vai Amar</h1>
              </div>
              <div className="containerImgBef">        
                <div>                
                  <p><ImCheckboxChecked className="IconChecked" />  Liberdade Total Durante o Dia </p>          
                  <p><ImCheckboxChecked className="IconChecked" />  Mais Conforto e Menos Preocupações </p>          
                  <p><ImCheckboxChecked className="IconChecked" />  Tecnologia Segura e Comprovada </p>   
                </div>      
              </div>
            </div>          
          </div>
        </Beneficios>

        <Quem>
          <div className="Quem">
            <div className="containerQuem">
              <div className="textosQuem">
                <h2><div className="linha"></div>Perfeita Para Quem...</h2>
                <h1>Para Quem é Indicada a Lente de Ortoceratologia?</h1>
                <p>I. Quer acordar com visão nítida e sem precisar colocar lentes pela manhã. </p>          
                <p>II. Está cansado de lidar com desconforto causado por lentes de contato tradicionais. </p>          
                <p>III. Procura uma solução sem cirurgia, mas com resultados comparáveis. </p>   
                <p>IV. Leva uma vida ativa e precisa de total liberdade visual ao longo do dia. </p>              
                <button>Lorem impsum</button>
              </div>
              <div className="containerImgQuem">
                <img src={Pessoas} alt="Pessoas" />
              </div>
            </div>          
          </div>
        </Quem>      
        
        <Indi>
            <div className="containerIndi">            
              <h1>Indicações para o Uso das Lentes Ortoceratológicas</h1>
              <p>Recuperar a visão com clareza é mais do que um desejo, é uma necessidade para uma vida plena. Veja como a cirurgia Refrativa pode transformar sua qualidade de vida:</p>                
            </div>  

            <div className="Blue">
              <div className="containerDoenças">
                <div className="item-doença">
                  <div><FaHeartbeat /></div>
                  <h1>Miopia</h1>
                  <p>Até 8 graus de miopia podem ser corrigidos com segurança.</p>
                </div>
                <div className="item-doença">
                  <div><FaHeartbeat /></div>
                  <h1>Astigmatismo</h1>
                  <p>Correção eficaz para até 10 graus de astigmatismo.</p>
                </div>
                <div className="item-doença">
                  <div><FaHeartbeat /></div>
                  <h1>Hipermetropia</h1>
                  <p>Também eficaz para até 4 graus de hipermetropia.</p>
                </div>
              </div>
            </div>
        </Indi>

        <ContatoB>
          <div className="ContatoB">
            <div className="containerContatoB">
              <h1>Não Perca Mais Tempo com Lentes Diurnas</h1>
              <p>Experimente a praticidade e o conforto das lentes ortoceratológicas. Agende sua consulta e comece a aproveitar uma vida sem preocupações com sua visão.</p>
              <div>
                <button>Entre em contato</button>
                <p><SlPhone /> 11 95021-2678</p>
              </div>
            </div>          
          </div>
        </ContatoB>

        <Depoimento>
            <div className="containerDep">            
              <p>Depoimentos</p>                
              <div className="linha"></div>
              <h1>Depoimentos de Clientes </h1>
            </div>  
            
            <Carousel />
        </Depoimento>

        <MapaB>
          <div className="MapaB">
            <div className="containerMapaB">
              <div className="textoMapaB">
                <h1>Está Pronto para Transformar Suas Noites e Dias?</h1>
                <p>Entre em contato conosco hoje mesmo para agendar uma consulta e descobrir como as lentes de ortoceratologia podem mudar sua vida. Nossos especialistas estão prontos para ajudar você a aproveitar ao máximo essa tecnologia inovadora.</p>
              </div>
              <div className="mapsBl" >
                <MapEmbed />
              </div>
            </div>  
          </div>
          <div className="containerImgMap">
            <img src={Maps} alt="map" />        
          </div>
        </MapaB>
      </ContainerAuto>      
    </>
  );
}
