import React, { useRef, useState } from "react";
import * as Styled from "./style.js";
import Logo from "../../../assets/logoExtendWhite.svg";

const API_URL =
  import.meta.env.VITE_API_URL?.trim() ||
  "https://doutorbomcusto.com.br/api/rd/lifting.php";

const CF = {
  ORIGEM: "69b867706d817900133cc28e",
  CONSENT: "69b870cd83dbc700169e1345",
  PHONE_DEAL: "69b8691dd768e700188aeda4",
  EMAIL: "69b871edd768e700138af3ea",
};

const PIPELINE_ID = "69b85281052e6a001b8ecd9c";
const STAGE_ID = "69b85281052e6a001b8ecd9e";

const formatTelefone = (value) => {
  let cleaned = value.replace(/\D/g, "");
  if (cleaned.length > 11) cleaned = cleaned.slice(0, 11);
  if (cleaned.length <= 2) return `(${cleaned}`;
  if (cleaned.length <= 7)
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
};

const validaNome = (s) => {
  if (!s) return false;
  const normalized = s.normalize("NFC").replace(/\s+/g, " ").trim();
  const ok = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,}$/.test(normalized);
  return ok ? normalized : false;
};

export default function Modal({ onClose }) {
  const modalRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirectMessage, setRedirectMessage] = useState("");
  const [telefone, setTelefone] = useState("");
  const [consentimento, setConsentimento] = useState(false);

  const handleTelefoneChange = (e) =>
    setTelefone(formatTelefone(e.target.value));

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!consentimento) {
      alert("Você precisa aceitar o consentimento.");
      return;
    }

    setIsSubmitting(true);
    setRedirectMessage("Enviando dados...");

    const formData = new FormData(event.target);

    const nomeValidado = validaNome(formData.get("Nome"));
    if (!nomeValidado) {
      alert("Nome inválido.");
      setIsSubmitting(false);
      setRedirectMessage("");
      return;
    }

    const email = (formData.get("Email") || "").toString().trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
      alert("E-mail inválido.");
      setIsSubmitting(false);
      setRedirectMessage("");
      return;
    }

    const onlyDigits = telefone.replace(/\D/g, "");

    const payload = {
      deal: {
        name: nomeValidado,
        deal_pipeline_id: PIPELINE_ID,
        deal_stage_id: STAGE_ID,
        contact: {
          name: nomeValidado,
          emails: [{ email: email }],
          phones: [
            {
              phone: onlyDigits,
              type: "mobile",
            },
          ],
        },
        deal_custom_fields_attributes: [
          { custom_field_id: CF.ORIGEM, value: "Google " },
          { custom_field_id: CF.CONSENT, value: "Sim" },
          { custom_field_id: CF.PHONE_DEAL, value: onlyDigits },
          { custom_field_id: CF.EMAIL, value: email },
        ],
      },
    };

    console.log("PAYLOAD:", payload);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const raw = await response.text();

      console.log("STATUS:", response.status);
      console.log("RESPONSE:", raw);

      if (!response.ok) {
        throw new Error("Erro no servidor");
      }

      // ✅ SÓ REDIRECIONA SE DER CERTO
      setRedirectMessage("Redirecionando...");

      setTimeout(() => {
        window.location.href =
          "https://api.whatsapp.com/send?phone=5511945852272&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20mais%20informações%20sobre%20Lifting%20Facial!";
        onClose();
      }, 1000);
    } catch (error) {
      console.error("ERRO REAL:", error);

      alert("Falha na conexão com o servidor.");

      setRedirectMessage("");
      setIsSubmitting(false);

      return; // 🚨 impede qualquer continuação
    }
  };

  return (
    <Styled.Container>
      {redirectMessage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            zIndex: 1000,
          }}
        >
          {redirectMessage}
        </div>
      )}

      <form ref={modalRef} onSubmit={handleSubmit}>
        <img src={Logo} />
        <h3>Preencha e fale com um consultor</h3>

        <input type="text" name="Nome" placeholder="Nome completo" required />

        <input type="email" name="Email" placeholder="Seu e-mail" required />

        <input
          type="tel"
          name="Telefone"
          placeholder="Telefone"
          value={telefone}
          onChange={handleTelefoneChange}
          required
        />

        <div className="boxConsentimento">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={consentimento}
              onChange={(e) => setConsentimento(e.target.checked)}
              required
            />
            <span>Aceito contato via WhatsApp</span>
          </label>
        </div>

        <button type="submit" disabled={isSubmitting}>
          Enviar
        </button>
      </form>
    </Styled.Container>
  );
}
