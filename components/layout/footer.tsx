import Link from "next/link";

const Footer = () => {
  const NavLinks = [
    { name: "EVENTS", path: "" },
    { name: "BRING HOME", path: "" },
    { name: "COLLABORATIONS", path: "" },
    { name: "POP-UPS", path: "" },
    { name: "PRESS", path: "" },
    { name: "CONTACT", path: "" },
    { name: "CELEBRATE", path: "" },
    { name: "WORK WITH", path: "" },
  ]
  return (
    <div className="bg-[--dark-color] h-16 max-lg:hidden lg:flex items-center justify-end gap-8 text-[--light-color] text-lg uppercase fixed bottom-0 z-20 w-full px-10">
      {NavLinks.map(link => (
        <Link href={link.path} key={link.path}>{link.name}</Link>
      ))}
    </div>
  )
}

export default Footer
