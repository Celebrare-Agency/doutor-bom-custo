import styled from "styled-components";

const Media = {
  PhoneLarge: "@media(max-width:610px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:450px)",
};
export const Container = styled.main`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  max-width: 65rem;
  margin: auto;
  padding-top: 50px;
  text-align: center;
  padding-bottom: 100px;

  ${Media.Tablet} {
    width: 90%;
    height: auto;
    padding-bottom: 50px;
  }

  ${Media.Tablet} {
    padding-bottom: 1rem;
  }

  .container-banner {
    width: 95%;
    margin: auto;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 2.5rem;
      ${Media.Tablet} {
        align-items: flex-start;
        text-align: left;
        font-size: 1.3rem;
      }
    }
    p {
      font-weight: 300;
      line-height: 150%;
      color: #a0a4a8;
      ${Media.Tablet} {
        font-size: 1rem;
      }
    }

    ${Media.Tablet} {
      align-items: flex-start;
      text-align: left;
      font-size: 1rem;
    }
    .logos {
      display: flex;
      flex-direction: row;
      gap: 30px;

      .logoIntitutoKos {
        padding-right: 20px;
      }

      img {
        max-width: 230px;
        width: 100%;
        ${Media.Tablet} {
          max-width: 150px;
        }
      }
    }
  }
`;
