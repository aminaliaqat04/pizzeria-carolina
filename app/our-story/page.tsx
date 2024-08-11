import BannerBg from "../../public/f14e4ad9-0d68-4fe9-919f-836cbcd2f17e.jpeg"
import ChefGrazImg from "../../public/graz2.jpg"
import NaplesImg from "../../public/naples.png"
import GrazVanvleetImg1 from "../../public/graz_vanvleet.jpg"
import GrazVanvleetImg2 from "../../public/graz_vanvleet2.jpg"
import Image from "next/image"

export default function page() {
  return (
    <>
      <div className="min-h-screen overflow-hidden relative">
        <div className="absolute -z-10 bg-[--dark-color] opacity-40 h-full w-full"></div>
        <Image src={BannerBg} alt="" className="absolute object-cover inset-0 min-h-screen -z-20" />
        <div className="h-48 bg-gradient-to-t from-[--dark-color] max-lg:from-70% to-transparent absolute lg:bottom-0 max-lg:bottom-20 w-full -z-10"></div>
      </div>
      <div className="bg-[--dark-color] text-[--light-color] text-center py-10 flex flex-col gap-5 max-lg:-mt-44 w-full lg:px-48">
        <p className="uppercase lg:text-4xl max-lg:text-2xl">Our Story</p>
        <p className="font-light font-montserrat max-lg:text-sm"><span className="lg:text-xl">Graziano Tortora</span> welcomes you to</p>
        <p className="lg:text-3xl uppercase max-lg:text-xs font-montserrat">Carolina Pizzeria!</p>
      </div>

      {/* Chef Graz */}
      <div className="bg-[--dark-color] flex max-lg:flex-col max-lg:gap-5 justify-between items-center lg:p-5 text-[--light-color] overflow-hidden">
        <div className="relative">
          <div className="absolute top-0 h-full bg-gradient-to-r from-[--dark-color] to-transparent w-48 z-10"></div>
          <Image src={ChefGrazImg} alt="" className="grayscale" />
          <div className="absolute right-0 top-0 h-full bg-gradient-to-l from-[--dark-color] to-transparent w-48 z-10"></div>
        </div>
        <div className="lg:w-[35rem] max-lg:w-full border-4 border-[--light-color] outline-1 outline-offset-4 outline-[--light-color] outline flex flex-col justify-center items-center gap-5 max-xl:px-10 xl:px-20  py-20 text-center z-10 card-wrapper">
          <p className="uppercase text-3xl">Chef Graz</p>
          <p className="!-mt-3 border-y border-[--light-color] px-2 uppercase text-xl">Owner</p>
          {/* <span className="w-6 h-[0.03rem] bg-[--light-color] !-mt-3"></span> */}
          <p className="font-montserrat">
            Chef Graz hails from Naples, Italy where as a young boy he loved to cook with his mother and nonnas. Chef Graz worked in the food and bar scene in Italy as a young lad at the famous Chalet Ciro in Naples.  He spent over the last ten years in Toronto honing his craft as pizza chef at Buonanotte Restaurant and as Head Chef at Queen Margherita Pizza Dundas West location.  He makes pizzas in the traditional method of how they do it in Naples, Italy.
          </p>
        </div>
      </div>
      <div className="bg-[--dark-color] text-[--light-color] flex justify-around items-center w-full">
        <p className="font-montserrat text-center w-2/5 px-10">Now he is realizing his dream of opening his own restaurant where he can further showcase the flavours and traditions of Neapolitan cooking!</p>
        <div className="flex justify-center w-1/2"><Image src={NaplesImg} alt="" /></div>
      </div>

      <div className="bg-[--dark-color] text-[--light-color] px-5 py-20 text-center space-y-10">
        <p className="lg:text-lg w-1/2 mx-auto !leading-loose font-montserrat"><span className="lg:text-3xl font-economica">Chef Graz</span> teaching <span className="lg:text-3xl font-economica">Fred Vanvleet</span>, point guard from the Toronto Raptors, how to handle a layup Neapolitan style!</p>
        <div className="grid grid-cols-2 gap-20">
          <Image src={GrazVanvleetImg1} alt="" className="grayscale" />
          <Image src={GrazVanvleetImg2} alt="" className="grayscale" />
        </div>
      </div>
    </>
  )
}
