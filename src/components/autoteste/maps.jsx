import React from 'react';

const MapEmbed = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6381517146956!2d-46.64350999999999!3d-23.5455136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584dc0373909%3A0xd99672d1469c6d5f!2sCondom%C3%ADnio%20Edif%C3%ADcio%20It%C3%A1lia%20-%20Rep%C3%BAblica%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001046-001!5e0!3m2!1spt-BR!2sbr!4v1726503142434!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
