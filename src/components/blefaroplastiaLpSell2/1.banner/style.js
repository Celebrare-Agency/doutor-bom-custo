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
    justify-content: space-between;

    .sociais a {
      margin-left: 10px;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  .banner {
    width: 95%;
    min-height: 600px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;

    img {
      width: 150px;
      height: 150px;
    }

    h1 {
      width: 90%;
      max-width: 900px;
      color: #fff;
      text-align: center;
    }

    button {
      background: #29ac06;
      border-radius: 50px;
      color: #fff;
      font-size: 18px;
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
    }

    button:hover {
      background: #208305;
    }
  }
`;