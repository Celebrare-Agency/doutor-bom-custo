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
  gap: 1rem;
  overflow: hidden;
  padding: 1rem 0;
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
    width: 30%;
    margin: auto;

    ${Media.Tablet} {
      margin: 0;
      width: 100%;
    }
    h2 {
      color: var(--black);
      font-family: Inter;
      font-weight: 700;
      text-transform: uppercase;
      ${Media.Tablet} {
        font-size: 2rem;
      }
      ${Media.PhoneSmall} {
        font-size: 1.4rem;
      }
    }
    .items {
      gap: 2rem;
      align-items: flex-start;
      ${Media.PhoneLarge} {
        gap: 1rem;
      }
      p {
        color: var(--black, #2f3947);
        font-family: Inter;
        font-weight: 400;
      }

      .icons {
        ${Media.Tablet} {
          font-size: 2rem;
        }
        ${Media.PhoneLarge} {
          height: 4rem;
        }
      }
    }
  }

  .containerCheck {
    width: 50%;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    margin: auto;
    padding: 2rem;
    -webkit-border-radius: 50px;
    -webkit-border-bottom-left-radius: 0;
    -moz-border-radius: 50px;
    -moz-border-radius-bottomleft: 0;
    border-radius: 50px;
    border-bottom-left-radius: 0;
    ${Media.Tablet} {
      width: 80%;
      min-height: 10rem;
    }
    ${Media.PhoneLarge} {
      width: 100%;
      margin: 0 auto;
      box-shadow: inherit;
      padding: 0;
      min-height: 5rem;
    }
    img {
      width: 100%;
    }

    .items {
      gap: 2rem;
      align-items: flex-start;

      ${Media.PhoneLarge} {
        gap: 1rem;
      }
      p {
        color: var(--black, #2f3947);
        font-family: Inter;
        font-weight: 400;
      }

      .icons {
        ${Media.Tablet} {
          font-size: 2rem;
        }
        ${Media.PhoneLarge} {
          height: 4rem;
        }
      }
    }
  }
`;
