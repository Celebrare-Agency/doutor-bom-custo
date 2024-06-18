import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  min-height: 30rem;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  overflow: hidden;
  margin: auto;
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
    align-items: center;
    position: relative;
    gap: 2rem;
    width: 35%;
    margin: auto;
    ${Media.Tablet} {
      width: 90%;
      margin: center;
      text-align: center;
      margin-top: 2rem;
    }
    ${Media.PhoneLarge} {
      width: 100%;
      margin: 0;
      margin-top: 2rem;
    }

    h2 {
      color: var(--black);
      font-family: Inter;
      font-weight: bold;
      text-align: left;
      text-transform: uppercase;
      ${Media.Tablet} {
        font-size: 2rem;
        text-align: center;
      }
      ${Media.PhoneSmall} {
        font-size: 1.4rem;
      }
    }
  }

  .imgContainer {
    width: 30%;
    min-height: 40rem;
    ${Media.Tablet} {
      width: 50%;
      min-height: 10rem;
      position: absolute;
      z-index: -1;
      right: -1px;
    }

    ${Media.PhoneLarge} {
      width: 100%;
      min-height: 5rem;
    }
    img {
      width: 100%;
      ${Media.Tablet} {
        opacity: 0.6;
      }
      ${Media.PhoneLarge} {
        opacity: 0.3;
      }
    }
  }
`;
