// import ImgSlider from "@/components/common/img-slider";
import MenuTabs from "@/components/menuTabs";
import Image from "next/image";
import BannerBg from "../../public/dessert-img.png"
import { brunchMenu, cafeMenu, desertMenu, pizzeBiancheMenu, pizzeRosseMenu } from "@/data/menu";
import Menu from "@/components/common/menu";

export default function page() {
  return (
    <>
      <div className="min-h-screen overflow-hidden relative flex justify-center items-center">
        <div className="absolute -z-10 bg-[--dark-color] opacity-20 h-full w-full"></div>
        <Image src={BannerBg} alt="" className="absolute object-cover inset-0 min-h-screen w-full -z-20" />
        <h1 className="uppercase text-6xl text-[--light-color] font-bold tracking-widest text-center">Dolce & Cafe</h1>
        <div className="h-48 bg-gradient-to-t from-[--dark-color] max-lg:from-70% to-transparent absolute lg:bottom-0 max-lg:bottom-20 w-full -z-10"></div>
      </div>
      <div className="bg-[--dark-color] text-[--light-color] flex flex-col items-center gap-5 py-20 pt-32 lg:px-10 max-lg:px-5 z-10">
        <div className="border-4 border-[--light-color] outline-1 outline-offset-4 outline-[--light-color] outline px-10 py-20 w-full lg:w-2/3 mx-auto">
          <h2 className="uppercase text-3xl text-center font-bold">Dolce</h2>
          <hr className="w-6 h-[0.03rem] bg-[--light-color] mt-2 mb-8 mx-auto" />
          <Menu menuArray={desertMenu} />
          <h2 className="uppercase text-3xl text-center font-bold mt-20">Cafe</h2>
          <hr className="w-6 h-[0.03rem] bg-[--light-color] mt-2 mb-8 mx-auto" />
          <Menu menuArray={cafeMenu} />
        </div>
      </div>
    </>
  )
}
