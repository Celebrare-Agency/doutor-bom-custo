import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  min-height: 30rem;
  width: 85%;
  max-width: 80rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  overflow: hidden;
  margin: auto;
  gap: 2rem;
  ${Media.Tablet} {
    min-height: 25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  ${Media.PhoneLarge} {
    width: 90%;
    max-width: 90rem;
    min-height: 20rem;
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

  .containerText {
    align-items: flex-start;
    position: relative;
    gap: 1rem;
    width: 50%;
    margin: auto;
    ${Media.Tablet} {
      margin: 0;
      width: 100%;
    }

    h3 {
      color: var(--black);
      font-family: Inter;
      font-weight: 800;
      text-transform: uppercase;
      ${Media.Tablet} {
        font-size: 2rem;
      }
      ${Media.PhoneSmall} {
        font-size: 1.4rem;
      }
    }

    p {
      color: var(--black);
      font-family: Lato;
      font-weight: 300;
    }

    .buttonCallToAction {
      background: var(--Blue, #3b4ae2);
      color: var(--black);
      cursor: pointer;
      transition: all 0.3s;
      color: var(--light);
      text-align: center;
      font-family: Inter;
      font-weight: 800;
      text-transform: uppercase;
      padding: 1rem;
      font-size: 1rem;
      &:hover {
        background-color: var(--blueHover);
      }
      ${Media.PhoneLarge} {
        font-size: 1.1rem;
        font-weight: bold;
      }
      ${Media.PhoneSmall} {
        font-size: 1rem;
      }
    }
  }

  .imgContainer {
    width: 50%;
    min-height: 40rem;
    margin: auto;
    ${Media.Tablet} {
      width: 80%;
      min-height: 10rem;
    }

    ${Media.PhoneLarge} {
      width: 80%;
      margin: 0 auto;
      min-height: 5rem;
    }
    img {
      width: 80%;
      ${Media.Tablet} {
        width: 100%;
        min-height: 10rem;
      }
    }
  }
`;
