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
  max-width: 65rem;
  min-height: 40rem;
  margin: auto;
  padding: 50px 0;
  ${breakpoints.tablet} {
    max-width: 85rem;
  }

  .container-title {
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: #3b4ae2;
    padding: 10px;
    max-width: 800px;
    width: 90%;
    line-height: 35px;
    border-radius: 50px;
    margin: 40px auto 0;
    gap: 5px;

    ${breakpoints.phoneLarge} {
      line-height: 25px;
      text-align: left;
    }

    img {
      width: 40px;
    }

    h3 {
      font-size: 20px;
      margin-left: 10px;
      color: #fff;
      word-wrap: break-word;
      ${breakpoints.tablet} {
        margin-left: 5px;
      }
    }
  }

  .container-video {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    width: 100%;
    ${breakpoints.tablet} {
      flex-direction: column;
    }
    .container-Text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      width: 50%;
      margin: auto;
      ${breakpoints.tablet} {
        margin: 0;
        width: 100%;
      }
    }
    .video-container {
      width: 100%;
      height: 400px;
      ${breakpoints.phoneLarge} {
        height: auto !important;
      }
    }

    h1,
    p {
      color: #fff;
    }

    h1 {
      font-size: 28px;
    }
    p {
      font-size: 20px;
    }

    button {
      width: 100%;
      max-width: 50%;
      background: #29ac06;
      border-radius: 50px;
      color: #fff;
      font-size: 18px;
      font-weight: 400;
      padding: 10px 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
      ${breakpoints.tablet} {
        max-width: 80%;
      }
      svg {
        margin: auto 5px;
      }
    }

    button:hover {
      background: #208305;
    }
    ${breakpoints.tablet} {
      width: 100%;
    }
  }

  .container-maps {
    h1 {
      color: #fff;
      margin: 50px auto;
      font-size: 28px;
    }

    .maps-street {
      width: 100%;
      margin: 20px auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .container-iframe-maps-streetview {
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      ${breakpoints.tablet} {
        flex-direction: column;
        gap: 20px;

        iframe {
          width: 100%;
          border-radius: 20px;
        }
      }
    }

    .container-location {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      ${breakpoints.tablet} {
        flex-direction: column;
      }
    }

    .how-to-get-there {
      max-width: 500px;
      width: 100%;

      .location {
        margin: 10px 0;
        background: rgba(59, 74, 226, 0.28);
        border-radius: 50px;
        color: #3b4ae2;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        padding: 10px 0;
        max-width: 150px;
        ${breakpoints.tablet} {
          margin: auto;
        }
      }

      h1 {
        margin: 30px 0;
        ${breakpoints.tablet} {
          text-align: center;
        }
      }
    }

    .location-icons {
      max-width: 500px;
      width: 100%;

      .icons {
        display: flex;
        align-items: center;

        ${breakpoints.phoneSmall} {
          flex-direction: column;
          text-align: center;
        }
        p {
          width: 90%;
          color: #fff;
          font-size: 18px;
          margin: 20px 0;
        }
        svg {
          color: #3b4ae2;
          width: 40px;
          height: 30px;
        }
      }
    }
  }

  .maps {
    position: relative;
    width: 100%;
    padding-bottom: 150px;

    ${breakpoints.laptop} {
      padding-bottom: 10px;
    }

    .information-maps {
      width: 100%;
      position: absolute;
      bottom: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      ${breakpoints.laptop} {
        flex-direction: column;
        gap: 20px;
        position: relative;
      }

      .container-infoMaps {
        width: 100%;
      }

      .container-information {
        padding: 50px;
        width: 90%;
        max-width: 400px;
        background-color: #101010;
        margin: auto;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ${breakpoints.tablet} {
          padding: 0;
        }
      }

      p {
        color: #ffffff;
      }
      button {
        background: #3b4ae2;
        border-radius: 50px;
        position: relative;
        color: #ffffff;
        text-align: center;
        font-size: 18px;
        line-height: 31px;
        font-weight: 400;
        padding: 10px 30px;
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;
        margin: 20px 0;

        ${breakpoints.phoneLarge} {
          line-height: 25px;
        }
      }

      button:hover {
        background: rgb(39, 50, 179);
      }
    }
  }
`;
