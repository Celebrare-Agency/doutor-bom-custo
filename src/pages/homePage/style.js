import styled from "styled-components";
const Media = {
  Nav: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
};

export const Container = styled.main`
  height: 100vh;
  color: var(--greenBold);
  p {
    font-size: 10rem;
  }
  ${Media.Tablet} {
  }
`;
