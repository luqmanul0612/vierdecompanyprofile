"use client";

import bgImage1 from "@/assets/images/client-support-bg-1.webp";
import bgImage2 from "@/assets/images/client-support-bg-2.webp";
import classNames from "./client-support.module.scss";
import Image from "next/image";

const ClientSupportContainer = () => {
  return (
    <>
      <div className={classNames.section1}>
        <div className={classNames.sectionImage}>
          <Image src={bgImage1} alt="logo" fill objectFit="cover" />
        </div>
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.text}>Client Support</p>
            <p className={classNames.description}>
              We’re here to help you get the best out of technology. Efficient,
              friendly and free technical and IT support.
            </p>
          </div>
        </div>
      </div>
      <div className={classNames.section2}>
        <div className={classNames.sectionImage}>
          <Image src={bgImage2} alt="logo" fill objectFit="cover" />
        </div>
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.description}>
              80% of customers say the experience a company provides is just as
              necessary as its products or services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientSupportContainer;
