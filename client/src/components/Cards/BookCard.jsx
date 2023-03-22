import React from "react";
import bookImg1 from "../../assets/images/bokk4.jpg";
import Button from "../Buttons/Button";
const BookCard = () => {
	return (
		<div className="flex text-center flex-col items-center justify-center shadow rounded-lg w-[200px] sm:w-[250px] md:w-[300px] p-2 gap-3">
			<div className="flex justify-center items-center align-center book-card-image w-full">
				<img className="w-full object-fill h-48" src={bookImg1} alt="" />
			</div>
			<div className="book-card-body">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
				repudiandae tenetur rem assumenda eos quasi consequuntur culpa, ipsam
				quaerat magni ab mollitia error nobis fugit quisquam aperiam odit unde
				blanditiis.
			</div>
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
