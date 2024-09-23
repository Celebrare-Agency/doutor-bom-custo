import styled, { css } from "styled-components/";
import cover from "../../assets/autoteste/Cover.png";
import background from "../../assets/autoteste/Background.png";

const Media = {
  NavLarge: "@media(max-width:1200px)",
  Nav: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};

export const ContainerAuto = styled.header`
  width: 100%;
  position: relative;
  height: auto;
  background-color: #F1F8F9; 
`;

export const Header = styled.header`
  position: fixed;
  z-index: 99;
  width: 100%;
  top: 0rem;

  .header {
    position: absolute;
    width: 100%;
    z-index: 1;
    .logoSide {
      ${({ isanimation }) => isanimation && css``}
    }

    ul {
      list-style-type: none; /* Remove os marcadores padrão */
      padding-left: 0; /* Remove o recuo à esquerda padrão */
    }

    ul,
    li {
      text-decoration: none;
    }
    .logoSide {
      cursor: pointer;
    }

    ul,
    li,
    a {
      list-style: none;
      display: flex;
      align-items: center;
    }
    svg {
      margin-right: 8px;
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 6rem;
      width: 85%;
      max-width: 80rem;
      margin: auto;
      ${({ isanimation }) =>
        isanimation &&
        css`
          margin: auto;
          background-color: var(--light);
          padding: 0 1rem;
          border-radius: 20px;
        `}
      ${Media.Nav} {
        width: 90%;
        margin: auto;
        background-color: var(--light);
        padding: 0 1rem;
        border-radius: 20px;
      }

      .menu {
        display: none;
        ${Media.Nav} {
          display: block;
          width: 3em;
          height: 3em;
          color: var(--black);
          opacity: 1;
          transition: all 0.5s linear 0.1s;
          ${({ isVisible }) =>
            isVisible &&
            css`
              opacity: 0;
              transition: all 0.5s linear 0.1s;
            `}

          ${({ isanimation }) =>
            isanimation &&
            css`
              color: #000;
            `}
        }
      }
      .closeMenu {
        position: absolute;
        opacity: 0;
        z-index: -1;
        right: 5%;
        transition: all 0.1s linear;

        ${Media.Nav} {
          ${({ isVisible }) =>
            isVisible &&
            css`
              z-index: 0;
              opacity: 1;
            `}
        }
      }
      .menuSide {
        ${Media.Nav} {
          width: 100%;
          height: 100vh;
          margin-left: 100%;
          padding: 0 45px 36px 0px;
          position: absolute;
          top: -36px;
          bottom: 34px;
          z-index: -2;
          align-items: flex-end;
          flex-direction: column;
          backdrop-filter: blur(25px);
          background: rgb(0 0 0 / 40%);

          ${({ isVisible }) =>
            isVisible &&
            css`
              transition: margin-left 0.8s cubic-bezier(0.65, 0.05, 0.36, 1);
              opacity: 1;
              margin-left: 1px;
              left: -42px;
            `}
        }
        gap: 2rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .Options {
          color: var(--black, #2f3947);
          font-family: Lato;
          font-size: 22px;
          font-weight: 400;
          position: relative;

          ${({ isanimation }) =>
            isanimation &&
            css`
              &:after {
                content: "";
                position: absolute;
                width: 100%;
                height: 0.5rem;
                top: 1.2rem;
                left: 0;
                z-index: -1;
                ${Media.Nav} {
                  display: none;
                }
              }
            `}
          &:hover {
            transition: all 0.2s linear;
            color: var(--blue);
          }

          ${Media.Nav} {
            font-size: 2rem;
            font-weight: bold;
            color: var(--light);
          }
        }
      }
    }
  }
`;

export const Cover = styled.header`
  width: 100%;
  min-height: 60rem;
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

    ${Media.Nav} {
        background-position: right;
    }

    .texts{
        max-width: 2160px;
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        text-align: center;

        ${Media.PhoneLarge} {
            width: 98%;
        }

        h2{
            font-size: 1.5rem;
            font-weight: 500;
        }

        h1{
            font-size: 3.5rem;

            ${Media.Nav} {
                font-size: 2rem;
            }
        }

        button{
            color: var(--white);
            padding: 1rem 2rem;
            border: 1px solid black;
            border-radius: 10px;
            cursor: pointer;
            text-transform: uppercase;
            transition: all 0.2s linear;
        }
    }
`;

