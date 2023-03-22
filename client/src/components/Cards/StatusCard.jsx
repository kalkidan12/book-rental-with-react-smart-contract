import React from "react";
const StatusCard = ({ cardName, number, iconImg, cardBg }) => {
	return (
		<div
			className={`flex gap-3 justify-between p-5 items-center align-center h-[90px] shadow rounded-lg ${cardBg}`}
		>
			<div className="flex flex-col gap-1">
				<p className="font-bold text-slate-800 text-sm">{cardName}</p>
				<p className="font-bold text-slate-800 text-xl">{number}</p>
			</div>
			<div className="">
				<img src={iconImg} alt="" width={"50px"} />
			</div>
		</div>
	);
};

export default StatusCard;
