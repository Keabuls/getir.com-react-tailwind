import { useState,useEffect } from "react";
import Slider from "react-slick";
import Banners from "api/banners.json"
import Title from "./ui/Title";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useWindowWidth } from '@react-hook/window-size'



function NextButton ({ onClick, className }) {
	return (
		<button className={` !text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}
function PrevButton ({ onClick, className }) {
	return (
		<button className={`!text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowBack size={22}/>
		</button>
	)
}

export default function Campaigns() {

  const[banners,setBanners] = useState([]);

  const windowWidth = useWindowWidth()

  useEffect(()=>{
    setBanners(Banners);

  },[])

  const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 3500,
	cssEase: "linear",
	arrows: true,
	nextArrow: <NextButton />,
	prevArrow: <PrevButton />,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 3,
				arrows: false,
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				arrows: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				arrows: false,
			}
		}
	]
};

  return (
		<>
			<div className="sm:container overflow-hidden md:overflow-visible mx-auto px-0 py-8">
				<div className="hidden md:block">
					<Title>Kampanyalar</Title>
				</div>
				
				<Slider className="-mx-2 relative" {...settings}>
					{banners && banners.map(banner => (
						<div key={banner.id} className="px-2">
							<img src={banner.image} className="w-full md:rounded-lg" />
						</div>
					))}
				</Slider>
			</div>
		</>
	)
}

