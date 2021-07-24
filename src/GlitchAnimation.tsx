import React from 'react';
import './style.css';

interface Props {
	text?: string;
	animationDurationMS?: number;
	isActive?: boolean;
}

export const GlitchAnimation: React.FC<Props> = ({
	text = 'Glitch Animation Effect',
	animationDurationMS = 0,
	isActive = true
}) => {
	const [active, setActive] = React.useState(isActive)
	React.useEffect(() => {
		if (animationDurationMS) {
			setTimeout(() => {
				setActive(false);
			}, animationDurationMS);
		}
	},[]);
  return (
	<div className="react-glitch-wrapper">
		<div className={active ? 'rect-glitch-text' : 'rect-glitch-text-clear-animation'} data-text={text}>
			{text}
		</div>
	</div>
	)
}
