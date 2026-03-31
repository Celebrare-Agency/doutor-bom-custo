import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(28px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Media = {
  mobile: "@media(max-width: 600px)",
  small: "@media(max-width: 380px)",
};

/* ─── Page ─────────────────────────────────────────────────────── */
export const Container = styled.main`
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  box-sizing: border-box;
  background: linear-gradient(145deg, #eef1ff 0%, #f8faff 52%, #edfbf4 100%);
  font-family: "Inter", system-ui, -apple-system, sans-serif;

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

/* ─── Card ──────────────────────────────────────────────────────── */
export const Card = styled.div`
  width: 100%;
  max-width: 560px;
  background: #ffffff;
  border-radius: 24px;
  box-shadow:
    0 0 0 1px rgba(72, 90, 255, 0.07),
    0 4px 8px -2px rgba(72, 90, 255, 0.06),
    0 24px 48px -8px rgba(72, 90, 255, 0.12);
  overflow: hidden;

  ${Media.mobile} {
    border-radius: 20px;
  }
`;

/* ─── Progress bar ──────────────────────────────────────────────── */
export const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: #eef0ff;

  .bar {
    height: 100%;
    background: linear-gradient(90deg, #485aff 0%, #6ad9ab 100%);
    border-radius: 0 3px 3px 0;
    transition: width 0.55s cubic-bezier(0.4, 0, 0.2, 1);
    min-width: 4px;
  }
`;

/* ─── Step ──────────────────────────────────────────────────────── */
export const Step = styled.div`
  padding: 40px 48px 48px;
  animation: ${slideIn} 0.3s ease-out both;

  ${Media.mobile} {
    padding: 28px 24px 36px;
  }

  ${Media.small} {
    padding: 24px 18px 32px;
  }

  /* Badge "2 / 5" */
  .step-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: #eef0ff;
    color: #485aff;
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 99px;
    margin-bottom: 18px;
    user-select: none;
  }

  h3 {
    color: #0a1425;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 6px;
    text-transform: none;
    white-space: normal;

    ${Media.mobile} {
      font-size: 1.35rem;
    }
  }

  .subtitle {
    font-size: 0.93rem;
    color: #64748b;
    line-height: 1.55;
    margin-bottom: 4px;
  }

  /* ── Option buttons ──────────────────────────────────────────── */
  .options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 24px;
  }

  .options--row {
    flex-direction: row;
    gap: 12px;

    .option-btn {
      flex: 1;
      justify-content: center;
      text-align: center;
      padding: 18px 12px;

      .arrow {
        display: none;
      }
    }
  }

  .option-btn {
    width: 100%;
    padding: 15px 18px 15px 20px;
    background: #ffffff;
    border: 1.5px solid #e2e8f0;
    border-radius: 12px;
    color: #0a1425;
    font-size: 0.975rem;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    transition:
      border-color 180ms ease,
      background 180ms ease,
      color 180ms ease,
      transform 120ms ease,
      box-shadow 180ms ease;
    line-height: 1.35;

    .arrow {
      flex-shrink: 0;
      color: #cbd5e1;
      transition:
        color 180ms ease,
        transform 180ms ease;
    }

    &:hover {
      border-color: #485aff;
      background: #f4f6ff;
      color: #485aff;
      box-shadow: 0 2px 8px rgba(72, 90, 255, 0.1);

      .arrow {
        color: #485aff;
        transform: translateX(3px);
      }
    }

    &:active {
      transform: scale(0.99);
      background: #eef0ff;
    }

    ${Media.mobile} {
      font-size: 0.93rem;
      padding: 14px 16px 14px 16px;
    }
  }

  /* ── Select ──────────────────────────────────────────────────── */
  .select-wrapper {
    margin-top: 20px;

    select {
      width: 100%;
      padding: 14px 44px 14px 16px;
      background-color: #f8faff;
      border: 1.5px solid #e2e8f0;
      border-radius: 12px;
      color: #0a1425;
      font-size: 0.97rem;
      font-weight: 500;
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23485aff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 14px center;
      background-size: 18px;
      box-sizing: border-box;
      transition:
        border-color 180ms ease,
        box-shadow 180ms ease;
      font-family: inherit;

      option {
        background: #ffffff;
        color: #0a1425;
      }

      &:focus {
        outline: none;
        border-color: #485aff;
        box-shadow: 0 0 0 3px rgba(72, 90, 255, 0.12);
      }
    }
  }

  /* ── Price badge ────────────────────────────────────────────── */
  .price-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #edfbf4;
    border: 1px solid #c0f0da;
    color: #0f7a56;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 10px;
    padding: 8px 14px;
    margin: 10px 0 20px;
    line-height: 1.4;

    strong {
      font-weight: 700;
      color: #0a6146;
    }
  }

  /* ── Contact form ───────────────────────────────────────────── */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .field {
      display: flex;
      flex-direction: column;
      gap: 6px;

      label {
        font-size: 0.82rem;
        font-weight: 600;
        color: #374151;
        letter-spacing: 0.03em;
        text-transform: uppercase;
      }

      input[type="text"],
      input[type="tel"] {
        width: 100%;
        padding: 13px 16px;
        background: #f8faff;
        border: 1.5px solid #e2e8f0;
        border-radius: 12px;
        color: #0a1425;
        font-size: 0.97rem;
        font-weight: 500;
        font-family: inherit;
        box-sizing: border-box;
        transition:
          border-color 180ms ease,
          box-shadow 180ms ease,
          background 180ms ease;

        &::placeholder {
          color: #aab4c4;
          font-weight: 400;
        }

        &:focus {
          outline: none;
          border-color: #485aff;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(72, 90, 255, 0.12);
        }
      }
    }

    .checkbox-field {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      cursor: pointer;
      padding: 4px 0;

      input[type="checkbox"] {
        width: 18px;
        height: 18px;
        min-width: 18px;
        accent-color: #485aff;
        cursor: pointer;
        margin-top: 2px;
        padding: 0;
        border: none;
      }

      span {
        font-size: 0.875rem;
        color: #64748b;
        line-height: 1.5;
      }
    }

    .submit-btn {
      margin-top: 4px;
      width: 100%;
      padding: 16px;
      background: #6ad9ab;
      border: none;
      border-radius: 12px;
      color: #0a1425;
      font-size: 1rem;
      font-weight: 800;
      font-family: inherit;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      cursor: pointer;
      transition:
        background 200ms ease,
        transform 120ms ease,
        box-shadow 200ms ease;

      &:hover:not(:disabled) {
        background: #4dd49a;
        box-shadow: 0 6px 20px rgba(106, 217, 171, 0.4);
        transform: translateY(-1px);
      }

      &:active:not(:disabled) {
        transform: scale(0.99) translateY(0);
      }

      &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }
    }
  }
`;

/* ─── Disqualified screen ───────────────────────────────────────── */
export const Disqualified = styled.div`
  padding: 56px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeUp} 0.4s ease-out both;

  ${Media.mobile} {
    padding: 40px 24px;
  }

  .icon-wrap {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #eef0ff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    svg {
      width: 28px;
      height: 28px;
      color: #485aff;
    }
  }

  h3 {
    color: #0a1425;
    font-size: 1.45rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    margin-bottom: 12px;
    line-height: 1.25;
    text-transform: none;

    ${Media.mobile} {
      font-size: 1.2rem;
    }
  }

  p {
    color: #64748b;
    font-size: 0.97rem;
    line-height: 1.65;
    max-width: 340px;

    strong {
      color: #485aff;
      font-weight: 600;
    }
  }
`;
