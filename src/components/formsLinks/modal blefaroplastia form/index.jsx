// ModalInstagram.jsx
import React, { useRef, useState } from "react";
import * as Styled from "./style.js";

const API_URL =
  import.meta.env.VITE_API_URL?.trim() ||
  "https://doutorbomcusto.com.br/api/rd/deals.php";

const CF = {
  ORIGEM: "68dc1f7f886205001f4c4985",
  REGIAO: "68dc32f52c5582001490baa4",
  CONSENT: "68dc1f6c37514f0014e914f1",
  PHONE_DEAL: "68dd7ab3d296e0001e45cf79",
  AD_NAME: "68dc19fb4b9091001a64242f",
  AD_SET_NAME: "68dc1a0eb587d3002172c7e0",
  AD_CAMPAIGN_NAME: "68dc1a27d8fc7700144d1cac",
};

const PIPELINE_ID = "68c463020ac0d0001d3ff177";
const STAGE_ID = "68c463020ac0d0001d3ff179";

const ORIGEM_BIO = "Link na Bio";

const formatTelefone = (value) => {
  let cleaned = (value || "").replace(/\D/g, "");
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

export default function Modal(props) {
  const { display = true, onClose, modalId = "insta-bio" } = props;
  const modalRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [redirectMessage, setRedirectMessage] = useState("");
  const [telefone, setTelefone] = useState("");
  const [consentimento, setConsentimento] = useState(false);

  const handleCloseModal = () => onClose && onClose();

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

    // Nome validado (sem pattern no input para aceitar acentos/hífen/apóstrofo)
    const nomeValidado = validaNome((formData.get("Nome") || "").toString());
    if (!nomeValidado) {
      alert(
        "Por favor, digite um nome válido (apenas letras, espaços, hífen e apóstrofo)."
      );
      setIsSubmitting(false);
      setShowSubmitButton(true);
      setRedirectMessage("");
      event.target.querySelector('input[name="Nome"]')?.focus();
      return;
    }

    const regiao = (formData.get("Regiao") || "").toString();
    if (!regiao) {
      alert("Selecione a região do procedimento.");
      setIsSubmitting(false);
      setShowSubmitButton(true);
      setRedirectMessage("");
      return;
    }

    const onlyDigits = (telefone || "").replace(/\D/g, "");
    if (onlyDigits.length < 10) {
      alert("Digite um telefone válido.");
      setIsSubmitting(false);
      setShowSubmitButton(true);
      setRedirectMessage("");
      return;
    }

    // UTMs
    const params = new URLSearchParams(window.location.search);
    const utm_content = params.get("utm_content") || "";
    const utm_term = params.get("utm_term") || "";
    const utm_campaign = params.get("utm_campaign") || "";

    // Campos personalizados (labels devem existir no RD exatamente como enviados)
    const cfAttrs = [
      { custom_field_id: CF.ORIGEM, value: ORIGEM_BIO },
      { custom_field_id: CF.REGIAO, value: regiao },
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

    const payload = {
      deal: {
        name: nomeValidado,
        deal_pipeline_id: PIPELINE_ID,
        deal_stage_id: STAGE_ID,
        contact: {
          name: nomeValidado,
          personal_phone: onlyDigits, // teu deals.php espera esse campo
        },
        deal_custom_fields_attributes: cfAttrs,
      },
    };

    // Debug opcional
    console.log(
      "Payload RD (Bio Instagram) ->",
      JSON.stringify(payload, null, 2)
    );

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const raw = await response.text();
        console.error("Erro RD:", raw);
        alert("Erro ao enviar os dados. Tente novamente em instantes.");
        setIsSubmitting(false);
        setShowSubmitButton(true);
        setRedirectMessage("");
        return;
      }

      // Redireciona para WhatsApp
      window.location.href =
        "https://api.whatsapp.com/send?phone=5511945852272&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Eu%20vim%20pelo%20Instagram%20e%20gostaria%20de%20dar%20procedimento%20a%20minha%20cirurgia%20de%20blefaroplastia!";
      handleCloseModal();
    } catch (error) {
      console.error("Falha de conexão com RD:", error);
      alert("Falha de conexão. Verifique sua internet e tente novamente.");
      setShowSubmitButton(true);
    } finally {
      setIsSubmitting(false);
    }
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
            backgroundColor: "rgba(0, 0, 0, 0.4)", // overlay mais leve/escuro
            color: "#fff",
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

      <button className="close-btn" onClick={handleCloseModal} type="button">
        ✕
      </button>

      <form
        ref={modalRef}
        onSubmit={handleSubmit}
        className={`col formulario conversionForm-${modalId}`}
      >
        <h3>
          Preencha o formulário <br />e fale com um consultor pelo Whatsapp!
        </h3>

        <input
          type="text"
          name="Nome"
          required
          placeholder="Nome completo"
          autoComplete="name"
          inputMode="text"
        />

        <input
          type="tel"
          name="Telefone"
          required
          placeholder="Telefone"
          value={telefone}
          onChange={handleTelefoneChange}
          maxLength={16}
          autoComplete="tel"
          inputMode="tel"
        />

        <div className="boxSection">
          <p>Em qual região você tem interesse em realizar o procedimento?</p>
          <select name="Regiao" required defaultValue="">
            <option value="">Selecione uma opção</option>
            <option value="Superior">Superior</option>
            <option value="Inferior">Inferior</option>
            <option value="Completo">Completo</option>
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
            Aceito receber contato via WhatsApp.
          </label>
        </div>

        {showSubmitButton && (
          <input
            className="Button"
            type="submit"
            value={isSubmitting ? "Enviando..." : "Fale com um consultor"}
            disabled={isSubmitting || !consentimento}
          />
        )}
      </form>
    </Styled.Container>
  );
}
