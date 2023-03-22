import React from "react";
import Button from "../Buttons/Button";
const BookCard = ({ title, image, description }) => {
	return (
		<div className="flex text-center flex-col items-center justify-center shadow rounded-lg p-2 gap-3">
			<div className="flex justify-center items-center align-center book-card-image w-full">
				<img className="w-full object-fill h-48" src={image} alt="" />
			</div>
			<div className="book-card-body text-slate-800">{description}</div>
			<div className="flex justify-center items-center gap-3">
				<Button
					btnBgColor={"bg-red-300"}
					btnName={"Check Out"}
					btnOnClick={console.log("check Out clicked")}
				/>
				<Button
					btnBgColor={"bg-blue-300"}
					btnName={"Check In"}
					btnOnClick={console.log("check In clicked")}
				/>
			</div>
		</div>
	);
};

export default BookCard;
