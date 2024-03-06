import {useEffect, useState} from "react";
import AddProduct from "../AddProduct/AddProduct";

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
    return menuData.map((item) => {
      return (
        <li key={item.id}>
          <div className="item-container">
            <AddProduct id={item.id} title={item.title} price={item.price} />
            <div className="item-textcontainer">
              <h3 className="item_title">
                {item.title}
                <span>...............................</span>
              </h3>
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
