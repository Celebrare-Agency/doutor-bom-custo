import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "./style.js";

const API_URL =
  import.meta.env.VITE_API_URL?.trim() ||
  "https://doutorbomcusto.com.br/api/rd/deals.php";

const CF = {
  ORIGEM: "69249a829d87530025467939",
  PHONE_DEAL: "69249a382bb091001773571c",
  CONSENT: "69249e2cbbf34e001c485033",
  DIAGNOSTICO: "693b007b592d81001426c603",
};

const PIPELINE_ID = "6915daf0a539620016989271";
const STAGE_ID = "6915daf0a539620016989273";
const ORIGEM_BIO = "Bio do Instagram";

const formatTelefone = (value) => {
  let cleaned = value.replace(/\D/g, "");
  if (cleaned.length > 11) cleaned = cleaned.slice(0, 11);

  if (cleaned.length <= 2) {
    return `(${cleaned}`;
  } else if (cleaned.length <= 7) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  } else if (cleaned.length <= 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
      7
    )}`;
  }
  return value;
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

  const handleCloseModal = () => {
    onClose();
  };

  const handleTelefoneChange = (e) => {
    setTelefone(formatTelefone(e.target.value));
  };

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

    const diagnostico = formData.get("Diagnostico") || "Não informado";

    const cfAttrs = [
      { custom_field_id: CF.ORIGEM, value: ORIGEM_BIO },
      { custom_field_id: CF.PHONE_DEAL, value: onlyDigits },
      { custom_field_id: CF.CONSENT, value: consentimento ? "Sim" : "Não" },
      { custom_field_id: CF.DIAGNOSTICO, value: diagnostico },
    ];

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

    const whatsappLink =
      "https://api.whatsapp.com/send?phone=5511919372954&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Eu%20vim%20pelo%20Instagram%20e%20gostaria%20de%20dar%20procedimento%20a%20minha%20cirurgia%20de%20catarata!";
    window.location.href = whatsappLink;

    handleCloseModal();
    setIsSubmitting(false);
  };

  return (
    <Styled.Container
      style={{
        display: display ? "flex" : "none",
      }}
    >
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
          Preencha o formulário <br />e fale com um consultor pelo Whatsapp!
        </h3>
        <input
          type="text"
          name="Nome"
          required
          placeholder="Nome completo"
          autoComplete="name"
          className="Nome"
          data-input-id={`nome-${modalId}`}
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
          <p>Você já tem o diagnóstico de catarata?</p>
          <select name="Diagnostico" required>
            <option value="">Selecione uma opção</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
            <option value="Não sei">Não sei</option>
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
