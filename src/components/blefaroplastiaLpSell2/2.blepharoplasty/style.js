import styled from "styled-components";

const breakpoints = {
  phoneSmall: "@media(max-width:320px)",
  phoneLarge: "@media(max-width:600px)",
  tablet: "@media(max-width:1000px)",
  laptop: "@media(max-width:1150px)",
};

export const Container = styled.section`
  width: 100%;
  height: auto;
  padding: 50px 0;

  .squares {
    width: 95%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .squares-container,
  .squares-container2,
  .squares-container4 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin-top: 30px;

    ${breakpoints.tablet} {
      flex-direction: column;
    }
  }

  .squares-container {
    .texts p {
      width: 100%;
      max-width: 650px;
      color: white;
      margin-top: 20px;
      font-weight: 200;

      span {
        font-weight: 700;
      }
    }

    .squares {
      width: 95%;
      max-width: 500px;
      height: 210px;
      padding-bottom: 20px;
      background-color: #3b4ae2;
      border-radius: 15px;
      color: white;
      font-size: 30px;
      margin-right: 20px;

      p {        
        font-size: 23px;
        margin: 5% 0 0 5%;
      }
    }
  }

  .squares-container2 {
    img {
      width: 100%;
      max-width: 750px;
    }

    .squares2 {
      width: 100%;
      max-width: 300px;
      height: 210px;
      padding-bottom: 20px;
      background-color: #3b4ae2;
      border-radius: 15px;
      color: white;
      margin-left: 20px;

      ${breakpoints.tablet} {
        max-width: 600px;
        margin: 20px 0 0 0;
      }

      p {
        margin: 28% 0 0 8%;
        font-size: 23px;

        ${breakpoints.tablet} {
          margin-top: 13%;
        }
      }
    }
  }

  .squares-container3 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    p {
      width: 100%;
      max-width: 850px;
      color: white;
      margin-top: 20px;
      font-weight: 200;
      font-size: 20px;

      ${breakpoints.tablet} {
        width: 95%;
      }

      span {
        font-weight: 700;
      }
    }
  }

  .squares-container4 {
    img {
      width: 100%;
      max-width: 750px;
    }

    .classe {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 20px;

      ${breakpoints.tablet} {
        margin-left: 0;
      }

      .squares4 {
        width: 100%;
        height: auto !important;
        max-width: 600px;
        height: 210px;
        padding-bottom: 20px;
        background-color: #3b4ae2;
        border-radius: 15px;
        color: white;

        ${breakpoints.tablet} {
          margin-top: 20px;
        }

        p {
          margin-top: 20px;
          font-size: 23px;
          padding: 0 5%;
        }
      }

      button {
        width: 100%;
        max-width: 600px;
        background: #3b4ae2;
        border-radius: 50px;
        color: #ffffff;
        text-align: center;
        font-size: 18px;
        line-height: 31px;
        font-weight: 400;
        padding: 10px 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px auto auto auto;

        ${breakpoints.PhoneLarge} {
          line-height: 20px;
        }
      }

      button:hover { background:rgb(39, 50, 179); }
    }
  }

  .container-type-blepha {
    width: 95%;
    max-width: 1200px;
    margin: 50px auto auto auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    text-align: center;

    button {
      width: 100%;
      max-width: 600px;
      background: #ffffff;
      border-radius: 50px;
      color: #3b4ae2;
      text-align: center;
      font-size: 18px;
      line-height: 31px;
      font-weight: 400;
      padding: 10px 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px auto auto auto;

      ${breakpoints.PhoneLarge} {
        line-height: 20px;
      }
    }

    button:hover { 
      color:rgb(87, 101, 252);
      background:rgb(187, 187, 187); 
    }
  }

  .container-blepha{    
    margin: 50px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    ${breakpoints.phoneLarge} {      
      flex-direction: column;
    }
  }

  .blepha{
    width: 30%;
    height: auto;
    min-height: 350px;
    padding-bottom: 20px;
    border-radius: 20px;
    color: #3B4AE2;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;

    ${breakpoints.phoneLarge} {    
      width: 90%;
      margin-top: 20px;
      max-width: 300px;
    }

    img{
      width: 100%;
    }

    h1{
      width: 90%;
      margin: auto;
      font-size: 1.5rem;
    }

    p{
      width: 90%;
      margin: auto;
      font-size: 16px;
    }
  }
`;