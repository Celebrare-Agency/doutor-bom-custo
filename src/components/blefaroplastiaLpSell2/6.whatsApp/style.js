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
  max-width: 1000px;
  min-height: 40rem;
  padding: 50px 0;
  margin: auto;

  .container-wtt {
    width: 100%;
    min-height: 150px;
    background-color: #1c214b;
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
      background: #29ac06;
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
      gap: 20px;
    }
  }

  .imagens img {
    width: 100%;
    object-fit: cover;
    max-width: 500px;
    margin: auto;

    ${breakpoints.phoneLarge} {
      width: 90%;
      max-width: 400px;
    }
  }
`;
