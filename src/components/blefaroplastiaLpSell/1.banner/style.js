import styled from "styled-components";
import bgPc from "../../../assets/blefaroplastiaLpSell/1.banner/bg-pc.png";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  min-height: 45rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 40%;
  position: relative;
  background-image: url(${bgPc});
  background-size: cover;
  background-position: bottom center;
  ${Media.PhoneLarge} {
    min-height: 40rem;
    padding-top: 4rem;
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

  .centerText {
    display: block;
    margin: auto;
    text-align: center;
  }
  .centerSideContent {
    width: 80%;
    max-width: 80rem;
    align-items: center;
    color: var(--light);
    position: relative;
    gap: 1rem;
    z-index: 9;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 3rem;
      z-index: -1;
      border-radius: 10px;
      background-color: var(--black);
      filter: blur(20px);
      opacity: 0.3;
      ${Media.PhoneLarge} {
        padding: 0;
      }
    }

    h1 {
      font-weight: 500;
      text-transform: uppercase;
      text-align: center;
      font-size: calc(100% + 2.4rem);
      ${Media.PhoneLarge} {
        font-size: 2rem;
        font-weight: bold;
        text-align: left;
      }
    }

    p {
      font-size: calc(10% + 1.7rem);
      text-align: center;

      ${Media.PhoneLarge} {
        font-size: 1.4rem;
        font-weight: bold;
        text-align: center;
        b {
          color: var(--blue);
          text-align: center;
          font-size: 1.5rem;
        }
      }
    }
    h2 {
      text-transform: uppercase;
      text-align: center;
    }

    span {
      font-weight: bold;
    }

    button {
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
      font-size: 2rem;
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
        background-color: var(--blueHover);
      }
      ${Media.PhoneLarge} {
        font-size: 2rem;
        padding: 0.6rem;
      }
      ${Media.PhoneSmall} {
        font-size: 1.4rem;
      }

      .BUttonwhatsApp {
        width: 2rem;
        height: 2rem;
      }
    }
    .flags {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 40rem;
      z-index: -1;

      ${Media.Tablet} {
        display: none;
      }
    }
  }
`;
