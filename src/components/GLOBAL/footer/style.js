import styled from "styled-components";

const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Footer = styled.footer`
  width: 100%;
  background-color: #fff;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;

  .main-content {
    width: 90%;
    max-width: 1200px;
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    gap: 90px;

    ${Media.Tablet} {
      flex-direction: column;
      gap: 40px;
    }
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .brand-column {
    flex: 2;
    max-width: 450px;

    ${Media.Tablet} {
      max-width: 100%;
    }

    .footer-logo {
      width: 150px;
      margin-bottom: 10px;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.6;
      color: #333;
      margin-bottom: 10px;
    }
  }

  .info-column {
    flex: 1;
    padding-top: 10px;

    .info-block {
      margin-bottom: 30px;

      h3 {
        color: #485aff;
        font-size: 1rem;
        font-weight: 800;
        text-transform: uppercase;
        margin-bottom: 10px;
      }

      p {
        font-size: 0.9rem;
        line-height: 1.8;
        color: #333;
      }
    }
  }

  .social-column {
    flex: 1;
    align-items: flex-start;
    padding-top: 10px;

    h3 {
      color: #485aff;
      font-size: 1rem;
      font-weight: 800;
      text-transform: uppercase;
      line-height: 1.2;
      width: 50%;

      ${Media.Tablet} {
        width: 100%;
      }
    }

    .icons {
      display: flex;
      gap: 15px;
      margin-top: 10px;

      a {
        color: #000;
        font-size: 1.5rem;
        transition: color 0.3s ease;

        &:hover {
          color: #485aff;
        }
      }
    }
  }

  .bottom-bar {
    width: 100%;
    border-top: 1px solid #ccc;
    padding: 25px 0;

    .container-bottom-bar {
      width: 90%;
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: auto;

      ${Media.PhoneLarge} {
        flex-direction: column;
        gap: 15px;
        text-align: center;
      }
    }

    p,
    a {
      font-size: 0.9rem;
      color: #333;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;
