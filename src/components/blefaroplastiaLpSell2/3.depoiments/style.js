import styled from "styled-components";

const breakpoints = {
  phoneSmall: "@media(max-width:320px)",
  phoneLarge: "@media(max-width:600px)",
  tablet: "@media(max-width:1000px)",
  laptop: "@media(max-width:1150px)",
};

export const Container = styled.section`
  position: relative;
  width: 95%;
  height: auto;
  min-height: 40rem;
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 1200px;
  margin: auto;

  .container-title {
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 40px auto auto 0;
    background-color: #3b4ae2;
    padding: 10px 10px;
    max-width: 400px;
    width: 90%;
    line-height: 35px;
    border-radius: 50px;

    ${breakpoints.phoneLarge} {
      line-height: 23px;
      text-align: left;
    }

    ${breakpoints.tablet} {
      margin: 40px auto auto auto;
    }

    img {
      width: 40px;
    }

    h3 {
      font-size: 20px;
      margin-left: 10px;
      color: #ffffff;
      word-wrap: break-word;

      ${breakpoints.tablet} {
        margin-left: 5px;
      }
    }
  }

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
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

    ${breakpoints.phoneLarge} {
      width: 100% !important;
      min-height: 450px;
    }

    .container-carousel {
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
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      margin: 0 auto;

      img {
        width: 70px;
        height: 70px;
        border-radius: 70px;
        object-fit: contain;
      }

      p {
        margin-top: 20px;
        color: #fff;
        font-size: 1.2rem;
        opacity: 80%;

        ${breakpoints.phoneLarge} {
          font-size: 1rem;
        }
      }
    }
  }

  .slick-dots {
    bottom: 0px;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: #fff;
  }

  .slick-dots li.slick-active button:before {
    color: #3b4ae2;
  }

  .wrapper {
    button {
      background: #29ac06;
      border-radius: 50px;
      position: relative;
      color: #ffffff;
      text-align: center;
      font-size: 18px;
      line-height: 31px;
      font-weight: 400;
      padding: 10px 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px auto auto auto;

      ${breakpoints.phoneLarge} {
        line-height: 20px;
      }
    }

    .schedule:hover {
      background: #208305;
    }
  }
`;
