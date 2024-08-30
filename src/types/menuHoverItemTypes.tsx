// Import React
import { ReactNode } from "react";

// Define a type for individual menu item
type MenuItem = {
  key: string;
  label: string;
  icon: ReactNode;
};

// Define a type for each menu category
type MenuCategory = {
  title?: string;
  items: MenuItem[];
};

// Define the type for the array containing all categories
export type MenuData = MenuCategory[];
