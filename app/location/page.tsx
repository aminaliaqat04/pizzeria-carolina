import Link from "next/link";
import Image from "next/image";
import BannerBg from "../../public/cafe-vector-2.jpg"

export default function page() {
  return (
    <>
      <div className="min-h-screen overflow-hidden relative">
        <div className="absolute -z-10 bg-[--dark-color] opacity-60 h-full w-full"></div>
        <Image src={BannerBg} alt="" className="absolute object-cover inset-0 min-h-screen w-full -z-20" />
        <div className="h-48 bg-gradient-to-t from-[--dark-color] max-lg:from-70% to-transparent absolute lg:bottom-0 max-lg:bottom-20 w-full -z-10"></div>
      </div>
      <div className="bg-[--dark-color] text-[--light-color] text-center py-10 flex flex-col gap-5 max-lg:-mt-44 w-full lg:px-48 px-16 pb-20">
        <p className="uppercase lg:text-4xl max-lg:text-2xl">Hours & Location</p>
        <p className="font-light font-montserrat max-lg:text-sm underline">
          <Link href="https://maps.app.goo.gl/nQ7UZ8nJD1W3iZSt5?g_st=i" className="hover:font-bold" target="_blank">772 Dundas St W,<br />
          Toronto, ON M6J 1V1</Link><br />
          <Link href="tel:4163502020" className="hover:font-bold">(416) 350-2020</Link>
        </p>
        <p className="font-montserrat lg:w-1/2 mx-auto">Visit <span className="text-orange-300">Carolina Pizzeria</span> for a delightful dining experience from Sunday to Thursday, open from 8 am to 10 pm, and on Fridays and Saturdays, from 8 am to 11 pm. Whether you prefer a leisurely breakfast or a late dinner, we’ve got you covered. Reservations are recommended but walk-ins are always welcome.</p>
        <p className="text-xl">
          772 Dundas St W, Toronto, ON M6J 1V1<br/>
          <Link href="mailto:mangia@pizzeriacarolina.com" className="font-montserrat underline hover:font-bold text-xs">mangia@pizzeriacarolina.com</Link>
        </p>
      </div>
      {/* <div className="lg:pb-20 bg-[--dark-color]">
        <iframe width="100%" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=100%&amp;height=300&amp;hl=en&amp;q=772%20Dundas%20St%20W%20Toronto,%20ON%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

        <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=4bba9c7ca7259e80f84f7dda5e4b7955f0a958f1'></script>
      </div> */}
    </>
  )
}
