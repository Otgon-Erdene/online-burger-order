import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = () => (
  <div>
    <ul className={css.Menu}>
      <MenuItem active link="/">
        NEW ORDER
      </MenuItem>
      <MenuItem link="/login">LOGIN</MenuItem>
    </ul>
  </div>
);

export default Menu;
