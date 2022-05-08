import React from "react";
import {Data} from "../data/data";
import  Menuitem  from "../components/Menuitem";
import "../styles/Menu.css"
const Menu = () => {
  return (
    <div className="menu">
      <div className="menuTitle">
        <div className="menuList">
          {Data.map((menuItem, key) => {
            return <Menuitem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
