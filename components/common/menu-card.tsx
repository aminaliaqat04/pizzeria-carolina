
type MenuCardProps = {
  title?: string;
  description?: string;
  price?: string;
}

const MenuCard = ({title, description, price}: MenuCardProps) => {
  return (
    <div className="flex gap-5 justify-between">
      <div className="flex flex-col">
        <span className="text-2xl uppercase">{title}</span>
        <span className="font-montserrat text-sm">{description}</span>
      </div>
      <p className="text-xl">${price}</p>
    </div>
  )
}

export default MenuCard
