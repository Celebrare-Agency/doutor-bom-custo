import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};
export const Container = styled.section`
  max-width: 90rem;
  min-height: 35rem;
  margin: auto;
  width: 90%;
  height: auto;
  margin-top: 10rem;
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
 
  .mainContent{
    text-align:left;
    align-items:flex-start;
    gap:1rem;

  }
  h1,h2,h3{
    font-family: Inter;
    color: var(--black);
    text-transform:uppercase;
  }

  h4{
        font-family: Inter;
    color: var(--black);
  }
  p{
    color: var(--black);
    font-family: Inter;
  }
 
  .fullImg{
    width:100%;
    border-radius:10px;
  }
  ul {
    align-items: flex-start !important;
    justify-content: flex-start;
    gap:0.5rem;
    ${Media.PhoneLarge}{
      gap:1rem;
    }
    li{
          text-align: left;
    font-family: Inter;
    font-weight: regular;
        color: var(--black);

    }
  }
.final{
  margin:auto;
  margin-top:2rem;
  gap:1rem;
}
    .Button {
      border: none;
      background-color: var(--blue);
      padding: 1rem !important;
      font-size: 1rem !important;
      color: var(--light);
      text-align: center;
      font-family: Inter;
      font-weight: 800;
      text-transform: uppercase;
      border-radius: 10.94px !important;
    }
`;
