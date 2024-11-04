"use client";

import { ChevronDown, Search } from "lucide-react";
import classNames from "./navbar.module.scss";
import Image from "next/image";
import Logo from "@/assets/images/company-logo.webp";
import { navbarMenu } from "@/constants/config";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React, { FC } from "react";
import { Unarray } from "@/utils/styles/types";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <div className={classNames.info}>
          <div>
            <div className={classNames.contentLeft}>
              Enquiries <span>0330 056 2233</span>
            </div>
            <div className={classNames.contentRight}>
              Need Support?
              <span>
                <Search />
              </span>
            </div>
          </div>
        </div>
        <div className={classNames.navbar}>
          <div>
            <div className={classNames.logo} onClick={() => router.push("/")}>
              <Image
                src={Logo}
                alt="logo"
                width={200}
                className={classNames.logo}
              />
            </div>
            <NavigationMenu.Root className={classNames.NavigationMenuRoot}>
              <NavigationMenu.List className={classNames.NavigationMenuList}>
                {navbarMenu.map((item) => (
                  <NavigationMenuItem key={item.path} {...item} />
                ))}
                <NavigationMenu.Indicator
                  className={classNames.NavigationMenuIndicator}
                >
                  <div className="Arrow" />
                </NavigationMenu.Indicator>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const NavigationMenuItem: FC<Unarray<typeof navbarMenu>> = (props) => {
  if (props.items?.length)
    return (
      <NavigationMenu.Item className={classNames.NavigationMenuItem}>
        <NavigationMenu.Trigger className={classNames.NavigationMenuTrigger}>
          {props.name} <ChevronDown size={18} aria-hidden />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className={classNames.NavigationMenuContent}>
          <ul className={classNames.ListWrapper}>
            {props.items?.map((subItem) => (
              <ListItem key={subItem.path} {...subItem} />
            ))}
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    );
  return (
    <NavigationMenu.Link className={classNames.NavigationMenuLink} asChild>
      <div>{props.name}</div>
    </NavigationMenu.Link>
  );
};

const ListItem: FC<Unarray<typeof navbarMenu>> = (props) => {
  const router = useRouter();
  return (
    <NavigationMenu.Link asChild onClick={() => router.push(props.path)}>
      <li className={classNames.ListItem}>{props.name}</li>
    </NavigationMenu.Link>
  );
};

ListItem.displayName = "ListItem";
