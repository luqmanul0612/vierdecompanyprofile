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
import * as Collapsible from "@radix-ui/react-collapsible";

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

const MobileMenu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild className={classNames.mobileMenuTrigger}>
        <button>
          <AlignRight size={28} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={classNames.DialogOverlay} />
        <Dialog.Content className={classNames.DialogContent}>
          <Dialog.Title style={{ display: "none" }} />
          <Dialog.Description style={{ display: "none" }} />
          <div className={classNames.menu}>
            {navbarMenu.map((item) => (
              <MobileMenuItem
                key={item.path}
                {...item}
                onClose={() => setOpen(false)}
              />
            ))}
          </div>
          <Dialog.Close asChild>
            <button className={classNames.IconButton} aria-label="Close">
              <X size={30} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

type MobileMenuItemProps = Unarray<typeof navbarMenu> & {
  onClose: () => void;
  className?: string;
};
const MobileMenuItem: FC<MobileMenuItemProps> = (props) => {
  const router = useRouter();
  const onClickItem = () => {
    if (!props.items?.length) {
      router.push(props.path);
      props.onClose();
    }
  };
  if (props.items?.length)
    return (
      <Collapsible.Root className={classNames.mobileMenuItemCollapible}>
        <Collapsible.Trigger asChild>
          <div
            className={clsx(classNames.mobileMenuItem, props.className)}
            onClick={onClickItem}
          >
            {!!props.items?.length && <ChevronDown size={20} aria-hidden />}
            <div>{props.name}</div>
          </div>
        </Collapsible.Trigger>
        <Collapsible.Content className={classNames.mobileMenuContent}>
          <div>
            {props.items?.map((subItem) => (
              <MobileMenuItem
                key={subItem.path}
                {...subItem}
                className={classNames.subItem}
                onClose={props.onClose}
              />
            ))}
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    );
  return (
    <div
      className={clsx(classNames.mobileMenuItem, props.className)}
      onClick={onClickItem}
    >
      {!!props.items?.length && <ChevronDown size={20} aria-hidden />}
      <div>{props.name}</div>
    </div>
  );
};
