import styled from "styled-components";

const breakpoints = {
  phoneSmall: "@media(max-width:320px)",
  phoneLarge: "@media(max-width:600px)",
  tablet: "@media(max-width:1000px)",
  laptop: "@media(max-width:1150px)",
};

export const Container = styled.section`
  width: 100%;
  padding: 80px 0;
  background: linear-gradient(180deg, #eff1ff 0%, #f8faff 50%, #e6f0ff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 279px;

  .content-wrapper {
    width: 90%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .header-text {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    h2 {
      font-size: 1.6rem;
      font-weight: 700;
      color: #000;
      line-height: 1.3;

      span {
        color: #485aff;
        font-style: italic;
      }

      ${breakpoints.phoneLarge} {
        font-size: 1.3rem;
        text-align: left;
      }
    }

    .sub-text {
      font-size: 1.05rem;
      color: #333;
      line-height: 1.5;
    }

    .sub-text-small {
      font-size: 1.05rem;
      color: #333;
      line-height: 1.5;
    }

    p {
      ${breakpoints.phoneLarge} {
        text-align: left;
      }
    }

    h3 {
      font-size: 2rem;
      color: #546bf3;
      font-weight: 800;
      text-transform: uppercase;
      line-height: 1.2;
      margin-top: 10px;

      i {
        font-style: italic;
      }

      ${breakpoints.phoneLarge} {
        font-size: 1.5rem;
        text-align: left;
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

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;

    ${breakpoints.tablet} {
      grid-template-columns: 1fr;
    }

    img {
      width: 100%;
      height: 450px;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);

      ${breakpoints.tablet} {
        height: 300px;
      }
    }
  }
`;
