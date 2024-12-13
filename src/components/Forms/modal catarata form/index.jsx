import React, { useEffect } from "react";
import * as Styled from "./style.js";

export default function Modal(props) {
  useEffect(() => {
    const container = document.getElementById("amoforms-container");

    if (container) {
      // Adiciona o iframe dinamicamente
      const iframe = document.createElement("iframe");
      iframe.id = "amoforms_iframe_1420331";
      iframe.src =
        "https://forms.kommo.com/forms/html/form_1420331_6ce6abeb0c66dc1b21d062204a39593a.html?date=1734110759";
      iframe.style.width = "90%"; // Proporção responsiva
      iframe.style.maxWidth = "600px"; // Limita a largura máxima no desktop
      iframe.style.height = "60%"; // Proporção responsiva
      iframe.style.maxHeight = "700px"; // Limita a altura máxima no desktop
      iframe.style.position = "fixed"; // Posicionamento fixo
      iframe.style.top = "50%"; // Centraliza verticalmente
      iframe.style.left = "50%"; // Centraliza horizontalmente
      iframe.style.transform = "translate(-50%, -50%)"; // Centralização real
      iframe.style.opacity = "1";
      iframe.style.zIndex = "9999";
      iframe.style.border = "none"; // Remove bordas
      container.appendChild(iframe);
    }

    // Cleanup ao desmontar o componente
    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <Styled.Container>
      {/* Div onde o iframe será renderizado */}
      <div id="amoforms-container" style={{ width: "100%", height: "100%" }} />
    </Styled.Container>
  );
}
