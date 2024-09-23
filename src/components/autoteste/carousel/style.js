import styled, { css } from "styled-components/";

const Media = {
  NavLarge: "@media(max-width:1200px)",
  Nav: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};

export const Carousell = styled.header`
  width: 100% !important;
  margin: auto;

  .slick-slider,
  .slick-initialized {
    width: 90% !important;
    margin: auto;
  }

  .carousel-slide {
    width: 95% !important;
    height: 350px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 20px;
    margin: 30px auto;
    background-color: #fafafa;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

    ${Media.PhoneLarge} {
      width: 100% !important;
      min-height: 450px;
    }

    .containerCarousel {
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin: auto;
      justify-content: center;
    }

    .profile {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: left;
      margin: 0 auto;

      img {
        width: 70px;
        height: 70px;
        margin-right: 20px;
        border-radius: 50%;
        object-fit: contain;
      }

      h1 {
        font-size: 1.7rem;

        ${Media.PhoneLarge} {
          font-size: 1.4rem;
        }
      }

      p {
        font-size: 1.2rem;
        opacity: 80%;

        ${Media.PhoneLarge} {
          font-size: 1rem;
        }
      }
    }

    .assessment {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 20px 0px;

      svg {
        width: 35px;
        height: 35px;
        color: #ecb72f;
      }
    }
  }

  .testimonial-text {
    font-size: 1.2rem;
  }
`;
