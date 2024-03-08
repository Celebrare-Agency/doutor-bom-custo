import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  min-height: 40rem;
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
  .firstTopPhoto {
    width: 30%;
    max-width: 500px;
    border-radius: 0px 0px 200px 0px;

    ${Media.Tablet} {
      display: none;
    }
  }
  .containerTextTitle {
    display: block;
    width: 56%;
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
    min-height: 90rem;
    justify-content: space-evenly;
    ${Media.Tablet} {
    }

    .line {
      left: 4rem;
      position: absolute;
      width: 97px;
      height: 90%;
      background: var(--greenThin);
      margin-top: 1rem;
      z-index: -1;

      ${Media.Tablet} {
        width: 40px;
        margin-top: 2rem;
        left: 2rem;
      }
      ${Media.PhoneLarge} {
        width: 20px;
        left: 1rem;
      }
    }

    span {
      color: var(--black);
      font-family: Lato;
      font-size: 100px;
      font-weight: 900;
      width: 40%;

      ${Media.Tablet} {
        font-size: 70px;
      }
      ${Media.PhoneLarge} {
        font-size: 40px;
        width: inherit;
      }
    }
    p {
      color: var(--black);
      font-family: Lato;
      width: 50%;

      ${Media.Tablet} {
        width: 60%;
      }
      ${Media.PhoneLarge} {
        width: auto;
      }
    }
    .timelineYears {
      ${Media.PhoneLarge} {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    .photoContainer {
      width: 90%;
      max-width: 1000px;
      margin-top: 3rem;
      margin: 0 auto;
      ${Media.Tablet} {
        width: 100%;
      }
      .finalTimelinePhoto {
        margin: auto;
        display: block;
      }
    }
  }
`;
