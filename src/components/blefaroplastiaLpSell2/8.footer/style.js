import styled from "styled-components";

const breakpoints = {
  phoneSmall: "@media(max-width:320px)",
  phoneLarge: "@media(max-width:600px)",
  phone: "@media(max-width:766px)",
  tablet: "@media(max-width:1000px)",
  laptop: "@media(max-width:1150px)",
};

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  padding-bottom: 50px;
  margin: auto;

  .initial-footer {
    max-width: 1200px;
    width: 95%;
    color: #fff;
    margin: auto;
    padding-bottom: 100px;

    h1 {
      font-size: 23px;
    }

    p {
      font-size: 18px;
      word-wrap: break-word;
      overflow-wrap: break-word;
      white-space: normal;
    }

    .container-initial-footer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;

      ${breakpoints.tablet} {
        flex-direction: column;
      }

      .address, .contact, .sociais {
        width: 100%;
        max-width: 280px;
        margin: 20px auto;
      }

      .contact p {
        margin: 10px auto;
      }

      .sociais a {
        svg {
          width: 30px;
          height: 30px;
          margin: 20px 5px;
        }
      }
    }
  }

  .end-footer {
    width: 100%;
    border-top: 1px solid #495057;

    .container-end-footer {
      width: 95%;
      margin: auto;
      display: flex;
      justify-content: center;
      gap: 50px;
      align-items: center;
      flex-direction: row;

      ${breakpoints.tablet} {
        flex-direction: column;
        text-align: center;
        gap: 10px;
      }
    }

    .brazil {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    p {
      color: #fff;
      font-size: 18px;
      margin-top: 30px;
      word-wrap: break-word;
      overflow-wrap: break-word;
      white-space: normal;

      ${breakpoints.tablet} {
        margin-top: 30px;
      }
    }
  }
`;