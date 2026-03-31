import React, { useState } from "react";
import * as Styled from "./style.js";

const API_URL =
  import.meta.env.VITE_API_URL?.trim() ||
  "https://doutorbomcusto.com.br/api/rd/deals.php";

const CF = {
  ORIGEM: "69164e73e30fbc00222c0e44",
  GRAU: "69164f4cadb4e40016d344c4",
  PHONE_DEAL: "69164e19c421730015dc0e75",
  IDADE: "69b1aaf091b1f80015be12cc",
  CONSENT: "6916522ee174aa001d444d9a",
  AD_NAME: "691653f263b60400136f7ff0",
  AD_SET_NAME: "69165415adb4e40013d34772",
  AD_CAMPAIGN_NAME: "6916544a420b5e0017ebdb95",
};

const PIPELINE_ID = "6915e85d53adfa0016001cf6";
const STAGE_ID = "6915e85d53adfa0016001cf8";

const REGIOES_SP = [
  "Centro / Próximo ao centro",
  "Zona Sul",
  "Zona Norte",
  "Zona Leste",
  "Zona Oeste",
  "Grande São Paulo / ABC",
  "Outra cidade",
];

const TOTAL_STEPS = 5;

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

const Arrow = () => (
  <svg className="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function TypeformRefrativa() {
  const [step, setStep] = useState(0);
  const [disqualifiedReason, setDisqualifiedReason] = useState("");
  const [answers, setAnswers] = useState({
    idade: "",
    oculos: "",
    localizacao: "",
    grau: "",
  });

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [consentimento, setConsentimento] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const numericStep = typeof step === "number" ? step : 0;
  const progress = ((numericStep + 1) / TOTAL_STEPS) * 100;

  const disqualify = (reason) => {
    setDisqualifiedReason(reason);
    setStep("disqualified");
  };

  const handleIdade = (value) => {
    setAnswers((prev) => ({ ...prev, idade: value }));
    if (value === "Entre 18 e 21 anos") {
      disqualify("idade");
    } else {
      setStep(1);
    }
  };

  const handleOculos = (value) => {
    setAnswers((prev) => ({ ...prev, oculos: value }));
    if (value === "Não") {
      disqualify("oculos");
    } else {
      setStep(2);
    }
  };

  const handleLocalizacao = (value) => {
    setAnswers((prev) => ({ ...prev, localizacao: value }));
    setStep(3);
  };

  const handleGrau = (value) => {
    setAnswers((prev) => ({ ...prev, grau: value }));
    setStep(4);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!consentimento) {
      alert("Você precisa aceitar o consentimento para prosseguir.");
      return;
    }

    const nomeValido = validaNome(nome);
    if (!nomeValido) {
      alert("Digite um nome válido.");
      return;
    }

    const onlyDigits = telefone.replace(/\D/g, "");
    if (onlyDigits.length < 10) {
      alert("Digite um telefone válido com DDD.");
      return;
    }

    setIsSubmitting(true);

    const params = new URLSearchParams(window.location.search);
    const utm_content = params.get("utm_content") || "";
    const utm_term = params.get("utm_term") || "";
    const utm_campaign = params.get("utm_campaign") || "";

    const cfAttrs = [
      { custom_field_id: CF.ORIGEM, value: "Google" },
      { custom_field_id: CF.GRAU, value: answers.grau },
      { custom_field_id: CF.PHONE_DEAL, value: onlyDigits },
      { custom_field_id: CF.IDADE, value: answers.idade },
      { custom_field_id: CF.CONSENT, value: "Sim" },
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
        name: nomeValido,
        deal_pipeline_id: PIPELINE_ID,
        deal_stage_id: STAGE_ID,
        contact: {
          name: nomeValido,
          phones: [{ phone: onlyDigits, type: "mobile" }],
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

    window.location.href =
      "https://api.whatsapp.com/send?phone=5511945972641&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Eu%20vim%20pelo%20site%20e%20gostaria%20de%20dar%20procedimento%20a%20minha%20cirurgia%20refrativa!";
  };

  if (step === "disqualified") {
    return (
      <Styled.Container>
        <Styled.Card>
          <Styled.Disqualified>
            <div className="icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3>Obrigado pelo seu interesse!</h3>
            {disqualifiedReason === "idade" ? (
              <p>
                A cirurgia refrativa é indicada para pacientes com{" "}
                <strong>22 anos ou mais</strong>, quando a visão já está
                estabilizada. Quando chegar a hora, estaremos aqui para te
                ajudar!
              </p>
            ) : (
              <p>
                A cirurgia refrativa é indicada para quem usa{" "}
                <strong>óculos ou lentes de contato</strong>. Se sua situação
                mudar, será um prazer te atender!
              </p>
            )}
          </Styled.Disqualified>
        </Styled.Card>
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      <Styled.Card>
        <Styled.ProgressBar>
          <div className="bar" style={{ width: `${progress}%` }} />
        </Styled.ProgressBar>

        {step === 0 && (
          <Styled.Step>
            <span className="step-badge">Passo 1 de {TOTAL_STEPS}</span>
            <h3>Qual a sua idade?</h3>
            <div className="options">
              {[
                "Entre 18 e 21 anos",
                "Entre 22 e 30 anos",
                "Entre 31 e 35 anos",
                "Acima de 35 anos",
              ].map((opt) => (
                <button key={opt} className="option-btn" onClick={() => handleIdade(opt)} type="button">
                  <span>{opt}</span>
                  <Arrow />
                </button>
              ))}
            </div>
          </Styled.Step>
        )}

        {step === 1 && (
          <Styled.Step>
            <span className="step-badge">Passo 2 de {TOTAL_STEPS}</span>
            <h3>Você usa óculos ou lentes de contato?</h3>
            <p className="subtitle">
              Usar óculos é um dos requisitos para a cirurgia refrativa.
            </p>
            <div className="options options--row">
              {["Sim", "Não"].map((opt) => (
                <button key={opt} className="option-btn" onClick={() => handleOculos(opt)} type="button">
                  {opt}
                </button>
              ))}
            </div>
          </Styled.Step>
        )}

        {step === 2 && (
          <Styled.Step>
            <span className="step-badge">Passo 3 de {TOTAL_STEPS}</span>
            <h3>Qual a sua região em São Paulo?</h3>
            <p className="subtitle">Nossa clínica fica no centro de SP.</p>
            <div className="options">
              {REGIOES_SP.map((opt) => (
                <button key={opt} className="option-btn" onClick={() => handleLocalizacao(opt)} type="button">
                  <span>{opt}</span>
                  <Arrow />
                </button>
              ))}
            </div>
          </Styled.Step>
        )}

        {step === 3 && (
          <Styled.Step>
            <span className="step-badge">Passo 4 de {TOTAL_STEPS}</span>
            <h3>Qual o seu grau aproximadamente?</h3>
            <div className="options">
              {[
                "Até 3 graus",
                "Até 5 graus",
                "Acima de 10 graus",
                "Não sei ao certo",
              ].map((opt) => (
                <button key={opt} className="option-btn" onClick={() => handleGrau(opt)} type="button">
                  <span>{opt}</span>
                  <Arrow />
                </button>
              ))}
            </div>
          </Styled.Step>
        )}

        {step === 4 && (
          <Styled.Step>
            <span className="step-badge">Passo 5 de {TOTAL_STEPS}</span>
            <h3>Quase lá! Preencha seus dados</h3>
            <div className="price-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Cirurgia refrativa a partir de{" "}
              <strong>R$ 1.290 por olho</strong>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="field">
                <label htmlFor="nome">Nome completo</label>
                <input
                  id="nome"
                  type="text"
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  autoComplete="name"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="telefone">Telefone com DDD</label>
                <input
                  id="telefone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={telefone}
                  onChange={(e) => setTelefone(formatTelefone(e.target.value))}
                  maxLength={16}
                  required
                />
              </div>
              <label className="checkbox-field">
                <input
                  type="checkbox"
                  checked={consentimento}
                  onChange={(e) => setConsentimento(e.target.checked)}
                  required
                />
                <span>Aceito receber contato via WhatsApp</span>
              </label>
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting || !consentimento}
              >
                {isSubmitting ? "Enviando..." : "Falar com um consultor →"}
              </button>
            </form>
          </Styled.Step>
        )}
      </Styled.Card>
    </Styled.Container>
  );
}
