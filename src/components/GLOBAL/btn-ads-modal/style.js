import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.button`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
    color: var(--light);
  }
  color: var(--light);
  font-family: Inter;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 1rem;
  background: #38af7e;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  transition: 0.3s;
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
    width: 2rem;
    height: 2rem;
  }
`;
