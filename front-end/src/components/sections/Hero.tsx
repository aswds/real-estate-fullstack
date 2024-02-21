import { Header } from "../styled/Header";
import HeroVideoBG from "@assets/houses/video/hero_bg_2.mp4";
import { IconAnimation } from "@components/styled/IconAnimation";
import TextAnimation from "@components/styled/TextAnimation";
import { SlArrowDown } from "react-icons/sl";
function Hero() {
  return (
    <div className="h-screen   ">
      <div className="absolute w-full h-screen -z-10 ">
        <video src={HeroVideoBG} autoPlay loop muted className="size-full" />
      </div>

      <div className="flex flex-col w-full h-full items-center justify-center ">
        <div className="text-center hero-text">
          <TextAnimation>PRESTIGE PALACES</TextAnimation>
          <p className="text-xl md:text-3xl font-normal font-[Mulish] p-5">
            WHERE LUXURY LIVES
          </p>
        </div>
        <IconAnimation>
          <SlArrowDown size={50} color="white" className="" />
        </IconAnimation>
      </div>
    </div>
  );
}

export default Hero;
