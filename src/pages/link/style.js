import styled from "styled-components";
import bgPc from "../../assets/Links/backgroundPc.png";
import bgMob from "../../assets/Links/backgroundMob.png";
const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};
export const Container = styled.main`
  background: var(--light);
  background-image: url(${bgPc});

  ${Media.PhoneLarge} {
    background-image: url(${bgMob});
  }
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: white;
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
  .imgBackground {
    position: absolute;
    right: 0;
    top: 0;
    width: 30vw;
    height: 30vw;
    &:last-child {
      right: inherit;
      top: inherit;
      left: 0;
      bottom: 0;
    }
  }

  section {
    width: 25rem;
    margin: auto;
    min-height: 90vh;
    gap: 1rem;
  }
  .iconRedes {
    gap: 1rem;
    .icon {
      width: 3rem;
      height: 3rem;
      background-color: var(--blue);
      border-radius: 50%;
      padding: 0.5rem;
      ${Media.PhoneLarge} {
        width: 2rem;
        height: 2rem;
      }
    }
  }
  .introductionContainer {
    text-align: center;
    gap: 1rem;
    img {
      width: 14rem;

      ${Media.PhoneLarge} {
        width: 7rem;
      }
    }
    h1 {
      color: var(--black);
      font-size: 1.5rem;
      font-family: Inter;
    }
  }

  ol {
    gap: 0.3rem;
  }

  .linksContainer {
    width: 100%;
    gap: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .link {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 25rem;
      height: 6rem;
      gap: 0.3rem;
      border-radius: 5.787px;
      padding: 0.5rem;
      background: var(--blue);
      flex-shrink: 0;
      cursor: pointer;
      ${Media.PhoneLarge} {
        width: 18rem;
      }
      h3 {
        color: #fff;
        text-align: center;
        font-size: 1.266rem;
        font-family: Inter;
        font-weight: 500;
      }

      p {
        color: #fff;
        text-align: center;
        font-size: 1.266rem;
        font-family: Inter;
        opacity: 0.5;

        ${Media.PhoneLarge} {
          font-size: 1rem;
        }
      }
    }

    .behance:hover {
      background-color: #053eff;
    }
    .linkedin:hover {
      background-color: #0e76a8;
    }
    .github:hover {
      background-color: #171515;
    }
  }
`;
