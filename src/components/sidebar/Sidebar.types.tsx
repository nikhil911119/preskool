import { ReactElement } from "react";

export interface DropDownItems {
  title: string;
  path: string;
}
export interface MenuItemProps {
  label: string;
  icon: ReactElement; // Tabler Icons are React elements
  link?: string;
  type: "dropdown" | "link";
  dropItems?: DropDownItems[];
}

export interface MenuSection {
  title: string;
  items: MenuItemProps[];
}
