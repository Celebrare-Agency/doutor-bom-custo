import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  min-height: 20rem;
  width: 70%;
  max-width: 80rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: auto;

  gap: 1rem;

  ${Media.Tablet} {
    width: 90%;
    min-height: 25rem;
    max-width: 90rem;
  }
  ${Media.PhoneLarge} {
    width: 90%;
    max-width: 90rem;
  }

  .col {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  h3 {
    color: var(--black);
    text-align: center;
    font-family: Inter;
    font-weight: 800;
    text-transform: uppercase;

    ${Media.PhoneLarge} {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .partnersContainer {
    width: 100%;
    justify-content: space-around;

    img {
      width: 40%;
      max-width: 258.448px;
      opacity: 0.3;
    }
  }

  hr {
    width: 90%;
    height: 1px;
    opacity: 0.8;
    background: #303030;
  }
`;
