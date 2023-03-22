import React from "react";

const Button = ({ btnBgColor, btnName, btnOnClick }) => {
	return (
		<button
			onClick={btnOnClick}
			className={`btn ${btnBgColor} rounded-md py-2 px-4`}
		>
			{btnName}
		</button>
	);
};

export default Button;
