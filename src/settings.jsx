import React, { useState } from 'react';

const Settings = () => {
  const [isHoveredPersonal, setHoveredPersonal] = useState(false);
  const [isHoveredPayment, setHoveredPayment] = useState(false);
  const [isHoveredMedia, setHoveredMedia] = useState(false);
  const [isHoveredSubscription, setHoveredSubscription] = useState(false);

  const styles = {
    setting_text_color: {
      textDecoration: 'none',
      transition: 'color 0.3s ease', // Smooth transition effect
    },
  };

  return (
    <div>
      <h1>Settings</h1>

      <h3>
        <a
          href=''
          style={{
            ...styles.setting_text_color,
            color: isHoveredPersonal ? 'gold' : 'white',
          }}
          onMouseEnter={() => setHoveredPersonal(true)}
          onMouseLeave={() => setHoveredPersonal(false)}
        >
          Personal Settings
        </a>
        <br />
        <a
          href=''
          style={{
            ...styles.setting_text_color,
            color: isHoveredPayment ? 'gold' : 'white',
          }}
          onMouseEnter={() => setHoveredPayment(true)}
          onMouseLeave={() => setHoveredPayment(false)}
        >
          Payment Settings
        </a>
        <br />
        <a
          href=''
          style={{
            ...styles.setting_text_color,
            color: isHoveredMedia ? 'gold' : 'white',
          }}
          onMouseEnter={() => setHoveredMedia(true)}
          onMouseLeave={() => setHoveredMedia(false)}
        >
          My Media
        </a>
        <br />
        <a
          href=''
          style={{
            ...styles.setting_text_color,
            color: isHoveredSubscription ? 'gold' : 'white',
          }}
          onMouseEnter={() => setHoveredSubscription(true)}
          onMouseLeave={() => setHoveredSubscription(false)}
        >
          FALLEN Subscription
        </a>
      </h3>
    </div>
  );
};

export default Settings;
