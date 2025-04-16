import React, { useState } from "react";
import YouTube from "react-youtube";
import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:610px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:450px)",
};
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 */
  border-radius: 20px;
  overflow: hidden;
`;

const IframeWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* Alvo direto do iframe gerado pelo YouTube */
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
`;

const CenteredButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--gold);
  color: white;
  width: 50%;
  height: 30%;
  border-radius: 0;
  padding: 20px 30px;
  border: none;
  font-family: "Sora";
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
  transition: background 0.3s ease;
  border-radius: 20px;
  ${Media.Tablet} {
    font-size: 0.8rem;
    width: 90%;
    height: 40%;
  }
  &:hover {
    background: var(--gold-strong);
  }
`;

const YoutubeEmbed = ({ embedId }) => {
  const [player, setPlayer] = useState(null);
  const [muted, setMuted] = useState(true);

  const onReady = (event) => {
    event.target.mute();
    event.target.playVideo();
    setPlayer(event.target);
  };

  const handleUnmute = () => {
    if (player) {
      player.unMute();
      setMuted(false);
    }
  };

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <Wrapper>
      <IframeWrapper>
        <YouTube videoId={embedId} opts={opts} onReady={onReady} />
        {muted && (
          <CenteredButton onClick={handleUnmute}>
            Clique e Ative o Som
          </CenteredButton>
        )}
      </IframeWrapper>
    </Wrapper>
  );
};

export default YoutubeEmbed;
