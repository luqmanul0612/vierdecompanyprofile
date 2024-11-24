"use client";

import { AlignRight, ChevronDown, X } from "lucide-react";
import classNames from "./navbar.module.scss";
import Image from "next/image";
import Logo from "@/assets/images/company-logo.webp";
import { navbarMenu } from "@/constants/config";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React, { FC, useEffect } from "react";
import { Unarray } from "@/utils/styles/types";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import * as Dialog from "@radix-ui/react-dialog";

const Navbar = () => {
  const [active, setActive] = React.useState(false);
  useEffect(() => {
    if (window.scrollY > 90) setActive(true);
    else setActive(false);
    document.addEventListener("scroll", () => {
      if (window.scrollY > 90) setActive(true);
      else setActive(false);
    });
  }, []);

  const router = useRouter();
  return (
    <div className={clsx(classNames.main, { [classNames.active]: active })}>
      <div className={classNames.content}>
        <div className={classNames.navbar}>
          <div>
            <div className={classNames.logo} onClick={() => router.push("/")}>
              <Image src={Logo} alt="logo" />
            </div>
            <MobileMenu />
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
  const router = useRouter();
  const onClickItem = () => {
    if (!props.items?.length) {
      router.push(props.path);
    }
  };
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
      <div onClick={onClickItem}>{props.name}</div>
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

const MobileMenu = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild className={classNames.mobileMenuTrigger}>
      <button>
        <AlignRight />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Make changes to your profile here. Click save when
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
        >
          <Dialog.Close asChild>
            <button className="Button green">Save changes</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <X />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
