import Image from "next/image";
import bannerBg from "../public/fire-place-banner-bg-copy.jpg"
import Logo from "../public/Carolina_Round_Logo_Cream.png"
import ReservationsImg from "../public/book-a-table-img.jpeg"
import CelebrateImg from "../public/celebrate-img.webp"
import ShopImg from "../public/shop-img.jpg"
import BarImg from "../public/bar.jpeg"

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div className={`min-h-screen w-full relative lg:mt-16`}>
        <div className="lg:hidden` h-96 bg-gradient-to-b from-[--dark-color] to-transparent absolute top-0 w-full -z-10"></div>
        <Image src={bannerBg} alt="" className="absolute index-0 -z-20 max-lg:min-h-screen lg:max-h-screen object-cover" />
        <div className="flex justify-center max-lg:mt-20 lg:my-5">
          <Image src={Logo} alt="" className="w-48 " />
        </div>
        <div className="h-48 bg-gradient-to-t from-[--dark-color] max-lg:from-70% to-transparent absolute bottom-0 w-full -z-10"></div>
      </div>
      <div className="bg-[--dark-color] text-[--light-color] text-center py-10 grid lg:grid-cols-2 gap-y-10 max-lg:-mt-32 w-full">
        <div className="space-y-5">
          <p className="uppercase lg:text-4xl max-lg:text-2xl">Number 1, Worlds 50 Best Bars 2019</p>
          <p className="font-light font-montserrat max-lg:text-sm">Worlds 50 Best Bars 2019</p>
        </div>
        <div className="space-y-5">
          <p className="uppercase lg:text-4xl max-lg:text-2xl">Worlds Best Bar 2019</p>
          <p className="font-light font-montserrat max-lg:text-sm">Tales of the Cocktail Spirited Award</p>
        </div>
      </div>

      {/* Book a Table */}
      <div className="bg-[--dark-color] flex max-lg:flex-col max-lg:gap-5 justify-between items-center max-lg:p-5 lg:pl-5 text-[--light-color] overflow-hidden lg:h-[28rem]">
        <div className="lg:h-96 max-lg:h-80 lg:w-[35rem] max-lg:w-full border-4 border-[--light-color] outline-1 outline-offset-4 outline-[--light-color] outline flex flex-col justify-center items-center gap-5 px-20 text-center z-10 card-wrapper">
          <p className="uppercase text-3xl">Book a table</p>
          <span className="w-6 h-[0.03rem] bg-[--light-color] !-mt-3"></span>
          <p className="font-montserrat">Welcome to Pizzeria Carolina. We look forward to hosting you soon.</p>
          <button className="border border-[--light-color] px-2 uppercase text-xl hover:bg-[--light-color] hover:text-[--dark-color]">RESERVATIONS</button>
        </div>
        <div className="relative">
          <div className="absolute lg:left-5 top-0 h-full bg-gradient-to-r from-[--dark-color] to-transparent w-48 z-10"></div>
          <Image src={ReservationsImg} alt="" className="lg:object-[4rem_0]" />
          <div className="absolute right-0 top-0 h-full bg-gradient-to-l from-[--dark-color] to-transparent w-48 z-10"></div>
        </div>
      </div>

      {/* Celebrate */}
      <div className="bg-[--dark-color] flex max-lg:flex-col max-lg:gap-5 justify-between items-center max-lg:p-5 lg:pr-5 text-[--light-color] overflow-hidden lg:h-[28rem]">
        <div className="lg:h-96 max-lg:h-80 lg:w-[40rem] max-lg:w-full border-4 border-[--light-color] outline-1 outline-offset-4 outline-[--light-color] outline flex flex-col justify-center items-center gap-5 px-20 text-center z-10 lg:order-1 card-wrapper">
          <p className="uppercase text-3xl">Celebrate</p>
          <span className="w-6 h-[0.03rem] bg-[--light-color] !-mt-3"></span>
          <p className="font-montserrat">Schedule your next event at Pizzeria Carolina.</p>
          <button className="border border-[--light-color] px-2 uppercase text-xl hover:bg-[--light-color] hover:text-[--dark-color]">INQUIRE WITHIN</button>
        </div>
        <div className="relative">
          <div className="absolute lg:left-5 top-0 h-full bg-gradient-to-r from-[--dark-color] to-transparent w-48 z-10"></div>
          <Image src={CelebrateImg} alt="" className="lg:object-[4rem_0]" />
          <div className="absolute right-0 top-0 h-full bg-gradient-to-l from-[--dark-color] to-transparent w-48 z-10"></div>
        </div>
      </div>

      {/* Shop */}
      <div className="bg-[--dark-color] flex max-lg:flex-col max-lg:gap-5 justify-between items-center max-lg:p-5 lg:pl-5 text-[--light-color] overflow-hidden lg:h-[28rem]">
        <div className="lg:h-96 max-lg:h-80 lg:w-[35rem] max-lg:w-full border-4 border-[--light-color] outline-1 outline-offset-4 outline-[--light-color] outline flex flex-col justify-center items-center gap-5 px-20 text-center z-10 card-wrapper">
          <p className="uppercase text-3xl">Shop</p>
          <span className="w-6 h-[0.03rem] bg-[--light-color] !-mt-3"></span>
          <p className="font-montserrat">Purchase our merchandise online.</p>
          <button className="border border-[--light-color] px-2 uppercase text-xl hover:bg-[--light-color] hover:text-[--dark-color]">VIEW PRODUCTS</button>
        </div>
        <div className="relative">
          <div className="absolute lg:left-5 top-0 h-full bg-gradient-to-r from-[--dark-color] to-transparent w-48 z-10"></div>
          <Image src={ShopImg} alt="" className="lg:object-[4rem_0]" />
          <div className="absolute right-0 top-0 h-full bg-gradient-to-l from-[--dark-color] to-transparent w-48 z-10"></div>
        </div>
      </div>

      {/* Food and Drink */}
      <div className="relative h-[35rem] overflow-hidden flex flex-col gap-5 justify-center items-center text-center text-[--light-color]">
        <div className="absolute -z-10 bg-[--dark-color] opacity-50 h-full w-full"></div>
        <Image src={BarImg} alt="" className="absolute -z-20" />
        <p className="text-4xl">FOOD & DRINK</p>
        <p className="font-montserrat !-mt-2">Click below to see what we're serving.</p>
          <button className="border border-[--light-color] px-2 uppercase text-xl hover:bg-[--light-color] hover:text-[--dark-color]">VIEW MENUS</button>
      </div>
    </>

  );
}
