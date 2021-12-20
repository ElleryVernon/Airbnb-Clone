import Head from "next/head";

import Header from "../components/Header";
import Banner from "../components/Banner";

const Home = () => {
	return (
		<div className="">
			<Head>
				<title>SeongMin Airbnb</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Banner />

			<main className="max-w-7xl">
				<section className="p-10">
					<h2 className="text-3xl font-semibold text-gray-800 pb-5">설레는 다음 여행을 위한 아이디어</h2>
				</section>
			</main>
		</div>
	);
};

export default Home;
