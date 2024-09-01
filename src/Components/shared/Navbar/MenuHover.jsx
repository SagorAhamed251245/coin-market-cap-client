import { Menu } from "antd";

const MenuHover = ({ menuHoverData }) => {
  const menuStyles = {
    minWidth: 0,
    fontSize: 14,
    fontWeight: 700,
    padding: 0,
  };

  console.log(menuHoverData.length);
  const getGridClasses = (length) => {
    if (length > 2) {
      return "grid-cols-2 grid-rows-2";
    }
    if (length === 2) {
      return "grid-cols-1 grid-rows-2";
    }
    return "grid-cols-1 grid-rows-1";
  };

  const gridClasses = getGridClasses(menuHoverData.length);
  return (
    <div className={` grid ${gridClasses}  grid-flow-col `}>
      {menuHoverData.map((item, index) => (
        <div
          key={index}
          className={`col-span-1 h-full row-span-1 ${
            menuHoverData.length < 3 && "border-r-0"
          } ${index === 1 || index === 0 ? "border-r" : "border-r-0"}`}
        >
          <div>
            <div className="font-bold text-gray-primary ml-5">{item.title}</div>
            <Menu
              className="bg-white h-auto"
              mode="vertical"
              defaultSelectedKeys={["1"]}
              items={item?.items}
              style={menuStyles}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuHover;
