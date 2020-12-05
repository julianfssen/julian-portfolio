import React, { useState } from 'react';
import { IconContext } from "react-icons";

function IconContainer(props) {
	const [hovered, setHover] = useState(false);

	return (
    <div
			onMouseOver={() => setHover(!hovered)}
			onMouseOut={() => setHover(!hovered)}
		>
			<IconContext.Provider value={{ color: hovered ? 'red' : '', size: 28 }}>
			  {props.children}
			</IconContext.Provider>
		</div>
	)
}

export default IconContainer;
