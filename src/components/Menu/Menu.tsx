import {useEffect, useState} from "react";
import addicon from "./../../assets/add.svg";

import "./Menu.scss";

interface menuItems {
  id: string;
  title: string;
  desc: string;
  price: number;
}

const Menu = () => {
  const [menuData, setMenuData] = useState<menuItems[]>([]);
  const fetchMenu = async () => {
    const url = "//airbean-api-xjlcn.ondigitalocean.app/api/beans/";
    const res = await fetch(url);
    const d = await res.json();
    if (JSON.stringify(d.menu) !== JSON.stringify(menuData)) {
      setMenuData(d.menu);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  console.log("menuData", menuData);

  const displayMenu = () => {
    return menuData.slice(0, menuData.length - 2).map((item) => {
      return (
        <li key={item.id}>
          <div className="item-container">
            <img className="add-icon" src={addicon} alt="" />
            <div className="item-textcontainer">
              <h3 className="item_title">{item.title}</h3>
              <p className="item_desc">{item.desc}</p>
            </div>
            <p className="item_price">{item.price} kr</p>
          </div>
        </li>
      );
    });
  };

  return <div>{displayMenu()}</div>;
};

export default Menu;
