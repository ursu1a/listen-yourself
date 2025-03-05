"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/react";
import { Link } from "@heroui/react";
import { link as linkStyles } from "@heroui/react";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useReducer } from "react";

import { SocialLinks } from "../ui/SocialLinks";

import { SponsorButton } from "@/components/ui/SponsorButton";
import { SearchInput } from "@/components/search/SearchInput";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import {
  TwitterIcon,
  TelegramIcon,
  DiscordIcon,
  LogoIcon,
} from "@/components/shared/icons";
import { useIsMobile } from "@/hooks/useIsMobile";

export const Navbar = () => {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useReducer((current) => !current, false);

  useEffect(() => {
    if (menuOpen) {
      setMenuOpen();
    }
  }, [pathname]);

  return (
    <NextUINavbar
      className="navbar"
      height="4rem"
      isBlurred={!isMobile}
      isMenuOpen={menuOpen}
      maxWidth="full"
      position="sticky"
      onMenuOpenChange={setMenuOpen}
    >
      <NavbarContent
        as="div"
        className="basis-1/5 sm:basis-full"
        justify="start"
      >
        <NavbarBrand className="max-w-fit">
          <NextLink aria-label={siteConfig.name} href="/">
            <LogoIcon className="w-[30px] -ml-[3px] lg:w-[50px] lg:ml-0" />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-6 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "decoration-2 font-medium",
                  "data-[active=true]:underline",
                  "data-[active=true]:underline-offset-8",
                )}
                data-active={pathname.includes(item.href)}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
          <NavbarItem className="hidden lg:flex">
            <SearchInput />
          </NavbarItem>
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            aria-label="Telegram"
            href={siteConfig.links.telegram}
          >
            <TelegramIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <SponsorButton />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <Link isExternal aria-label="Github" href={siteConfig.links.telegram}>
          <TelegramIcon className="text-default-500" />
        </Link>
        <SearchInput isMobile />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-5 flex flex-col h-full gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                href={item.href}
                size="lg"
                onPress={setMenuOpen}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="mt-10">
            <SocialLinks />
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
