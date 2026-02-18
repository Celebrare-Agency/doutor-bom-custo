import styled from "styled-components";

const breakpoints = {
  phoneSmall: "@media(max-width:320px)",
  phoneLarge: "@media(max-width:600px)",
  tablet: "@media(max-width:1000px)",
  laptop: "@media(max-width:1150px)",
};

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-width: 279px;

  .location-section {
    width: 100%;
    padding: 80px 0;
    background: linear-gradient(180deg, #f2f6ff 0%, #ffffff 100%);
    display: flex;
    justify-content: center;
    align-items: center;

    .content-wrapper {
      width: 90%;
      max-width: 800px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 0.5rem;
    }

    h3 {
      font-size: 1.3rem;
      color: #000;
      font-weight: 500;
      line-height: 1.4;

      b {
        font-weight: 800;
      }

      ${breakpoints.phoneLarge} {
        font-size: 1.1rem;
        text-align: left;
      }
    }

    h2 {
      font-size: 2rem;
      color: #485aff;
      font-weight: 800;
      line-height: 1.1;
      text-transform: uppercase;
      margin: 10px 0;

      ${breakpoints.phoneLarge} {
        font-size: 1.8rem;
        text-align: left;
      }
    }

    .sub-text {
      font-size: 1.05rem;
      color: #333;
      font-weight: 400;

      ${breakpoints.phoneLarge} {
        text-align: left;
      }
    }

    .address-box {
      border: 1px solid #000;
      border-radius: 50px;
      padding: 15px 40px;
      display: flex;
      align-items: center;
      gap: 15px;
      margin: 20px 0;
      background: transparent;

      ${breakpoints.phoneLarge} {
        flex-direction: column;
        padding: 20px;
        border-radius: 20px;
        gap: 10px;
        width: 80%;
      }

      p {
        font-size: 1.05rem;
        margin: 0;
        line-height: 1.4;
        text-align: left;
        color: #000;

        ${breakpoints.phoneLarge} {
          text-align: center;
          font-size: 0.9rem;
        }

        b {
          font-weight: 800;
        }
      }
    }

    button {
      background: #485aff;
      border: none;
      border-radius: 50px;
      padding: 15px 40px;
      font-size: 0.9rem;
      font-weight: 700;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      margin-top: 10px;
      box-shadow: 0 4px 15px rgba(72, 90, 255, 0.3);

      &:hover {
        background: #3644cc;
        transform: translateY(-2px);
      }

      svg {
        stroke-width: 0.5px;
      }

      ${breakpoints.phoneLarge} {
        width: 100%;
        justify-content: center;
      }
    }
  }

  .footer-section {
    width: 100%;
    padding: 60px 0;
    background-color: #272a85;
    color: #fff;

    .container-Footer {
      width: 90%;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      text-align: center;
    }

    h2 {
      font-size: 2rem;
      font-weight: 700;

      ${breakpoints.phoneLarge} {
        font-size: 1.6rem;
        text-align: left;
      }
    }

    .contacts {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin: auto;

      p {
        font-size: 1.05rem;
        font-weight: 300;
        margin: 0;
        text-align: center;

        ${breakpoints.phoneLarge} {
          text-align: left;
        }
      }
    }
  }
`;
