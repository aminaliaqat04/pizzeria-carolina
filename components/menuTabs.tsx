"use client";

import { useState } from "react";
import MenuCard from "./common/menu-card";

const MenuTabs = () => {
  const menuType = [
    { id: 1, name: "Pizze" },
    { id: 2, name: "Antipasti" },
    { id: 3, name: "Panini" },
    { id: 4, name: "Pasta" },
    { id: 5, name: "Dessert" }
  ]
  const pizzeRosseMenu = [
    { title: "Margherita", description: "Tomato sauce, fior di latte, basil (for Bufala Mozzarella extra cost)", price: "20" },
    { title: "Carolina", description: "Tomato sauce, cherry tomatoes, mozzarella di bufala, prosciutto, arugula", price: "28" },
    { title: "VIZIATO", description: "Tomato sauce, fior di latte mozzarella, black olives, mushrooms, ham, artichokes", price: "26" },
    { title: "CALABRISELLA", description: "Tomato sauce, fior di latte mozzarella, nduja, hot salami, red onions", price: "26" },
    { title: "OTTIMO", description: "Tomato sauce, fior di latte mozzarella, pepperoni, jalapeno, hot honey", price: "25" },
    { title: "TANTA ROBA", description: "Rapini, sausage, smoked mozzarella, chillies, tomato sauce", price: "26" },
    { title: "TOTO", description: "Tomato sauce, fior di latte mozzarella, sausage, gorgonzola, red onions", price: "25" },
  ]
  const pizzeBiancheMenu = [
    { title: "RICCA", description: "Truffle oil, mushrooms, smoked mozzarella, guanciale", price: "25" },
    { title: "Buona", description: "Smoked mozzarella, speck, stracciatella, fior di latte", price: "27" },
    { title: "BEDRA MIA", description: "Mortadella, stracciatella, pistacchio, fior di latte mozzarella", price: "27" },
    { title: "Contadina", description: "Zucchine, bell peppers, ricotta salata, fior di latte mozzarella, truffle", price: "25" },
    { title: "BURRATINA", description: "Fior di latte mozzarella, prosciutto, burrata, parmigiano, balsamic glaze", price: "25" },
  ]
  const [activeTab, setActiveTab] = useState<number>(1)

  return (
    <>
      <div className="flex justify-center max-lg:gap-2 lg:gap-5">
        {menuType.map(type => (
          <button className={`border border-[--light-color] px-2 uppercase text-xl hover:bg-[--light-color] hover:text-[--dark-color] ${activeTab === type.id && "bg-[--light-color] text-[--dark-color]"}`} key={`${type.name}-${type.id}`} onClick={() => setActiveTab(type.id)}>{type.name}</button>
        ))}
      </div>
      <div className="space-y-10 text-[--light-color] mt-10 w-full">
        {activeTab === menuType[0].id &&
          <>
            <p className="font-montserrat text-center">Gluten free crust, pasta and gnocchi are available $5</p>
            <div className="border-4 border-[--light-color] outline-1 outline-offset-4 outline-[--light-color] outline px-10 py-20 w-full">
              <h2 className="uppercase text-3xl text-center font-bold">Pizze Rosse</h2>
              <hr className="w-6 h-[0.03rem] bg-[--light-color] mt-2 mb-8 mx-auto" />
              <div className="grid lg:grid-cols-2 lg:w-4/5 mx-auto gap-x-20 gap-y-10">
                {pizzeRosseMenu.map(item => (
                  <MenuCard title={item.title} description={item.description} price={item.price} />
                ))}
              </div>
              <h2 className="uppercase text-3xl text-center font-bold mt-20">Pizze Bianche</h2>
              <hr className="w-6 h-[0.03rem] bg-[--light-color] mt-2 mb-8 mx-auto" />
              <div className="grid lg:grid-cols-2 lg:w-4/5 mx-auto gap-x-20 gap-y-10">
                {pizzeBiancheMenu.map(item => (
                  <MenuCard title={item.title} description={item.description} price={item.price} />
                ))}
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default MenuTabs
