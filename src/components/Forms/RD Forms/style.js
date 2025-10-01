import styled from "styled-components";

const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.main`
  width: 100%;
  height: auto;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 1rem 5rem;
  box-sizing: border-box;

  ${Media.PhoneLarge} {
    width: 95%;
    margin: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    margin: auto;
    .Button {
      border: none;
      background-color: #38af7e;
      cursor: pointer;
      padding: 1rem !important;
      font-size: 1rem !important;
      color: var(--black);
      text-align: center;
      font-family: Inter;
      font-weight: 800;
      text-transform: uppercase;
      border-radius: 10.94px !important;
    }
    .boxSection {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      p {
        color: var(--black);
      }

      select {
        text-align: center;
      }
    }
    input,
    select {
      padding: 0.5rem 1rem;
      border: 1px solid var(--black);
      border-radius: 15px;
      width: 65%;
      font-size: 1.5rem;

      ${Media.PhoneLarge} {
        font-size: 1rem;
        width: 90%;
      }
    }

    input::placeholder {
      font-size: 1.3rem;
      text-align: left;
      color: var(--black);
      font-family: lato;
      font-weight: bold;

      ${Media.PhoneLarge} {
        font-size: 1rem;
        width: 90%;
      }
    }

    input:focus {
      outline: none;
      box-shadow: 0 0 2px 1px var(--blue);
    }
  }      

  .checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    gap: 0.5rem;
    max-width: 500px;

    input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }
  }

  h3 {
    color: var(--black) !important;
    text-align: center;
    font-family: Inter;
    font-weight: Bold;
    text-transform: uppercase;
    white-space: pre;
    ${Media.Laptop} {
      white-space: normal;
    }
  }
  a {
    position: absolute;
    top: 10px;
    right: 20px;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;

    ${Media.PhoneLarge} {
      font-size: 1.5rem;
    }
  }
`;
