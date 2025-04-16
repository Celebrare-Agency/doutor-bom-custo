import React from "react";

const GoogleMapsEmbed = () => {
  return (
    <div className="container-iframe-maps-streetview">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!4v1742913057178!6m8!1m7!1s-hKGEDtRf7FOo3YVMKxrPg!2m2!1d-23.54515069811945!2d-46.64354757041954!3f189.25528379096835!4f22.76947742835101!5f0.4000000000000002" 
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
