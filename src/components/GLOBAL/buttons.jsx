import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { CiPhone } from "react-icons/ci";

const Media = {
  PhoneLarge: "@media(max-width:610px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:450px)",
};
const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #28A806;
  border: none;
  transition: all 0.1s;
  padding: 1rem 2rem;
  border-radius: 111px;
  font-style: normal;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;

  ${Media.Tablet} {
    font-size: 0.8rem;
    padding: 1rem 2rem;
  }
  .img {
    display: ${(props) => props.display};
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const DivWrapper = styled.div`
  text-decoration: none;
`;

export default function Button({
  text,
  display,
  style,
  link,
  modalId,
  toggleModalVisibility,
  onClick, // Aceita a função onClick como prop
}) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e); // Chama a função onClick passada como prop
    } else if (link && link.startsWith("#")) {
      e.preventDefault();
      const elementId = link.slice(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Elemento com id ${elementId} não encontrado.`);
      }
    } else if (toggleModalVisibility && modalId) {
      e.preventDefault();
      toggleModalVisibility(modalId);
    }
  };

  if (link) {
    const isAnchor = link.startsWith("#");
    const isExternal = /^https?:\/\//.test(link);
    const isRoute = !isAnchor && !isExternal;

    if (isAnchor) {
      return (
        <StyledButton display={display} id={style} onClick={handleClick}>
          {text}
          <CiPhone className="img" />
        </StyledButton>
      );
    } else if (isRoute) {
      return (
        <RouterLink to={link}>
          <StyledButton display={display} id={style}>
            {text}
            <CiPhone className="img" />
          </StyledButton>
        </RouterLink>
      );
    } else if (isExternal) {
      return (
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <StyledButton display={display} id={style}>
            {text}
            <CiPhone className="img" />
          </StyledButton>
        </Link>
      );
    }
  }

  return (
    <DivWrapper onClick={handleClick}>
      <StyledButton display={display} id={style}>
        {text}
        <CiPhone className="img" />
      </StyledButton>
    </DivWrapper>
  );
}
