import styled from "styled-components";

const breakpoints = {
  phoneSmall: "@media(max-width:320px)",
  phoneLarge: "@media(max-width:600px)",
  tablet: "@media(max-width:1000px)",
  laptop: "@media(max-width:1150px)",
};

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 40rem;
  padding: 50px 0;
  margin: auto;

  .container-wtt {
    width: 100%;
    max-width: 65rem;
    ${breakpoints.tablet} {
      max-width: 85rem;
    }
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
      text-align: left;

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

    button:hover {
      background: #208305;
    }
  }

  .why-am-i-doing-this {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
    background-color: #3b4ae2;
    padding: 50px 0;
    .container-why {
      max-width: 1500px;
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin: auto;
      text-align: left;
      color: #fff;

      h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 27.3893px;
        line-height: 41px;
      }
      ${breakpoints.tablet} {
        flex-direction: column;
        text-align: left;
      }

      p {
        font-size: 1.2rem;
        max-width: 700px;
        ${breakpoints.tablet} {
          text-align: left;
        }
      }
    }
  }

  .container-price {
    width: 95%;
    max-width: 65rem;
    margin: auto;
    color: #fff;
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    padding: 50px 0;
    text-align: center;
    ${breakpoints.tablet} {
      max-width: 85rem;
    }

    ${breakpoints.tablet} {
      flex-direction: column;
    }

    h1 {
      font-size: 2rem;
      margin: 20px auto;
      ${breakpoints.tablet} {
        text-align: left;
        width: 100%;
      }
    }

    p {
      margin: 10px auto;
      color: #a0a4a8;
      ${breakpoints.tablet} {
        text-align: left;
      }
    }
  }

  .imagens {
    max-width: 65rem;
    margin: 130px auto 20px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;

    ${breakpoints.tablet} {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      max-width: 85rem;
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
