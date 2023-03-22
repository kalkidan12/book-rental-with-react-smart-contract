import React from "react";

const Header = () => {
	return (
		<nav className="fixed top-0 left-0 w-full flex bg-slate-100 justify-between shadow h-[50px] px-5 py-2">
			<h1 className="text-2xl font-bold text-slate-800">Book Rental</h1>
			<div className="flex gap-5">
				<button className="btn bg-blue-300 rounded-md px-4">Sign In</button>
			</div>
		</nav>
	);
};

export default Header;
