import React, { useMemo, useRef, useState } from "react";
import * as Styled from "./style.js";

const API_URL =
  import.meta.env.VITE_API_URL?.trim() ||
  "https://doutorbomcusto.com.br/api/rd/deals.php";

const formatTelefone = (value) => {
  let cleaned = value.replace(/\D/g, "");
  if (cleaned.length > 11) cleaned = cleaned.slice(0, 11);
  if (cleaned.length <= 2) return `(${cleaned}`;
  if (cleaned.length <= 7) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
};

const validaNome = (s) => {
  if (!s) return false;
  const normalized = s.normalize("NFC").replace(/\s+/g, " ").trim();
  const ok = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,}$/.test(normalized);
  return ok ? normalized : false;
};

const CF = {
  ORIGEM: "68dc1f7f886205001f4c4985",
  REGIAO: "68dc32f52c5582001490baa4",
  CONSENT: "68dc1f6c37514f0014e914f1",
  AD_NAME: "68dc19fb4b9091001a64242f",
  AD_SET_NAME: "68dc1a0eb587d3002172c7e0",
  AD_CAMPAIGN_NAME: "68dc1a27d8fc7700144d1cac",
  PHONE_DEAL: "68dd7ab3d296e0001e45cf79" 
};

export default function FormRD({
  display = true,
  onClose,
  modalId = "rd",
  pipelineId = "68c463020ac0d0001d3ff177",
  stageId = "68c463020ac0d0001d3ff179",
  defaultOrigem = "Meta",
  buildRedirectUrl = () =>
    "https://api.whatsapp.com/send?phone=5511945852272&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20informa%C3%A7%C3%B5es!",
  extraFields = {},
  useUTMs = true
}) {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirectMessage, setRedirectMessage] = useState("");
  const [telefone, setTelefone] = useState("");
  const [consentimento, setConsentimento] = useState(false);

  const handleCloseForm = () => onClose && onClose();

  const utms = useMemo(() => {
    if (!useUTMs) return {};
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || ""
    };
  }, [useUTMs]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!consentimento) {
      alert("Você precisa aceitar o consentimento para prosseguir.");
      return;
    }

    setIsSubmitting(true);
    setRedirectMessage("Enviando seus dados...");

    const formData = new FormData(event.target);

    const nomeBruto = (formData.get("Nome") || "").toString();
    const nomeValidado = validaNome(nomeBruto);
    if (!nomeValidado) {
      alert("Por favor, digite um nome válido (apenas letras, espaços, hífen e apóstrofo).");
      setIsSubmitting(false);
      setRedirectMessage("");
      return;
    }

    const regiao = (formData.get("Regiao") || "Não informado").toString();
    const onlyDigits = telefone.replace(/\D/g, "");
    if (onlyDigits.length < 10) {
      alert("Digite um telefone válido.");
      setIsSubmitting(false);
      setRedirectMessage("");
      return;
    }

    const cfAttrs = [
      { custom_field_id: CF.ORIGEM,  value: defaultOrigem },
      { custom_field_id: CF.REGIAO,  value: regiao },
      { custom_field_id: CF.CONSENT, value: consentimento ? "Sim" : "Não" }
    ];

    if (useUTMs) {
      const adName = utms.utm_content || "Teste Name";
      const adSet  = utms.utm_term || "Teste Set Name";
      const adCamp = utms.utm_campaign || "Teste Campanha";
      if (adName) cfAttrs.push({ custom_field_id: CF.AD_NAME, value: adName });
      if (adSet)  cfAttrs.push({ custom_field_id: CF.AD_SET_NAME, value: adSet });
      if (adCamp) cfAttrs.push({ custom_field_id: CF.AD_CAMPAIGN_NAME, value: adCamp });
    }

    for (const [cfId, val] of Object.entries(extraFields || {})) {
      if (val !== undefined && val !== null && `${val}`.trim() !== "") {
        cfAttrs.push({ custom_field_id: cfId, value: `${val}` });
      }
    }

    if (onlyDigits) {
      cfAttrs.push({ custom_field_id: CF.PHONE_DEAL, value: `${onlyDigits}` });
    }
    
  const payload = {
    deal: {
      name: nomeValidado || "Lead do Site",
      deal_pipeline_id: pipelineId,
      deal_stage_id: stageId,
      contact: {
        name: nomeValidado || "Lead do Site",
        phones: onlyDigits ? [{ phone: onlyDigits, type: "mobile" }] : []
      },
      deal_custom_fields_attributes: cfAttrs
    }
  };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const raw = await response.text();
      let result = null;
      try { result = raw ? JSON.parse(raw) : null; } catch { result = null; }
      console.log("Resposta RD (via Hostinger):", result || raw);

      if (!response.ok) {
        console.error("Erro na API:", result || raw);
        alert("Erro ao enviar os dados. Tente novamente em instantes.");
        setIsSubmitting(false);
        setRedirectMessage("");
        return;
      }

      const redirectTo = buildRedirectUrl(result);
      if (redirectTo) window.location.href = redirectTo;
      handleCloseForm();
    } catch (err) {
      console.error("Falha de conexão:", err);
      alert("Falha de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setIsSubmitting(false);
      setRedirectMessage("");
    }
  };

  return (
    <Styled.Container style={{ display: display ? "flex" : "none" }}>
      {/* {redirectMessage && <div className="loading">{redirectMessage}</div>} */}

      <form ref={formRef} onSubmit={handleSubmit} className={`col formulario conversionForm-${modalId}`}>
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
          placeholder="DDD + Telefone"
          value={telefone}
          onChange={(e) => setTelefone(formatTelefone(e.target.value))}
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

        <input
          className="Button"
          type="submit"
          value={isSubmitting ? "Carregando..." : "Fale com um consultor"}
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        />
      </form>

      <a onClick={handleCloseForm}>X</a>
    </Styled.Container>
  );
}
