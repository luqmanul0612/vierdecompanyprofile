"use client";

import classNames from "./footer.module.scss";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import Image from "next/image";
import Logo from "@/assets/images/company-logo.webp";
import { useRouter } from "next/navigation";
import TextField from "@/components/atoms/textfield";
import Button from "@/components/atoms/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className={classNames.main}>
      <div className={classNames.stayUpdate}>
        <div>
          <div className={classNames.textWrapper}>
            <p className={classNames.title}>Subscribe Now</p>
          </div>
          <div className={classNames.inputWrapper}>
            <TextField placeholder="Your mail..." />
            <Button>Subscribe</Button>
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
              All Content on this website is protected by copyright and may not
              be used without permission from VIERDE Innovation Labs Pte.Ltd.
            </p>
            <div className={classNames.buttonWrapper}>
              <button>
                <Phone size={20} />
              </button>
              <button>
                <LinkedInIcon />
              </button>
              <button>
                <Mail size={20} />
              </button>
            </div>
          </div>
          <div className={classNames.contentRight}>
            <div className={classNames.menuList}>
              <p className={classNames.title}>Company</p>
              <ul>
                <li
                  className={classNames.linkItem}
                  onClick={() => router.push("/our-company")}
                >
                  <p>About Us</p>
                </li>
                <li
                  className={classNames.linkItem}
                  onClick={() => router.push("/product-and-solution")}
                >
                  <p>Product & Solution</p>
                </li>
                <li
                  className={classNames.linkItem}
                  onClick={() => router.push("/#partnership")}
                >
                  <p>Partnership</p>
                </li>
              </ul>
            </div>
            <div className={classNames.menuList}>
              <p className={classNames.title}>Contact</p>
              <ul>
                <li>
                  <div className={classNames.icon}>
                    <Phone size={18} />
                  </div>
                  <p>+65 8335 0738</p>
                </li>
                <li>
                  <div className={classNames.icon}>
                    <Mail size={18} />
                  </div>
                  <p>cs@vierde.sg</p>
                </li>
                <li>
                  <div className={classNames.icon}>
                    <MapPin size={18} />
                  </div>
                  <p>
                    10 Anson Road #22-02 Internasional Plaza Singapore 079903{" "}
                    <br />
                    <br />
                    250 North Bridge Road #12-02 Raffles City Tower Singapore
                    179101
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
