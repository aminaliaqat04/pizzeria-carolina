"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import WhiteLogo from "../../public/Carolina_Logo_Wht.png"
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLinks = [
    { name: "WELCOME", path: "/" },
    { name: "OUR STORY", path: "/our-story" },
    { name: "HOURS & LOCATIONS", path: "/location" },
    { name: "CUISINE SELECTION", path: "/eat" },
    { name: "COCKTAIL MENU", path: "" },
    { name: "RESERVATIONS", path: "" },
    { name: "GALLARY", path: "" },
    // { name: "GIFT CARDS", path: "" },
    // { name: "DANTE BEVERLY HILLS", path: "" },
  ]
  return (
    <div className={`${pathname !== "/" ? `${!scrolled ? "bg-gradient-to-b from-[--dark-color] to-transparent h-48" : "bg-[--dark-color] h-32"} ease-in-out duration-1000` : "h-16 bg-[--dark-color]" } max-lg:hidden lg:flex flex-col items-center justify-center gap-8 text-[--light-color] text-lg uppercase fixed top-0 z-50 w-full`}>
      {pathname !== "/" && <div><Image src={WhiteLogo} alt="" className="w-48" /></div>}
      <div className="flex gap-8 items-center">
        {NavLinks.map((link, idx) => (
          <Link href={link.path} key={`${link.path}-${idx}`} className="hover:underline underline-offset-4">{link.name}</Link>
        ))}
      </div>
    </div>
  )
}

export default Header
