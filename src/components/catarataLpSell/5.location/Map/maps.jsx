import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};
const Container = styled.div`
  box-shadow: 10px 10px 35px -10px rgba(48, 48, 48, 0.6);
  border-radius: 20px;
  overflow: hidden;
  width: 85%;
  max-width: 80rem;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 700px;
  ${Media.PhoneLarge} {
    height: 400px;
  }
  iframe {
    width: 100%;
    height: 400px;
  }
`;

const Map = () => {
  return (
    <Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.63828910646!2d-46.646084923914614!3d-23.545508661011468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584dc0373909%3A0xd99672d1469c6d5f!2sCondom%C3%ADnio%20Edif%C3%ADcio%20It%C3%A1lia%20-%20Rep%C3%BAblica%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001046-001!5e0!3m2!1spt-BR!2sbr!4v1715346226206!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: "0" }}
        title="Mapa edificio italia"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

export default Map;
