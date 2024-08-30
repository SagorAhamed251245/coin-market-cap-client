import AllCoinsData from "@/Components/shared/Table/BitCoinTable";
import { Button } from "antd";
import React from "react";

const HomePage = () => {
  const navStyles: {
    head: string;
    footer: string;
  } = {
    head: `text-3xl`,
    footer: ``,
  };
  return (
    <div className="text-3xl">
      {" "}
      <AllCoinsData />
    </div>
  );
};

export default HomePage;
