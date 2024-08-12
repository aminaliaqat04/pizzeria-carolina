"use client";

import { useState } from "react";
import MenuCard from "./common/menu-card";
import { antipastiMenu, desertMenu, menuType, paniniMenu, pastaMenu, pizzeBiancheMenu, pizzeRosseMenu } from "@/data/menu";
import Menu from "./common/menu";

const MenuTabs = () => {
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
            <div className="border-4 border-[--light-color] outline-1 outline-offset-4 outline-[--light-color] outline px-10 py-20 w-full lg:w-2/3 mx-auto">
              <h2 className="uppercase text-3xl text-center font-bold">Pizze Rosse</h2>
              <hr className="w-6 h-[0.03rem] bg-[--light-color] mt-2 mb-8 mx-auto" />
              <Menu menuArray={pizzeRosseMenu} />
              <h2 className="uppercase text-3xl text-center font-bold mt-20">Pizze Bianche</h2>
              <hr className="w-6 h-[0.03rem] bg-[--light-color] mt-2 mb-8 mx-auto" />
              <Menu menuArray={pizzeBiancheMenu} />
            </div>
          </>}
        {activeTab === menuType[1].id &&
          <>
            <div className="border-4 border-[--light-color] outline-1 outline-offset-4 outline-[--light-color] outline px-10 py-20 w-full lg:w-2/3 mx-auto">
              <h2 className="uppercase text-3xl text-center font-bold">Antipasti</h2>
              <hr className="w-6 h-[0.03rem] bg-[--light-color] mt-2 mb-8 mx-auto" />
              <Menu menuArray={antipastiMenu} />
            </div>
          </>}
        {activeTab === menuType[2].id &&
          <>
            <p className="font-montserrat text-center">Option of Side Salad or Fries $4</p>
            <div className="border-4 border-[--light-color] outline-1 outline-offset-4 outline-[--light-color] outline px-10 py-20 w-full lg:w-2/3 mx-auto">
              <h2 className="uppercase text-3xl text-center font-bold">Panini</h2>
              <hr className="w-6 h-[0.03rem] bg-[--light-color] mt-2 mb-8 mx-auto" />
              <Menu menuArray={paniniMenu} />
            </div>
          </>}
        {activeTab === menuType[3].id &&
          <>
            {/* <p className="font-montserrat text-center">Option of Side Salad or Fries $4</p> */}
            <div className="border-4 border-[--light-color] outline-1 outline-offset-4 outline-[--light-color] outline px-10 py-20 w-full lg:w-2/3 mx-auto">
              <h2 className="uppercase text-3xl text-center font-bold">Pasta</h2>
              <hr className="w-6 h-[0.03rem] bg-[--light-color] mt-2 mb-8 mx-auto" />
              <Menu menuArray={pastaMenu} />
            </div>
          </>}
        {activeTab === menuType[4].id &&
          <>
            {/* <p className="font-montserrat text-center">Option of Side Salad or Fries $4</p> */}
            <div className="border-4 border-[--light-color] outline-1 outline-offset-4 outline-[--light-color] outline px-10 py-20 w-full lg:w-2/3 mx-auto">
              <h2 className="uppercase text-3xl text-center font-bold">Dolce</h2>
              <hr className="w-6 h-[0.03rem] bg-[--light-color] mt-2 mb-8 mx-auto" />
              <Menu menuArray={desertMenu} />
            </div>
          </>}
      </div>
    </>
  )
}

export default MenuTabs
