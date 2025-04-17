import styled from "styled-components";

const Media = {
  PhoneLarge: "@media(max-width:610px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:450px)",
  Phone: "@media(max-width: 767px)",
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
  img {
    border-radius: 20px;
  }

  ${Media.Tablet} {
    height: auto;
    padding-bottom: 50px;
  }

  ${Media.Tablet} {
    padding-bottom: 1rem;
  }

  .container-solution {
    width: 100%;
    margin: auto;
    color: #fff;
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    border-radius: 20px;
    padding: 50px 0;

    ${Media.Tablet} {
      flex-direction: column;
    }

    h1 {
      font-style: normal;
      font-weight: 800;
      font-size: 27.1244px;
      color: var(--off-white);
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14.9439px;
      line-height: 19px;

      color: #a0a4a8;
    }
    .container-initial {
      width: 95%;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 50px;
    }

    .container-img {
      margin: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 20px;
      text-align: left;

      ${Media.Phone} {
        flex-direction: column;
      }

      p {
        max-width: 380px;
      }

      img {
        width: 100%;
        max-width: 400px;
      }
    }

    .img-cont {
      flex-direction: row-reverse !important;

      ${Media.Phone} {
        flex-direction: column !important;
      }
    }

    .container-price {
      margin: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 20px;
      text-align: left;

      ${Media.Phone} {
        flex-direction: column-reverse;
      }

      .price {
        display: flex;
        flex-direction: row;
        justify-content: start;
        gap: 5px;
        align-items: center;
      }

      h1,
      h2 {
        background: radial-gradient(
          closest-side,
          rgba(255, 235, 158, 1) 0%,
          rgba(233, 203, 128, 1) 25%,
          rgba(211, 172, 99, 1) 50%,
          rgba(189, 142, 73, 1) 75%,
          rgba(167, 112, 48, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
      }

      h1 {
        font-size: 5rem;
      }

      h2 {
        font-size: 2rem;
      }

      .container-line {
        width: 100%;
        margin: 0px auto 35px auto;

        ${Media.Phone} {
          display: none;
        }

        .line-container {
          width: 100%;
          display: flex;
          align-items: center;
          position: absolute;
        }

        .line {
          width: 100%;
          max-width: 550px;
          height: 5px;
          background: radial-gradient(
            closest-side,
            rgba(255, 235, 158, 1) 0%,
            rgba(233, 203, 128, 1) 25%,
            rgba(211, 172, 99, 1) 50%,
            rgba(189, 142, 73, 1) 75%,
            rgba(167, 112, 48, 1) 100%
          );
        }

        .circle {
          width: 20px;
          height: 20px;
          background: radial-gradient(
            closest-side,
            rgba(255, 235, 158, 1) 0%,
            rgba(233, 203, 128, 1) 25%,
            rgba(211, 172, 99, 1) 50%,
            rgba(189, 142, 73, 1) 75%,
            rgba(167, 112, 48, 1) 100%
          );
          border-radius: 50%;
        }
      }

      p {
        max-width: 450px;
      }

      img {
        width: 100%;
        max-width: 400px;
      }
    }
  }
`;
