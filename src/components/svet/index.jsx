import React, { useState } from 'react';
import "./style.css";

function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>Свет {isOn ? 'включен' : 'выключен'}</p>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Выключить' : 'Включить'}
      </button>
    </div>
  );
}

export default LightSwitch;