import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  background-color: var(--blue);
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
      gap: 2rem;
      min-height: 40rem;
      padding: 3rem 0;
    }
    ${Media.PhoneLarge} {
      width: 90%;
      max-width: 90rem;
    }
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
  .greenLine {
    display: none;
  }
  .containerText {
    align-items: flex-start;
    position: relative;
    justify-content: center;
    gap: 1rem;
    width: 50%;
    margin: auto;
    ${Media.Tablet} {
      margin: 0;
      width: 100%;
      height: 20rem;
    }
    h1 {
      color: var(--light);
      text-align: center;
      font-family: Inter;
      font-weight: 800;
      text-transform: uppercase;
    }
    p {
      color: var(--light);
      font-family: Inter;
      font-weight: 400;
    }
  }

  .imgContainer {
    width: 40%;
    margin: auto;
    ${Media.Tablet} {
      width: 60%;
      min-height: 0;
      margin: 0;
      min-height: 29rem;
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
