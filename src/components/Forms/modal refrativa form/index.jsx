import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "./style.js";

const API_URL =
  import.meta.env.VITE_API_URL?.trim() ||
  "https://doutorbomcusto.com.br/api/rd/deals.php";

const CF = {
  ORIGEM: "69164e73e30fbc00222c0e44",
  GRAU: "69164f4cadb4e40016d344c4",
  CONSENT: "6916522ee174aa001d444d9a",
  PHONE_DEAL: "69164e19c421730015dc0e75",
  AD_NAME: "691653f263b60400136f7ff0",
  AD_SET_NAME: "69165415adb4e40013d34772",
  AD_CAMPAIGN_NAME: "6916544a420b5e0017ebdb95",
};

const PIPELINE_ID = "6915e85d53adfa0016001cf6";
const STAGE_ID = "6915e85d53adfa0016001cf8";

/* ---------------- PIPEFY ---------------- */

const PIPEFY_URL = "https://api.pipefy.com/graphql";
const PIPE_ID = 305678356;

const PIPEFY_TOKEN = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaXBlZnkiLCJpYXQiOjE3MjUzODg0NzUsImp0aSI6Ijc0YTYyYTJiLTg4NzEtNDZiNy05MmRiLTdmNWMxMDUxYmE5OCIsInN1YiI6MzAzMjEzNDM3LCJ1c2VyIjp7ImlkIjozMDMyMTM0MzcsImVtYWlsIjoidGlhZ29hbG1laWRhc2FudG9zMDRAZ21haWwuY29tIn19.jJdEiAbINcjf0YmaNJMumP-B5iUaaff_EA8XgESCP-WSFEyyJmGgseOG_victBzPPlcO2vKv9o9O9JNn1mPNng`;

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
  const ok = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{3,}$/.test(normalized);
  return ok ? normalized : false;
};

export default function Modal(props) {
  const { display, onClose, modalId } = props;

  const modalRef = useRef(null);
  const location = useLocation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [redirectMessage, setRedirectMessage] = useState("");
  const [telefone, setTelefone] = useState("");
  const [consentimento, setConsentimento] = useState(false);

  const handleCloseModal = () => onClose();

  const handleTelefoneChange = (e) =>
    setTelefone(formatTelefone(e.target.value));

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!consentimento) {
      alert("Você precisa aceitar o consentimento para prosseguir.");
      return;
    }

    setIsSubmitting(true);
    setShowSubmitButton(false);
    setRedirectMessage("Redirecionando você para o contato...");

    const formData = new FormData(event.target);

    const nome = validaNome((formData.get("Nome") || "").toString());
    if (!nome) {
      alert("Digite um nome válido.");
      setIsSubmitting(false);
      setShowSubmitButton(true);
      setRedirectMessage("");
      return;
    }

    const onlyDigits = telefone.replace(/\D/g, "");
    if (onlyDigits.length < 10) {
      alert("Digite um telefone válido.");
      setIsSubmitting(false);
      setShowSubmitButton(true);
      setRedirectMessage("");
      return;
    }

    const grau = formData.get("Grau") || "Não informado";

    const params = new URLSearchParams(window.location.search);

    const utm_content = params.get("utm_content") || "";
    const utm_term = params.get("utm_term") || "";
    const utm_campaign = params.get("utm_campaign") || "";

    const cfAttrs = [
      { custom_field_id: CF.ORIGEM, value: "Google" },
      { custom_field_id: CF.GRAU, value: grau },
      { custom_field_id: CF.CONSENT, value: consentimento ? "Sim" : "Não" },
      { custom_field_id: CF.PHONE_DEAL, value: onlyDigits },
    ];

    if (utm_content)
      cfAttrs.push({ custom_field_id: CF.AD_NAME, value: utm_content });
    if (utm_term)
      cfAttrs.push({ custom_field_id: CF.AD_SET_NAME, value: utm_term });
    if (utm_campaign)
      cfAttrs.push({
        custom_field_id: CF.AD_CAMPAIGN_NAME,
        value: utm_campaign,
      });

    const rdPayload = {
      deal: {
        name: nome,
        deal_pipeline_id: PIPELINE_ID,
        deal_stage_id: STAGE_ID,
        contact: {
          name: nome,
          phones: [{ phone: onlyDigits }],
        },
        deal_custom_fields_attributes: cfAttrs,
      },
    };

    try {
      const rdRes = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rdPayload),
      });

      if (!rdRes.ok) {
        const raw = await rdRes.text();
        console.error("Erro RD:", raw);
      }
    } catch (err) {
      console.error("Falha RD:", err);
    }

    const pipePayload = {
      query: `
        mutation CreateCard($pipe_id: ID!, $fields: [FieldValueInput!]!) {
          createCard(input: {
            pipe_id: $pipe_id,
            fields_attributes: $fields
          }) {
            card { id }
          }
        }
      `,
      variables: {
        pipe_id: PIPE_ID,
        fields: [
          { field_id: "nome", field_value: nome },
          { field_id: "telefone", field_value: telefone },
          {
            field_id: "qual_o_grau_aproximado",
            field_value: grau,
          },
          { field_id: "origem", field_value: "Google" },
        ],
      },
    };

    try {
      const pipeRes = await fetch(PIPEFY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: PIPEFY_TOKEN,
        },
        body: JSON.stringify(pipePayload),
      });

      const pipeJson = await pipeRes.json();

      if (pipeJson.errors) {
        console.error("Erro Pipefy:", pipeJson.errors);
      }
    } catch (err) {
      console.error("Falha Pipefy:", err);
    }

    window.location.href =
      "https://api.whatsapp.com/send?phone=5511945972641&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Eu%20vim%20pelo%20site%20e%20gostaria%20de%20dar%20procedimento%20a%20minha%20cirurgia%20refrativa!";

    handleCloseModal();
  };

  return (
    <Styled.Container style={{ display: display ? "flex" : "none" }}>
      {redirectMessage && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {redirectMessage}
        </div>
      )}

      <form
        ref={modalRef}
        onSubmit={handleSubmit}
        className={`col formulario conversionForm-${modalId}`}
      >
        <h3>
          Preencha o formulário <br />e fale com um consultor pelo Whatsapp
        </h3>

        <input
          type="text"
          name="Nome"
          required
          placeholder="Nome completo"
          autoComplete="name"
          className="Nome"
        />

        <input
          type="tel"
          name="Telefone"
          required
          placeholder="Telefone"
          value={telefone}
          onChange={handleTelefoneChange}
          maxLength={16}
          className="Telefone"
        />

        <div className="boxSection">
          <p>Qual o seu grau aproximadamente</p>

          <select name="Grau" required defaultValue="">
            <option value="">Selecione uma opção</option>
            <option value="Até 3 graus">Até 3 graus</option>
            <option value="Até 5 graus">Até 5 graus</option>
            <option value="Acima de 10 graus">Acima de 10 graus</option>
          </select>
        </div>

        <div className="boxConsentimento">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={consentimento}
              onChange={(e) => setConsentimento(e.target.checked)}
              required
            />
            Aceito receber contato via WhatsApp
          </label>
        </div>

        {showSubmitButton && (
          <input
            className="Button"
            type="submit"
            value="Fale com um consultor"
            disabled={isSubmitting || !consentimento}
          />
        )}
      </form>

      <button onClick={handleCloseModal}>X</button>
    </Styled.Container>
  );
}
