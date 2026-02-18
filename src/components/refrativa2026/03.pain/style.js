import styled from "styled-components";
import background from "../../../assets/refrativa2026/03.pain/cover.webp";

const breakpoints = {
  phoneSmall: "@media(max-width:320px)",
  phoneLarge: "@media(max-width:600px)",
  tablet: "@media(max-width:1000px)",
  laptop: "@media(max-width:1150px)",
};

export const Container = styled.section`
  width: 100%;
  padding: 80px 0;
  background-color: #3236db;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-width: 279px;

  .content-wrapper {
    width: 90%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    ${breakpoints.tablet} {
      flex-direction: column;
      gap: 2rem;
    }
  }

  .image-wrapper {
    flex: 1;
    width: 100%;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  .text-wrapper {
    flex: 1;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
      font-size: 2rem;
      font-weight: 800;
      line-height: 1.1;
      text-transform: uppercase;

      ${breakpoints.phoneLarge} {
        font-size: 1.6rem;
        text-align: left;
      }
    }

    p {
      font-size: 1.05rem;
      font-weight: 300;
      line-height: 1.5;
      opacity: 0.9;

      ${breakpoints.phoneLarge} {
        text-align: left;
      }
    }

    .highlight {
      font-weight: 700;
      font-style: italic;
      font-size: 1.2rem;
      opacity: 1;
    }

    ${breakpoints.tablet} {
      text-align: center;
      align-items: center;
    }
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 100%;

    ${breakpoints.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${breakpoints.phoneLarge} {
      grid-template-columns: 1fr;
    }
  }

  .card {
    border: 1px solid #6ad9ab;
    border-radius: 10px;
    padding: 70px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 20px;
    min-height: 200px;
    transition: transform 0.3s ease;
    background: #252e89;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      max-width: 50px;
      stroke-width: 1.5px;
    }

    span {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.4;
    }
  }

  .cta-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;

    button {
      background: #73e6a6;
      border: none;
      border-radius: 50px;
      padding: 15px 40px;
      font-size: 0.9rem;
      font-weight: 700;
      color: #000;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      margin-top: 10px;

      &:hover {
        background: #5cdba5;
        transform: translateY(-2px);
      }

      svg {
        stroke-width: 0.5px;
      }

      ${breakpoints.phoneLarge} {
        width: 100%;
        justify-content: center;
      }
    }
  }
`;
