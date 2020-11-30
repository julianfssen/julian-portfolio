import React, { useState } from 'react';

function IconContainer(props) {
	const [hovered, setHover] = useState(false);

	return (
    <div
	    className='inline' 
	    color={hovered ? 'red' : null} 
	  	size={28} 
	    onMouseOver={() => setHover(!hovered)} 
	    onMouseOut={() => setHover(!hovered)}
	  >
			{props.children}
		</div>
	)
}

export default IconContainer;
