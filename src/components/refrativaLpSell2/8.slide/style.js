import styled from "styled-components";

const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  OtherTablet: "@media(max-width:700px)",
  PhoneLarge: "@media(max-width:600px)",
};

export const Container = styled.div`
  width: 90%;
  max-width: 80rem;
  margin: auto;
  margin-top: 1rem;
  .swiper {
    min-height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;

    ${Media.Tablet} {
      align-items: center;
      justify-content: center;
      width: 90%;
      min-height: 45rem;
    }
    ${Media.PhoneLarge} {
      width: 100%;
      min-height: 50rem;
    }
  }
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    display: none;
  }

  .containerTitle {
    position: relative;
    margin-bottom: 1rem;
    ${Media.PhoneLarge} {
      margin-bottom: 0;
    }
    h3 {
      font-family: "inter";
      font-style: normal;
      font-weight: bold;
      display: flex;
      align-items: center;
      color: var(--black);
    }

    hr {
      width: 10%;
      height: 4px;
      background: var(--blue);
    }
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13rem;
    flex-direction: row;

    ${Media.Tablet} {
      flex-direction: column;
      gap: 1rem;
    }
    ${Media.PhoneLarge} {
      align-items: flex-start;

      justify-content: flex-start;
    }

    .imgSlide {
      width: 30rem;
      height: 30rem;
      display: block;
      margin: auto;
      ${Media.Tablet} {
        flex-direction: column-reverse;
        gap: 1rem;
        align-items: center;
        justify-content: center;
      }
      ${Media.PhoneLarge} {
        align-items: flex-start;
        justify-content: flex-start;
        margin: inherit;
        width: 20rem;
        height: 20rem;
      }
    }

    .text {
      gap: 2rem;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      max-width: 50%;
      ${Media.Tablet} {
        max-width: 100%;
        align-items: center;
        text-align: center;
        margin: auto;
      }

      ${Media.PhoneLarge} {
        align-items: flex-start;
        text-align: left;
        gap: 1rem;
      }
      h1 {
        font-family: "inter";
        font-style: normal;
        font-weight: 700;
        line-height: 41px;
        color: var(--blue);
      }

      p {
        font-family: "Inter";
        font-style: normal;
        display: inline;
        font-weight: 400;
        align-items: center;
        color: var(--black);

        ${Media.PhoneLarge} {
        }
      }
    }
  }
  .swiper-button-next,
  .swiper-button-prev,
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 0;
    left: -2rem;
    padding: 2rem;
    color: var(--blue);
    width: 3rem;
    height: 3rem;
    position: relative;
    margin-right: 80%;
    ${Media.Tablet} {
      margin-right: inherit;
    }
    ${Media.PhoneLarge} {
      margin-top: -4rem;
    }
  }
  .swiper-button-next {
    left: 1rem;
  }
  .swiper-button-prev {
    margin-top: -7rem;
    ${Media.Tablet} {
      margin-top: -7rem;
    }
  }
`;