export const Ortoce = styled.header`
  width: 100%;
  min-height: 40rem;
  position: relative;
  background-color: #F1F8F9;
  max-width: 2160px;
  margin: auto;

    ${Media.Nav} {
        background-position: right;
        height: auto;
    }

    .Orto{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;  
        
        ${Media.Nav} {
          margin-top: 100px;
          height: auto;
        }
    }   
    
    .containerOrto{
        position: relative;
        width: 98%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        
        ${Media.Nav} {
          flex-direction: column;
        }
    }

    .textsOrto{
        position: relative;
        width: 38%;
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        ${Media.Nav} {
            width: 98%;
        }

        h2{
            font-size: 1.5rem;
            font-weight: 500;
            display: flex;
            align-items: center;

            div{
                width: 40px;
                height: 2px;
                margin-right: 5px;
                background-color: black;
            }
        }

        h1{
            font-size: 3.5rem;
            color: var(--blue);
            
            ${Media.Nav} {
                font-size: 2rem;
            }
        }

        button{
            color: var(--white);
            padding: 1rem 2rem;
            border: 1px solid black;
            border-radius: 10px;
            cursor: pointer;
            text-transform: uppercase;
            transition: all 0.2s linear;
        }
    }

    .containerImgOrto{
        max-width: 700px;
        width: 100%;
    }
`;

export const Benefits = styled.header`
  width: 100%;
  min-height: 30rem;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

  .Ben{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;  
    max-width: 2160px;
    margin: auto;
  }   
    
  .containerBen{
      position: relative;
      width: 98%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      ${Media.Nav} {
        flex-direction: column;
        justify-content: center;
        gap: 5rem;
      }
  }

  .textsBen{
      position: relative;
      text-align: left;

      ${Media.Nav} {
          width: 98%;
          text-align: center;
      }

      h1{
          font-size: 3.5rem;
          color: var(--blue);
          
          ${Media.Nav} {
              font-size: 2.5rem;
          }
      }
  }

  .containerImgBen{      
      display: flex;
      flex-direction: column;
      justify-content: center;

      .IconChecked{
        color: var(--blue);
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }

      p{  
        display: flex;    
        align-items: center;
        margin-top: 20px;
      }

      ${Media.Nav} {
          width: 98%;
          align-items: center;
      }
    }
`;

export const Who = styled.header`
  width: 100%;
  height: auto;
  min-height: 50rem;
  position: relative;
  background-color: #F1F8F9; 
  margin: auto;
  max-width: 2160px;

    ${Media.NavLarge}{
          background-position: right;
          height: auto;
    }

    .Who{
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;  

      ${Media.NavLarge} {
        margin-top: 100px;
        height: auto;
      }
    }   
    
    .containerWho{
      position: relative;
      width: 98%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;   

      ${Media.NavLarge} {
        flex-direction: column;
      }
    }

    .textsWho{
      position: relative;
      width: 38%;
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      ${Media.NavLarge} {
          width: 98%;
      }

      h2{
          font-size: 1.5rem;
          font-weight: 500;
          display: flex;
          align-items: center;

          div{
              width: 40px;
              height: 2px;
              margin-right: 5px;
              background-color: black;
          }
      }

      h1{
          font-size: 3.5rem;
          color: var(--blue);
          
          ${Media.Nav} {
              font-size: 2rem;
          }
      }

      button{
          max-width: 300px;
          background-color: var(--blue);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          text-transform: uppercase;
          transition: all 0.2s linear;
        }
    }

    .containerImgWho{
      max-width: 600px;
      width: 98%;

      ${Media.NavLarge} {
        margin: 50px 0px;
      }
    }
`;

