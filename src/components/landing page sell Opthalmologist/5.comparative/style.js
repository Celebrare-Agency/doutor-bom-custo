import styled from "styled-components";
import bg from "../../../assets/landing page sell Opthalmologist/exames/bg2.png";

const Media = {
  PhoneLarge: "@media(max-width: 600px)",
  Laptop: "@media(max-width: 1150px)",
  Tablet: "@media(max-width: 1000px)",
  PhoneSmall: "@media(max-width: 320px)",
};

export const Container = styled.section`
  min-height: 60rem;
  width: 70%;
  max-width: 80rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: auto;
  ${Media.Tablet} {
    align-items: flex-start;
    width: 90%;
    max-width: 90rem;
    min-height: 120rem;
  }
  ${Media.PhoneLarge} {
    width: 90%;
    max-width: 90rem;
    min-height: 100rem;
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
  .text {
    gap: 1rem;
    padding: 1rem 0;
    ${Media.Tablet} {
      align-items: flex-start;
    }
    h3 {
      color: var(--black);
      text-align: center;
      font-family: Inter;
      font-weight: 800;
      text-transform: uppercase;
      ${Media.Tablet} {
        text-align: left;
      }
    }
    p {
      color: var(--black);
      font-family: Inter;
      font-weight: 700;
      ${Media.Tablet} {
        text-align: left;
      }
    }
  }
  .comparativeCont {
    background-image: url(${bg});
    background-size: 600px;
    width: 100%;
    justify-content: space-between;
    gap: 4rem;
    padding: 1rem 0;
    background-position: center;
    background-repeat: no-repeat;
    flex-wrap: wrap;
  }

  .card {
    justify-content: space-around;
    border-radius: 23.851px;
    border: 0px solid rgba(0, 0, 0, 0.2);
    background: linear-gradient(141deg, #9a2208 48.22%, #d9d9d9 141.85%);
    box-shadow: 0px 4.00813px 4.00813px 0px rgba(0, 0, 0, 0.25);
    width: 540px;
    height: 848px;
    flex-shrink: 0;
    margin: 0; /* Adicione margem para separar os cartões */

    ${Media.Tablet} {
      width: 80%;
      margin: auto;
    }
    ${Media.PhoneLarge} {
      width: 100%;
      height: 708px;
    }

    .top {
      h3 {
        margin: auto;
        color: #fff;
        text-align: center;
        font-family: Inter;
        font-weight: 800;
        text-transform: uppercase;
      }
      hr {
        width: 100%;
        height: 4.782px;
        background: #fff;
      }
    }
    p {
      color: var(--Light, #f1f8f9);
      font-family: Inter;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .itemContainer {
    width: 80%;
    gap: 2rem;
    align-items: flex-start;

    .item {
      gap: 1rem;
      svg {
        margin: auto;
        width: 2rem !important;
        height: 2rem !important;
      }
    }
  }

  .card2 {
    background: linear-gradient(
      141deg,
      #3b4ae2 48.22%,
      #d9d9d9 141.85%
    ) !important;
  }

  .button {
    margin-top: 1rem !important;
  }
`;
