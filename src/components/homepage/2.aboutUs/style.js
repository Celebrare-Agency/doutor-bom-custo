import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  height: 40rem;
  margin: auto;
  width: 85%;
  max-width: 80rem;
  position: relative;

  ${Media.Tablet} {
    min-height: 26rem;
  }
  ${Media.PhoneLarge} {
    width: 90%;
    max-width: 90rem;
  }

  .col {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  .topContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    ${Media.Tablet} {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  img {
    width: 30%;
    max-width: 500px;
    border-radius: 0px 0px 200px 0px;

    ${Media.Tablet} {
      display: none;
    }
  }
  .containerTextTitle {
    display: block;
    width: 40%;
    margin: auto;
    gap: 11rem;
    ${Media.Tablet} {
      width: 100%;
      margin: 0 auto;
    }
    h2 {
      white-space: break-spaces;
      color: var(--black);
      font-family: Inter;
      font-weight: 800;
      text-transform: uppercase;
    }
    p {
      width: 100%;
      color: var(--black);
      font-family: Lato;

      ${Media.Tablet} {
        width: 80%;
        text-align: left;
      }
    }
  }

  .timelineContainer {
    position: relative;
    min-height: 60rem;
    justify-content: space-around;
    .line {
      left: 4rem;
      position: absolute;
      width: 97px;
      height: 100%;
      background: #8aecc3;
      margin-top: 1rem;
      z-index: -1;
    }

    span {
      color: var(--black);
      font-family: Lato;
      font-size: 100px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      width: 40%;
    }
    p {
      color: var(--black);
      font-family: Lato;
      font-size: 30px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      width: 50%;
    }
    .timelineYears {
    }
  }
`;
