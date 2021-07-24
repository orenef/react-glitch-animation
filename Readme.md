# react-glitch-animation

![npm](https://img.shields.io/npm/dt/react-glitch-animation) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-glitch-animation) ![NPM](https://img.shields.io/npm/l/react-glitch-animation)

A React component that add a glitch animation to any text.

[See demo at codesandbox](https://codesandbox.io/s/react-glitch-animation-gyt6h)
## Installation

Use the package manager [npm](https://www.npmjs.com/package/react-glitch-animation) to install .

```bash
npm install react-glitch-animation
```

## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { GlitchAnimation } from 'react-glitch-animation';
ReactDOM.render(
  <GlitchAnimation isActive={true} animationDurationMS={5000} text="Glitch effect"/>,
  document.getElementById('root'),
);
```

props| default value| info
--- | --- | ---
isActive | true | Is animation active
animationDurationMS | 0 | Animation Duration in MS, 0 = infinite
text | "Glitch Animation Effect" | Text to apply the animation on it

### Custom Style
You can overwrite those css varible:

var| default value
--- | --- |
--react-glitch-font-size | 72px
--react-glitch-font-size| 72px
--react-glitch-font-family| fantasy
--react-glitch-text-color| white
--react-glitch-text-background-color| #101518
 --react-glitch-text-glitch-color-1| #49fc00
--react-glitch-text-glitch-color-2| #b300fc


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
