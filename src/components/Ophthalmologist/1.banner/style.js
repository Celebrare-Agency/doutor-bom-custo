import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  position: relative;
  .patterns {
    width: 85%;
    max-width: 80rem;
    min-height: 45rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    overflow: hidden;
    margin: auto;

    ${Media.Tablet} {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      align-items: flex-start;
      padding: 8rem 0;
      min-height: 25rem;
    }
    ${Media.PhoneLarge} {
      width: 90%;
      max-width: 90rem;
    }
  }

  img {
    z-index: -1;
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
  .backgroundVector {
    position: absolute;
    width: 50%;
    height: 20rem;
    top: -0.4rem;
    left: 0;
    z-index: -1;
    ${Media.Tablet} {
      width: 100%;
    }
  }
  .containerText {
    align-items: flex-start;
    position: relative;
    justify-content: center;
    gap: 1rem;
    width: 50%;
    gap: 3rem;
    margin: auto;
    height: 30rem;
    img {
      width: 80%;
      height: 90%;
      object-fit: contain;
      ${Media.PhoneLarge} {
        width: 100%;
      }
    }
    ${Media.Tablet} {
      margin: 0;
      width: 100%;
      height: 35rem;
    }

    ${Media.PhoneLarge} {
      margin: 0;
      width: 100%;
      height: 23rem;
    }
    button {
      background: var(--blue);
      color: #fff;
      font-family: inter;
      font-style: normal;
      padding: 1rem;
      font-weight: 700;
      line-height: normal;
      font-size: 2rem;
      transition: 0.3s;

      ${Media.PhoneLarge} {
        font-size: 1.5rem;
      }

      &:hover {
        background-color: var(--blueHover);
      }
    }
  }

  .imgContainer {
    width: 40%;
    margin: auto;
    ${Media.Tablet} {
      display: none;
    }

    img {
      width: 100%;
    }
  }
`;
