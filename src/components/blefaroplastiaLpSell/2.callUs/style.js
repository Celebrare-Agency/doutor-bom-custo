import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  min-height: 30rem;
  width: 85%;
  max-width: 80rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  overflow: hidden;
  margin: auto;
  ${Media.Tablet} {
    min-height: 25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  ${Media.PhoneLarge} {
    width: 90%;
    max-width: 90rem;
    min-height: 20rem;
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

  .containerText {
    align-items: flex-start;
    position: relative;
    gap: 1rem;
    width: 50%;
    margin: auto;
    ${Media.Tablet} {
      margin: 0;
      width: 100%;
      margin-top:2rem;
    }

    h3 {
      color: var(--black);
      font-family: Inter;
      font-weight: bold;
      ${Media.Tablet} {
        font-size: 2rem;
      }
      ${Media.PhoneSmall} {
        font-size: 1.4rem;
      }
    }

 button {
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 1rem;
        color: var(--light);
      }
      color: var(--light);
      font-family: Inter;
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      padding: 1rem;
      background:#38af7e;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 1rem;
      transition: 0.3s;
      &:hover {
        background-color: var(--blueHover);
      }
      ${Media.PhoneLarge} {
        font-size: 2rem;
        padding: 0.6rem;
      }
      ${Media.PhoneSmall} {
        font-size: 1.4rem;
      }

      .BUttonwhatsApp {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  .imgContainer {
    width: 48%;
    min-height: 40rem;
    margin: auto;
    ${Media.Tablet} {
      width: 80%;
      min-height: 10rem;
    }

    ${Media.PhoneLarge} {
      width: 80%;
      margin: 0 auto;
      min-height: 5rem;
    }
    img {
      width: 100%;
    }
  }
`;
