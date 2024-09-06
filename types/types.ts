import { ILink } from "./link";

export type Image = {
  src: string;
  alt: string;
};

export type TService = {
  id: number;
  icon: Image;
  title: string;
  description: string;
  url?: string;
};

export type TBrand = {
  id: number;
  name: string;
  href: string;
  image: Image;
  imageLight?: Image;
};

export type TButton = {
  label: string;
  url: string;
  type: "primary" | "secondary";
};

export type TPoint = {
  point: string;
};

export type THero = {
  heading: string;
  description: string;
  link: ILink;
  image: Image;
};

export type TServices = {
  title: string;
  subTitle: string;
  description: string;
  services: TService[];
};

export type TBrands = {
  title: string;
  subTitle: string;
  decription: string;
  showHeading: boolean;
  brands: TBrand[];
};

export type TAbout = {
  tag: string;
  heading: string;
  description: string;
  image: Image;
  imageRight?: boolean;
};

export type THeading = {
  heading: string;
  link: TButton;
};

export type TTextWithImage = {
  heading: string;
  description?: string;
  link: TButton;
  image: Image;
};

export type TServiceSingle = {
  heading: string;
  description?: string;
  link: TButton;
  points?: TPoint[];
  headingLeft?: boolean;
  bgColor?: string,
};
