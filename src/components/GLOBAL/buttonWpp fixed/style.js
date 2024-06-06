import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.button`
  color: var(--light);
  padding: 1rem;
  background: #38af7e;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: fixed;
  bottom: 4rem;
  right: 1rem;
  border-radius: 50%;

  a {
    text-decoration: none;
    color: var(--light);
  }

  &:hover {
    background-color: var(--greenHover);
  }
  ${Media.PhoneLarge} {
    font-size: 1.1rem;
    padding: 0.6rem;
  }
  ${Media.PhoneSmall} {
    font-size: 1rem;
  }

  .BUttonwhatsApp {
    width: 2.4rem;
    height: 2.4rem;
    margin: auto;
  }
`;
