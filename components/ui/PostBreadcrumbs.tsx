"use client";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

import { siteConfig as strings } from "@/config/site";

export const PostBreadcrumbs = ({ current }: { current: string }) => (
  <Breadcrumbs
    classNames={{ base: "hidden lg:block mb-6" }}
    itemClasses={{ item: "text-medium" }}
    underline="hover"
  >
    <BreadcrumbItem href="/">{strings.blog.home}</BreadcrumbItem>
    <BreadcrumbItem href="/posts">{strings.blog.root}</BreadcrumbItem>
    <BreadcrumbItem>{current}</BreadcrumbItem>
  </Breadcrumbs>
);
