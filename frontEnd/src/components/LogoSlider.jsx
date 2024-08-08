import React from "react";

const LogoSlider = () => {
	return (
		<div className="flex  justify-center items-center  mt-8 w-full">
			
			<div className="font-poppins">

				<h1 className="text-center hidden text-xl font-bold underline underline-offset-8 ">Meet Our Partners</h1>
				<div></div>
				<div className="flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-40px),transparent_100%)] space-x-4  group ">
					<div className=" font-roboto grayscale font-bold text-xl flex  space-x-4 pt-2 opacity-100 pb-7 group-hover:paused items-center flex-wrap justify-center md:flex-nowrap">
						<img className="h-8 lg:h-12" src="../assets/non-optimized/lazada.png" alt="log" />
						<img className="h-16 lg:h-20" src="../assets/non-optimized/tiktok.png" alt="log" />
						<img className="h-12 lg:h-16" src="../assets/non-optimized/cocomo.webp" alt="log" />
						<img className="h-8 lg:h-12" src="../assets/non-optimized/Shopee.png" alt="log" />
						<img className="h-8 lg:h-12" src="../assets/non-optimized/shopify-logo.png" alt="log" />
						<img className="h-8 lg:h-12" src="../assets/non-optimized/qu10.png" alt="log" />
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default LogoSlider;
