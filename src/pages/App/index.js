import React from "react";
import css from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import BurgerBuilder from "../BurgerBuilder";

function App() {
  return (
    <div>
      <Toolbar />
      <main className={css.content}>
        <BurgerBuilder />
      </main>
      <div></div>
    </div>
  );
}

export default App;
