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
      font-weight: 400;
      ${Media.Tablet} {
        font-size: 2rem;
      }
      ${Media.PhoneSmall} {
        font-size: 1.4rem;
      }
    }

    .buttonCallToAction {
      color: var(--black);
      font-family: Inter;
      font-weight: 400;
      text-decoration-line: underline;
      text-align: left;
      position: relative;
      background-color: inherit;
      cursor: pointer;
      font-size: 21px;
      transition: all 0.3s;

      ${Media.PhoneLarge} {
        font-size: 1.1rem;
        font-weight: bold;
      }
      ${Media.PhoneSmall} {
        font-size: 1rem;
      }
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 0.5rem;
        top: 1.2rem;
        background-color: var(--greenThin);
        left: 0;
        z-index: -1;
        ${Media.PhoneLarge} {
          display: none;
        }
      }
    }
    .buttonCallToAction:hover {
      transform: scale(0.9);
      transition: all 0.3s;
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
      width: 100%;
    }
  }
`;
