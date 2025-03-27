import React from "react";

const GoogleMapsEmbed = () => {
  return (
    <div className="container-iframe-maps-streetview">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!4v1742912785792!6m8!1m7!1sI0AltQt8H7dIlGhKknzdpQ!2m2!1d-23.54538742177889!2d-46.64386244243753!3f119.07215397170077!4f13.269810675867333!5f0.40002812804633453"
        width="500" 
        height="400" 
        style={{ border: 0 }}
        allowfullscreen="" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
};

export default GoogleMapsEmbed;
