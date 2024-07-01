import styled from "styled-components";

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
  ${Media.PhoneLarge} {
    min-height: 40rem;
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
  .LeftSideContent {
    width: 90%;
    max-width: 80rem;
    align-items: flex-start;
    color: var(--black);
    position: relative;
    gap: 1rem;
    z-index: 9;
    ${Media.Tablet} {
      margin-top: 7rem;
    }
    ${Media.PhoneLarge} {
      margin-top: 5rem;
    }
    h1 {
      font-weight: 500;
      text-transform: uppercase;
      font-size: calc(100% + 2.4rem);
      ${Media.PhoneLarge} {
        font-size: 2rem;
        font-weight: bold;
        b {
          color: var(--blue);
          font-size: 2.2rem;
        }
      }
    }

    p {
      font-size: calc(10% + 1.7rem);
      ${Media.PhoneLarge} {
        font-size: 1.4rem;
        font-weight: bold;
        b {
          color: var(--blue);
          font-size: 1.5rem;
        }
      }
    }
    h2 {
      text-transform: uppercase;
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
