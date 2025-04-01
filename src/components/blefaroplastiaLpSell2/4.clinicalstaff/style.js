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
  max-width: 1200px;
  min-height: 40rem;
  margin: auto;
  padding: 50px 0;

  p {
    color: #a0a4a8;
    font-size: 18px;
  }

  .container-title {
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: #3b4ae2;
    padding: 10px;
    max-width: 250px;
    width: 90%;
    line-height: 35px;
    border-radius: 50px;
    margin: 40px 0;

    ${breakpoints.tablet} {
      margin: 40px auto 0 auto;
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

  .hospital {
    h1 {
      color: #fff;
      margin: 30px auto;
      text-align: center;
      font-size: 28px;
    }

    p {
      margin: 20px auto;
    }

    .imagens {
      margin: 50px auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;

      ${breakpoints.tablet} {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      ${breakpoints.phoneLarge} {
        display: flex;
        flex-direction: column;
      }
    }

    .imagens img {
      width: 100%;
      object-fit: cover;
      max-width: 500px;
      margin: auto;
    }
  }

  .container-information {
    display: flex;
    justify-content: space-around;
    width: 100%;

    ${breakpoints.tablet} {
      flex-direction: column;
    }

    .information {
      width: 95%;
      margin: 20px 10px;
    }

    h3 {
      color: #fff;
      font-size: 23px;
      margin: 10px auto;
    }
  }

  button {
    width: 100%;
    max-width: 550px;
    background: #29ac06;
    border-radius: 50px;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    text-align: center;
    line-height: 31px;

    ${breakpoints.phoneLarge} {
      line-height: 23px;
    }
  }

  .schedule:hover {
    background: #208305;
  }
`;
