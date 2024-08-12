import MenuCard from "./menu-card"

const Menu = ({ menuArray }: { menuArray: MenuItem[] }) => {
  return (
    <div className="grid lg:w-4/5 mx-auto gap-x-20 gap-y-10">
      {menuArray.map((item, idx) => (
        <MenuCard title={item.title} description={item.description} price={item.price} additionalDesc={item.additionalDesc} key={`${item.title}-${idx}`} />
      ))}
    </div>
  )
}

export default Menu
