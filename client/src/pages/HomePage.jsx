import React from "react";
import BookCard from "../components/Cards/BookCard";
import StatusCard from "../components/Cards/StatusCard";
import PayForm from "../components/Forms/PayForm";
import Header from "../components/Header/Header";
import card from "../assets/images/credit.png";
import timer from "../assets/images/clock.png";
import coin from "../assets/images/currency.png";
import { bookData } from "../constants/Constants";
import Footer from "../components/Footer/Footer";
const HomePage = () => {
	return (
		<div className="w-full h-full">
			<Header />
			<div className="p-4 mt-[100px] flex flex-col gap-8 justify-center items-center">
				<h1 className="text-2xl font-bold text-slate-800">
					Wellcome kalkidan! Here are your stats:
				</h1>
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
					<StatusCard
						cardName={"BNB Balance"}
						number={"0.123"}
						iconImg={card}
						cardBg={"bg-gray-100"}
					/>

					<StatusCard
						cardName={"BNB Due"}
						number={"0.00"}
						iconImg={coin}
						cardBg={"bg-gray-100"}
					/>
					<StatusCard
						cardName={"Reading time"}
						number={"0"}
						iconImg={timer}
						cardBg={"bg-gray-100"}
					/>
					<StatusCard
						cardName={"Book Status"}
						number={""}
						iconImg={""}
						cardBg={"bg-green-400"}
					/>
				</div>
				<div className="my-4 grid sm:grid-cols-2 gap-4 justify-center items-center">
					<PayForm formTitle={"Pay Your Due"} placeholder={"Payment"} />
					<PayForm
						formTitle={"Credit Your Account"}
						placeholder={"Credit Balance"}
					/>
				</div>
				<div className="container mx-auto">
					<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
						{bookData.map((book, id) => (
							<div key={id} className="">
								<BookCard image={book.img} description={book.description} />
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default HomePage;
