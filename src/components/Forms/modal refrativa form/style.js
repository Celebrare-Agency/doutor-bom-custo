import styled from "styled-components";

const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.main`
  position: fixed;
  width: 90%;
  height: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999; /* Increase to ensure it stays above the other modal */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
  ${Media.PhoneLarge} {
    width: 95%; /* Adjust width for smaller screens */
  }

  ${Media.PhoneSmall} {
    width: 100%; /* Adjust width for smallest screens */
    top: 50%; /* Re-center */
    left: 50%; /* Re-center */
    transform: translate(-50%, -50%); /* Re-center */
  }

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem 0;
    background-color: rgba(1, 1, 1, 0.6); /* Dark overlay */
    backdrop-filter: blur(8px); /* Gaussian blur */
    z-index: -1; /* Place it below the content */
    border-radius: 20px;
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
      color: var(--light);
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
        color: white;
      }

      select {
        text-align: center;
      }
    }
    input,
    select {
      padding: 0.5rem 1rem;
      border: 1px solid #ccc;
      border-radius: 15px;
      width: 50%;
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

  h3 {
    color: var(--light) !important;
    text-align: center;
    font-family: Inter;
    font-weight: Bold;
    text-transform: uppercase;
    white-space: pre;
    ${Media.Laptop} {
      white-space: normal;
    }
  }
  button {
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
