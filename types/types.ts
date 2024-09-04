import { ILink } from "./link";

export type Image = {
  src: string;
  alt: string;
};

export type THero = {
  heading: string;
  description: string;
  link: ILink;
  image: Image;
};
