import Image from "next/image";

const Banner = () => {
	return (
		<div className="relative h-[650px] md: [650px] sm:h-[650px] lg:h-[650px] xl:h-[700px]">
			<Image src="/images/banner.webp" layout="fill" objectFit="cover" />
			<div className="absolute top-1/2 w-full text-center mt-16">
				<p className=" hidden md:block text-2xl sm:text-3xl xl:text-4xl text-white mt-12 mb-8">
					에어비앤비가 <br /> 여행지를 찾아드릴게요!
				</p>
				<p className="block md:hidden text-3xl text-white m-8">
					어디든 상관없이 <br /> 떠나고 싶을 때 <br /> 에어비앤비가 도와드립니다!
				</p>
				<a className="cursor-pointer bg-white px-[24px] py-[12px] rounded-full w-36 hover:bg-gray-100 active:text-sm">
					<span className="text-transparent font-bold bg-white bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500 text-md">
						맞춤형 검색
					</span>
				</a>
			</div>
		</div>
	);
};

export default Banner;
