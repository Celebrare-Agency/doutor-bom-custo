import styled from "styled-components";

const breakpoints = {
  phoneSmall: "@media(max-width:320px)",
  phoneLarge: "@media(max-width:600px)",
  tablet: "@media(max-width:1000px)",
  laptop: "@media(max-width:1150px)",
};

export const Container = styled.section`
  width: 100%;
  border-bottom: 1px solid #4dabf7;

  .container-header {
    color: #fff;
    border-bottom: 1px solid #fff;
    width: 95%;
    max-width: 1200px;
    padding: 40px 0;
    margin: auto;
    display: flex;
    align-items: center;
    p {
      font-size: 1rem;
    }

    justify-content: space-between;
    .sociais a {
      margin-left: 10px;

      svg {
        width: 25px;
        height: 25px;
      }
    }
  }

  .banner {
    width: 95%;
    min-height: 30rem;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap: 1rem;

    ${breakpoints.tablet} {
      align-items: flex-start;
      justify-content: center;
    }
    img {
      width: 150px;
      height: 150px;

      ${breakpoints.tablet} {
        width: 100px;
        height: 100px;
      }
      ${breakpoints.phoneLarge} {
        width: 75px;
        height: 75px;
      }
    }

    h1 {
      width: 90%;
      color: #fff;
      text-align: center;
      font-weight: 500;
      b {
        color: var(--blue);
        text-transform: uppercase;
      }

      ${breakpoints.tablet} {
        width: 100%;
        text-align: left;
      }
    }
  }

  button {
    background: #29ac06;
    border-radius: 50px;
    color: #fff;
    font-size: 18px !important;
    font-weight: 400;
    line-height: 31px;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    transition: background 0.3s;

    ${breakpoints.phoneLarge} {
      line-height: 20px;
    }

    button:hover {
      background: #208305;
    }
  }
`;
