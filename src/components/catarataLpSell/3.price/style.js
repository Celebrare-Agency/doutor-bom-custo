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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: var(--blue);
  padding: 5rem 0px 5rem;
  margin-top: -3rem;
  ${Media.Tablet} {
    min-height: 25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
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

  .content {
    width: 85%;
    max-width: 80rem;
    align-items: flex-start;
    gap: 2rem;
    justify-content: space-between;
    ${Media.Tablet} {
      margin: auto;
    }
    ${Media.PhoneSmall} {
    }
    .titlePart {
      align-items: flex-start;
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
          ${Media.PhoneSmall} {
          font-size: 1.5rem;
    }
      }
      p {
        font-weight: 600;
        text-transform: uppercase;
        font-family: "inter";
        color: var(--light);
        text-align: left;
        opacity: 0.6;
      }
    }

    ol {
      align-items: flex-start;
      gap: 0.8rem;
      li {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1.7rem;
        font-family: "inter";
        color: var(--light);
        text-align: left;
        ${Media.PhoneLarge} {
          font-size: 1rem;
          font-weight: bold;
        }
      }
    }

    .pricePart {
      h2 {
        font-weight: bold;
        text-transform: uppercase;
        font-size: calc(100% + 2rem);
        font-family: "inter";
        color: var(--light);
        text-align: left;
        ${Media.PhoneLarge} {
          font-size: 2rem;
          font-weight: bold;
        }
      }
      gap: 0.7rem;
      align-items: flex-start;
      .nonPrice {
        font-weight: regular;
        text-transform: uppercase;
        font-size: 2rem;
        font-family: "inter";
        color: var(--light);
        text-align: left;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          background-image: url(${red});
          width: 100%;
          height: 100%;
          object-fit: contain;
          left: 2rem;
          background-repeat: no-repeat;
        }
      }
      .realPrice {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 2.5rem;
        font-family: "inter";
        color: var(--light);
        text-align: left;
          ${Media.PhoneLarge} {
          font-size: 2.3rem;
        }
      }
    }
  }
`;
