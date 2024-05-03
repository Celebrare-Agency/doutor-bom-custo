import * as Styled from "./style.js";

export default function Obrigado() {
  return (
    <Styled.Container>
      <h1>Obrigado!</h1>
      <p>Seu formulário foi enviado com sucesso.</p>
      <p>
        Você pode entrar em contato pelo WhatsApp para finalizar sua inscrição.
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1,%20Gostaria%20de%20dar%20procedimento%20a%20minha%20cirurgia%20de%20catarata!"
        rel="noreferrer"
      >
        <button>Entrar em contato pelo WhatsApp</button>
      </a>
    </Styled.Container>
  );
}
