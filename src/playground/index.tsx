import React from 'react';
import ReactDOM from 'react-dom';
import { GlitchAnimation } from '../GlitchAnimation';
ReactDOM.render(
  <GlitchAnimation isActive={true} animationDurationMS={5000} text="Glitch effect"/>,
  document.getElementById('root'),
);
