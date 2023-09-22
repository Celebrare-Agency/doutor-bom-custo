import styled, { css } from "styled-components/";
const Media = {
  Nav: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};
export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 99;
  width: 100%;
  top: 1rem;
  .header {
    position: absolute;
    width: 100%;
    z-index: 1;
    .logoSide {
      ${({ isanimation }) => isanimation && css``}
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
          min-height: 100vh;
          margin-left: 100%;
          padding: 0 45px 36px 0px;

          position: absolute;
          top: -36px;
          bottom: 34px;
          z-index: -2;

          align-items: flex-end;
          justify-content: flex-end;
          flex-direction: column;
          gap: 50px;

          backdrop-filter: blur(5px);
          ${({ isVisible }) =>
            isVisible &&
            css`
              transition: margin-left 0.8s cubic-bezier(0.65, 0.05, 0.36, 1);
              opacity: 1;
              margin-left: 1px;
              left: -42px;
            `}
        }
        width: auto;
        gap: 2rem;
        display: flex;
        justify-content: space-evenly;
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
                background-color: var(--greenThin);
                left: 0;
                z-index: -1;
                ${Media.PhoneLarge} {
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
            font-weight: 400;
            &:hover {
              font-weight: 700;
            }
          }
          ${Media.PhoneLarge} {
            font-size: 1rem;
          }
        }
        .color {
          &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 0.5rem;
            top: 1.2rem;
            background-color: var(--greenThin);
            left: 0;
            z-index: -1;
            ${Media.PhoneLarge} {
              display: none;
            }
          }
          font-weight: 400;
          ${({ isanimation }) => isanimation && css``}
        }
      }
    }
  }
`;
