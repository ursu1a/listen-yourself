import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ApiResponse = {
  success: boolean;
  message: string;
};

export interface ITestimonial {
  name: string;
  image: string;
  content: string;
  rating: number;
}

export interface IGalleryItem {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  url: string;
}

export interface IEmailData {
  name: string;
  email: string;
  message: string;
  templateId: string;
}

export interface IContactForm extends Omit<IEmailData, "templateId"> {}

export interface IPost {
  slug: string;
  title: string;
  date: string;
  featuredImage?: string;
  excerpt: string;
  content?: string;
  readTime?: number;
  views: number;
}

export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
}

export interface IPlan {
  id: string;
  name: string;
  description: string;
  cost: number;
  period?: string;
  popular?: boolean;
  maxSessions?: number;
}

export interface IUserForm {
  planId?: string;
  name: string;
  email: string;
  dateTime?: string;
}
