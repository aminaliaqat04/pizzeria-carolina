

const MenuCard = ({title, description, additionalDesc, price}: MenuItem) => {
  return (
    <div className="flex gap-5 justify-between">
      <div className="flex flex-col">
        <span className="text-2xl uppercase">{title}</span>
        <span className="font-montserrat text-sm">{description}</span>
        <span className="font-montserrat text-sm">{additionalDesc}</span>
      </div>
      <p className="text-2xl">${price}</p>
    </div>
  )
}

export default MenuCard
