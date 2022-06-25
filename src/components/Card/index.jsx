import React from 'react';
import './card.scss'

const Card = ({title, description, level, ...props}) => {
	return (
		<article className='card' {...props}>
			<header>
				<h3>{title}</h3>
				{level && <p>{level}</p>}
			</header>

			<p>{description}</p>
		</article>
	);
};

export default Card;