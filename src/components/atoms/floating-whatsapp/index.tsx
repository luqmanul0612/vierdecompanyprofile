'use client';

import { contacts } from "@/constants/config";
import classNames from "./floating-whatsapp.module.scss";
import WhatsappIcon from "@/assets/icons/whatsapp-colorfull.svg";

const FloatingWhatsApp = () => {
  const onClickWhatsapp = () => {
    window.open(contacts.whatsapp, "_blank");
  };
  return (
    <div className={classNames.main} onClick={onClickWhatsapp}>
      <WhatsappIcon />
    </div>
  );
};

export default FloatingWhatsApp;
