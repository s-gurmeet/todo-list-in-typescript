import React from "react";
import { APP_TITLE } from "../constants";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>{APP_TITLE}</h1>
    </header>
  );
};

export default Header;
