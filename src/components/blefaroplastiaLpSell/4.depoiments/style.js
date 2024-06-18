import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  min-height: 34rem;
  margin-top: -1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 4rem;
  ${Media.Tablet} {
    min-height: 25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  ${Media.PhoneLarge} {
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
  .titlePart {
    width: 100%;
    gap: 0.5rem;
    &::after {
      content: "";
      position: absolute;
      background-color: var(--blue);
      width: 100%;
      height: 100%;
      max-height: 20rem;
      object-fit: contain;
      left: 0rem;
      z-index: -1;
      background-repeat: no-repeat;
    }

    h3 {
      font-weight: bold;
      text-transform: uppercase;
      font-family: "inter";
      color: var(--light);
      text-align: left;
      ${Media.PhoneLarge} {
        font-weight: bold;
      }
    }
    p {
      font-weight: 600;
      text-transform: uppercase;
      font-family: "inter";
      color: var(--light);
      opacity: 0.6;
      width: 60%;
      text-align: center;
      ${Media.PhoneLarge} {
        width: 90%;
      }
    }
  }
  .content {
    width: 95%;
    max-width: 80rem;
    gap: 2rem;
    margin: auto;

    ${Media.Tablet} {
      flex-direction: column;
    }
    .afterAndBeforeContainer {
      gap: 3rem;
      flex-wrap: wrap;
      img {
        width: 50vw;
        border-radius: 10px;
        object-fit: contain;
        position: relative;
        ${Media.Laptop} {
          width: 90vw;
        }

        ${Media.PhoneLarge} {
          width: 90vw;
        }
      }
    }
  }
`;
