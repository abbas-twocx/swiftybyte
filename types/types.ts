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
