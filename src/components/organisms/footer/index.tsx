"use client";

import classNames from "./footer.module.scss";
import FacebookIcon from "@/assets/icons/facebook.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import XIcon from "@/assets/icons/x-logo.svg";
import Image from "next/image";
import Logo from "@/assets/images/company-logo.webp";
import { FC } from "react";
import { footerData } from "@/constants/config";
import { useRouter } from "next/navigation";
import TextField from "@/components/atoms/textfield";
import Button from "@/components/atoms/button";

const links = [
  {
    name: "Linkedin",
    icon: <LinkedInIcon />,
    path: "#",
  },
  {
    name: "X",
    icon: <XIcon />,
    path: "#",
  },
  {
    name: "Facebook",
    icon: <FacebookIcon />,
    path: "#",
  },
];

const Footer = () => {
  return (
    <footer className={classNames.main}>
      <div className={classNames.stayUpdate}>
        <div>
          <div className={classNames.textWrapper}>
            <p className={classNames.title}>Stay up to date</p>
            <p className={classNames.description}>
              Sign up to our e-newsletter and get bite-sized tech tips, our
              latest news and industry insights.
            </p>
          </div>
          <div className={classNames.inputWrapper}>
            <TextField placeholder="Your email address" />
            <Button variant="secondary">Next</Button>
          </div>
        </div>
      </div>
      <div className={classNames.content}>
        <div>
          <div className={classNames.contentLeft}>
            <Image
              src={Logo}
              alt="logo"
              width={200}
              className={classNames.logo}
            />
            <p className={classNames.text}>
              Aztek is one of the UK&apos;s leading and most progressive Managed
              Service Providers, providing customer-focused IT, Cyber Security
              and Communications solutions to help transform and grow your
              business.
            </p>
          </div>
          <div className={classNames.contentRight}>
            <MenuList
              title={footerData.services.title}
              items={footerData.services.items}
            />
            <MenuList
              title={footerData.about.title}
              items={footerData.about.items}
            />
            <MenuList
              title={footerData.helpSupport.title}
              items={footerData.helpSupport.items}
            />
          </div>
        </div>
      </div>
      <div className={classNames.info}>
        <div>
          <p>© 2024 Aztek. Managed IT Support & Communications.</p>
          <div className={classNames.links}>
            {links.map((item) => (
              <div key={item.name} className={classNames.linkItem}>
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

type MenuListProps = {
  title: string;
  items: { name: string; path: string }[];
};

const MenuList: FC<MenuListProps> = ({ items, title }) => {
  const router = useRouter();
  return (
    <div className={classNames.menuList}>
      <p className={classNames.title}>{title}</p>
      <ul>
        {items.map((item) => (
          <li key={item.path} onClick={() => router.push(item.path)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
