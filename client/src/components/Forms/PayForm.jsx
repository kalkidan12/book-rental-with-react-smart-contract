import React from "react";
import Button from "../Buttons/Button";

const PayForm = ({ placeholder, onSubmit, formTitle }) => {
	return (
		<form
			onSubmit={onSubmit}
			className="flex gap-3 flex-col justify-center items-center align-center shadow rounded-lg p-3"
		>
			<p className="text-lg font-bold text-slate-800">{formTitle}</p>
			<input
				className="p-1 text-slate-800 shadow border border-2 border-blue-200 rounded-md focus:outline-none focus:shadow-outline"
				type="number"
				placeholder={placeholder}
			/>
			<Button
				btnOnClick={console.log("pay button clicked")}
				btnBgColor={"bg-blue-300"}
				btnName={"Submit"}
			/>
		</form>
	);
};

export default PayForm;
