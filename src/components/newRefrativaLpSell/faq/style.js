import styled from "styled-components";

const breakpoints = {
  phoneSmall: "@media(max-width:320px)",
  phoneLarge: "@media(max-width:600px)",
  tablet: "@media(max-width:1000px)",
  tabletLarge: "@media(max-width:1080px)",
  laptop: "@media(max-width:1150px)",
};

export const Container = styled.section`
  position: relative;
  width: 95%;
  max-width: 1200px;
  min-height: 40rem;
  padding: 50px 0;
  margin: auto;

  .video-container {
    ${breakpoints.tabletLarge} {
      height: auto;
      margin: 0;
    }
  }

  .container-faq {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
    flex-direction: row;

    ${breakpoints.tabletLarge} {
      flex-direction: column;
    }
  }

  .container-questions {
    width: 100%;
    color: #fff;
    padding-bottom: 50px;

    ${breakpoints.tabletLarge} {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .container-title {
      position: relative;
      display: flex;
      justify-content: center;
      text-align: center;
      margin: 40px 0;
      background-color: #3B4AE2;
      padding: 10px;
      max-width: 100px;
      width: 90%;
      line-height: 30px;
      border-radius: 50px;

      ${breakpoints.phoneLarge} {
        line-height: 25px;
        text-align: left;
      }

      ${breakpoints.tabletLarge} {
        margin: 40px auto;
      }

      img {
        width: 40px;
      }

      h3 {
        font-size: 20px;
        color: #fff;
        word-wrap: break-word;

        ${breakpoints.tabletLarge} {
          margin-left: 5px;
        }
      }
    }

    h1 {
      font-size: 33px;
      margin: 20px 0;

      ${breakpoints.tabletLarge} {
        text-align: center;
      }
    }

    .container-video {
      max-width: 500px;

      ${breakpoints.tabletLarge} {
        margin: auto;
      }
    }

    .doubts {
      background-color: #141516;
      max-width: 500px;
      padding: 20px auto;
      box-sizing: border-box;

      ${breakpoints.tabletLarge} {
        width: 100%;
        margin: auto;
      }

      .container-doubts {
        padding: 20px 50px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        ${breakpoints.tabletLarge} {
          padding: 20px;
        }
      }

      h2 {
        font-size: 23px;
      }

      p {
        font-size: 18px;
      }

      button {
        width: 100%;
        max-width: 200px;
        background: #29AC06;
        border-radius: 50px;
        color: #fff;
        text-align: center;
        font-size: 18px;
        line-height: 31px;
        font-weight: 400;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        svg {
          height: 20px;
          margin: 0 5px;
        }
      }

      button:hover{ background: #208305; }
    }
  }

  .container-response {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 100%;
    height: 100%;

    details {
      width: 100%;
      transition: 0.3s all;
    }

    summary::before {
      content: "";
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-right: 2px solid #4DABF7;
      border-bottom: 2px solid #4DABF7;
      transform: rotate(45deg);
    }

    details[open] > summary::before {
      transform: rotate(225deg);
    }

    details summary::-webkit-details-marker {
      display: none;
    }

    summary {
      width: 100%;
      position: relative;
      padding: 1.4rem 0;
      font-family: "lato";
      transition: 0.3s all;
      font-style: normal;
      color: #fff;
      font-size: 18px;
      border-bottom: 1px solid #3B4AE2;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: left;

      span {
        text-align: left;
        color: #000;
      }
    }

    h3 {
      text-align: left;
      padding-right: 30px;
      font-size: 1.2rem !important;
      user-select: none;

      ${breakpoints.tabletLarge} {
        text-align: left;
        margin: 0;
        padding-right: 60px;
        font-size: 1.1rem !important;
      }
    }

    .faq-video {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .video-container {
      height: 300px;

      ${breakpoints.tabletLarge} {
        height: auto;
        margin: 0;
      }
    }
  }

  .container-wtt {
    width: 100%;
    min-height: 150px;
    background-color: #1C214B;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    flex-direction: row;

    ${breakpoints.tablet} {
      flex-direction: column;
    }

    p {
      width: 60%;
      color: #fff;
      text-align: center;

      ${breakpoints.tablet} {
        margin: 20px auto;
      }
    }

    button {
      width: 100%;
      max-width: 300px;
      background: #29AC06;
      border-radius: 50px;
      color: #fff;
      text-align: center;
      font-size: 18px;
      line-height: 31px;
      font-weight: 400;
      padding: 15px 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;

      svg {
        margin: auto 5px;
      }
    }    

    button:hover{ background: #208305; }
  }
`;
