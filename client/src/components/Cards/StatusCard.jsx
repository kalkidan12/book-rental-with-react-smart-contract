import React from "react";
import card from "../../assets/images/credit.png";
const StatusCard = ({ cardName, number, iconImg, cardBg }) => {
	return (
		<div
			className={`flex gap-3 justify-between p-5 items-center align-center w-[200px] shadow rounded-lg ${cardBg}`}
		>
			<div className="flex flex-col gap-1">
				<p className="font-bold text-sm">{cardName}</p>
				<p className="font-bold text-xl">{number}</p>
			</div>
			<div className="">
				<img src={iconImg} alt="" width={"50px"} />
			</div>
		</div>
	);
};

export default StatusCard;
