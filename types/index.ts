import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface ITestimonial {
  name: string;
  image: string;
  content: string;
  rating: number;
}

export interface IGalleryItem {
  image: string;
  alt: string;
}