export const Indication = styled.header`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 50rem;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #F1F8F9; 
  max-width: 2160px;
  margin: auto;

    ${Media.Nav}{
      background-position: right;
      height: auto;
    }
    
    .containerIndi{
      position: relative;
      width: 98%;
      max-width: 1500px;
      display: flex;
      flex-direction: column;
      justify-content: center;   
      text-align: center;
      margin: 40px auto auto auto;

      h1{
          font-size: 3.5rem;
          color: var(--blue);
          
          ${Media.Nav} {
              font-size: 2rem;
          }
      }
    }

    .backgroundBlue{
      width: 100%;
      height: 15rem;
      margin-top: 100px;
      background-color: var(--blue);       
      
      ${Media.Nav}{
        margin-top: 40px;
        height: auto;
        padding-bottom: 40px;
      }

      .containerIllness{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        max-width: 1600px;
        margin: auto;
        gap: 30px;

        ${Media.Nav}{
          flex-direction: column;
        }

        .iten-illness{
          width: 95%;
          max-width: 300px;
          height: 350px;
          margin-top: 80px;
          background-color: #FFFFFF;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.2);

          div{
            background-color: #A6CBED;
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;

            svg{
              width: 50px;
              height: 50px;
            }
          }

          h1{
            font-size: 1.5rem;
            margin: 20px auto;
          }

          p{
            font-size: 1rem;
          }
        }
      }
    }
`;

export const Contact = styled.header`
  width: 100%;
  height: auto;
  min-height: 20rem;
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 2160px;
  margin: auto;

  .ContactB{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;  
  }   
    
  .containerContactB{
    position: relative;
    width: 80%;
    height: auto;
    min-height: 400px;
    background-color: var(--blue);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    text-align: center;

    ${Media.Nav}{
        width: 98%;
        padding-top: 30px;
        padding-bottom: 30px;
      }

    h1{
      color: white;
    }

    p{
      width: 70%;
      color: white;
    }

    div{
      width: 80%;
      max-width: 800px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      ${Media.Nav}{
        flex-direction: column;
      }

      button{
        max-width: 350px;
        background-color: white;
        color: var(--blue);
        padding: 1rem 2rem;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        text-transform: uppercase;
        transition: all 0.2s linear;
        box-shadow: 3px 3px 15px rgba(0,0,0,0.4);

        ${Media.Nav}{
          margin-bottom: 30px;
        }
      }

      p{
        max-width: 350px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg{
          margin-right: 10px;
        }	
      }
    }
  }
`;

export const Testimony = styled.header`
  position: relative;
  width: 95%;
  height: auto;
  min-height: 40rem;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #F1F8F9; 
  max-width: 2160px;
  margin: auto;

    ${Media.Nav}{
      background-position: right;
      height: auto;
    }
    
    .containerDep{
      position: relative;
      width: 98%;
      max-width: 1500px;
      display: flex;
      flex-direction: column;
      justify-content: center;   
      text-align: center;
      margin: 40px auto auto auto;

      .line{
        width: 50px;
        height: 5px;
        background-color: black;
        margin: 10px auto 0px auto;
      }

      h1{
          font-size: 3.5rem;
          color: var(--blue);
          
          ${Media.Nav} {
              font-size: 2rem;
          }
      }
    }
`;

export const Map = styled.header`
  width: 100%;
  height: auto;
  min-height: 20rem;
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 2160px;
  margin: auto;

  .Map{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;  
  }   
    
  .containerTextMap{
    position: relative;
    width: 80%;
    height: auto;
    padding-top: 50px;
    padding-bottom: 50px;
    min-height: 500px;
    background-color: var(--blue);
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;    
    
    ${Media.Nav}{
      width: 98%;
      flex-direction: column;
      padding-top: 30px;
      padding-bottom: 30px;
    }

    .textMap{
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: left;
      gap: 2rem;

      ${Media.Nav}{
        width: 95%;
        margin-bottom: 20px;
      }

      h1{
        width: 70%;
        color: white;
        
        ${Media.Nav}{width: 98%;}
      }

      p{
        width: 70%;
        color: white;
        
        ${Media.Nav}{width: 98%;}
      }
    }

    .containerMap{
      width: 50%;

      ${Media.Nav}{width: 100%;}

      iframe{
        width: 90%;
        height: 400px;
        border-radius: 20px;

        ${Media.Nav}{width: 95%;}
      }	
    }
  }

  .containerImgMap{
    display: flex;
    justify-content: center;
    position: relative;
    height: auto; 
  }

  img{
    width: 95%;
    max-width: 900px;
    margin: auto;
    margin-top: -70px;
    z-index: 9;

    ${Media.PhoneLarge}{
      margin-top: 0px;
    }
  }
`;