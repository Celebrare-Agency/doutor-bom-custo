import styled from "styled-components";
import background from "../../../assets/refrativa2026/01.banner/cover.webp";

const breakpoints = {
  phoneSmall: "@media(max-width:320px)",
  phoneLarge: "@media(max-width:600px)",
  tablet: "@media(max-width:1000px)",
  laptop: "@media(max-width:1150px)",
};

export const Container = styled.section`
  width: 100%;
  background-color: #485aff;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    ${breakpoints.tablet} {
      flex-direction: column;
      gap: 3rem;
    }
  }

  .text-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #fff;

    .logo {
      width: 130px;
      margin-bottom: 1rem;

      ${breakpoints.phoneLarge} {
        width: 100px;
      }
    }

    h1 {
      font-size: 2.8rem;
      font-weight: 800;
      line-height: 1.1;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      color: #fff;

      ${breakpoints.laptop} {
        font-size: 2.2rem;
      }

      ${breakpoints.phoneLarge} {
        font-size: 1.8rem;
      }
    }

    p {
      font-size: 1.05rem;
      line-height: 1.6;
      font-weight: 300;
      margin-bottom: 2.5rem;
      max-width: 90%;
    }

    button {
      background: #73e6a6;
      border: none;
      border-radius: 50px;
      padding: 15px 35px;
      font-size: 1rem;
      font-weight: 700;
      color: #000;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

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
        font-size: 0.9rem;
      }
    }
  }

  .image-grid {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: auto;

    ${breakpoints.tablet} {
      justify-content: center;
    }

    img {
      width: 100%;
      max-width: 600px;
      height: auto;
      object-fit: contain;
      border-radius: 20px;

      ${breakpoints.phoneLarge} {
        width: 100%;
      }
    }
  }
`;
