import ImgSlider from "@/components/common/img-slider";
import MenuTabs from "@/components/menuTabs";
import Image from "next/image";
import BannerBg from "../../public/pizza-img-1.png"

export default function page() {
  return (
    <>
      <div className="min-h-screen overflow-hidden relative flex justify-center items-center">
        <div className="absolute -z-10 bg-[--dark-color] opacity-40 h-full w-full"></div>
        <Image src={BannerBg} alt="" className="absolute object-cover inset-0 min-h-screen -z-20" />
        <h1 className="uppercase text-6xl text-[--light-color] font-bold tracking-widest text-center">Carolina Pizzeria Menu</h1>
        <div className="h-48 bg-gradient-to-t from-[--dark-color] max-lg:from-70% to-transparent absolute lg:bottom-0 max-lg:bottom-20 w-full -z-10"></div>
      </div>
      <div className="bg-[--dark-color] text-[--light-color] flex flex-col items-center gap-5 py-20 lg:px-10 max-lg:px-5 max-lg:-mt-48">
        <p className="text-xl">Modern dishes that capture the flavors of the season</p>
        <MenuTabs />
      </div>
    </>
  )
}
