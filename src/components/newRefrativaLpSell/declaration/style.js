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
  max-width: 85rem;
  margin: auto;
  text-align: center;
  color: #fff;
  padding-top: 50px;
  padding-bottom: 100px;

  ${Media.Tablet} {
    height: auto;
    padding-bottom: 50px;
  }

  ${Media.Tablet} {
    padding-bottom: 1rem;
  }

  .container-declaration {
    width: 95%;
    margin: auto;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 70px;
    text-align: left;

    ${Media.Tablet} {
      flex-direction: column;
    }

    .texts {
      width: 95%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 500px;
      h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
      }
      h3 span {
        font-weight: 300;
        font-size: 1.7rem;

        ${Media.Tablet} {
          font-size: 1.5rem;
          font-weight: 400;
        }
      }
    }
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      color: #a0a4a8;
    }
    img {
      max-width: 400px;
      border-radius: 20px;
      width: 100%;

      ${Media.Tablet} {
        max-width: 400px;
      }
    }
  }
`;
