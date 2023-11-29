import styled from "styled-components";
import bg from "../../../assets/landing page sell Opthalmologist/service/Bg.png";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    min-height: 40rem;
    margin: auto;
    width: 85%;
    max-width: 80rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    ${Media.Laptop} {
      width: 90%;
      max-width: 90rem;
    }
    ${Media.Tablet} {
      min-height: 55rem;
      align-items: flex-start;
      justify-content: space-evenly;
      flex-direction: column;
    }
    ${Media.PhoneLarge} {
      padding: 2rem 0;
      width: 90%;
      max-width: 90rem;
    }
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
  .topContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    h2 {
      color: var(--black);
      font-family: Inter;
      font-weight: 500;
      text-transform: uppercase;

      ${Media.Tablet} {
        font-size: 1.6rem;
      }
    }
    ${Media.Tablet} {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .cards {
    justify-content: space-between;
    position: relative;
    align-items: flex-start;
    ${Media.Tablet} {
      flex-direction: column;
      align-items: flex-start;
      gap: 3rem;
    }
    hr {
      width: 0.916px;
      height: 266.54px;
      opacity: 0.7;
      background: #7e7e7e;
      ${Media.Tablet} {
        height: 0.916px;
        width: 100%;
      }
    }

    .contianerLines {
      justify-content: space-around;
      align-items: flex-start;
      width: 33%;
      max-width: 500px;
      ${Media.Tablet} {
        width: 80%;
        flex-direction: column;
        max-width: inherit;
      }
      .none {
        display: none;
      }
    }
    .cardItem {
      ${Media.Tablet} {
        align-items: flex-start;
      }

      img {
        width: 98.961px;
        height: 98.219px;
      }

      h3 {
        color: var(--black);
        text-align: center;
        font-family: Inter;
        font-weight: 700;
        font-size: 25.829px;
      }

      p {
        color: var(--black);
        text-align: center;
        font-family: Inter;
        font-weight: 400;
        font-size: 25.829px;
        ${Media.Laptop} {
          font-size: calc(25.829px - 20%);
        }
      }
      ${Media.Tablet} {
        h3,
        p {
          text-align: left;
        }
      }
    }
  }
`;
