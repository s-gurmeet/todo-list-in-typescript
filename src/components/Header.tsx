import React from "react";
import { APP_TITLE } from "../config/constants";

const Header: React.FC = () => (
  <header className="header">
    <h1>{APP_TITLE}</h1>
  </header>
);

export default Header;
