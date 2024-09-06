export type SubMenu = {
  id: number;
  tagline?: string;
  title: string;
  description?: string;
  path?: string;
  newTab: boolean;
};

export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: SubMenu[];
};
