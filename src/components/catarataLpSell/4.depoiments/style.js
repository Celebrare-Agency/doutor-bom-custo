import styled from "styled-components";
import red from "../../../assets/catarataLpSell/3.price/negativePrice.svg";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  min-height: 34rem;
  margin-top: -1rem;
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
    background-color: var(--blue);
    width: 100%;
    gap: 0.5rem;
    h3 {
      font-weight: bold;
      text-transform: uppercase;
      font-size: calc(100% + 2.4rem);
      font-family: "inter";
      color: var(--light);
      text-align: left;
      ${Media.PhoneLarge} {
        font-size: 2rem;
        font-weight: bold;
      }
    }
    p {
      font-weight: 600;
      text-transform: uppercase;
      font-family: "inter";
      color: var(--light);
      opacity: 0.6;
      width: 80%;
      text-align: center;
    }
  }
  .content {
    width: 85%;
    max-width: 80rem;
    gap: 2rem;
    justify-content: space-between;
  }
`;
