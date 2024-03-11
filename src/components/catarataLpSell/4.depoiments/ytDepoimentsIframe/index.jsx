import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};
const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 500px;
  box-shadow: 10px 10px 35px -10px rgba(48, 48, 48, 0.6);
  margin: 2rem;
  border-radius: 20px;
  overflow: hidden;
  ${Media.PhoneLarge} {
    max-width: 300px;
    height: 500px;
  }

  .video-container {
    position: relative;
    overflow: hidden;
    max-width: 100%;
    width: 100%;
    max-width: 500px;
    height: 500px;
  }

  iframe {
  }

  .video-responsive {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  svg {
    filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
    transition: all 250ms ease-in-out;
  }

  svg:hover {
    filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
  }
`;

const YoutubeEmbed = ({ embedId, title }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <Container>
      <div className="video-container">
        {showVideo ? (
          <iframe
            title={title}
            className="video-responsive"
            height=""
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${embedId}/hqdefault.jpg`}
              alt={title}
              className="video-responsive"
            />
            <svg
              onClick={handlePlayClick}
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-play-circle play-button"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
          </>
        )}
      </div>
    </Container>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
