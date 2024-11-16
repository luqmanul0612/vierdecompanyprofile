"use client";

import illustration1 from "@/assets/images/product-solution-illustration-1.webp";
import illustration2 from "@/assets/images/product-solution-illustration-2.webp";
import illustration3 from "@/assets/images/product-solution-illustration-3.webp";
import illustration4 from "@/assets/images/product-solution-illustration-4.webp";
import illustration5 from "@/assets/images/product-solution-illustration-5.webp";
import classNames from "./product-solution.module.scss";
import Image from "next/image";

const ProductAndSolutionContainer = () => {
  return (
    <>
      <div className={classNames.section1} id="section1">
        {/* <div className={classNames.sectionImage}>
          <Image src={bgGeneral} alt="logo" fill objectFit="cover" />
        </div> */}
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.text}>
              Financial Technology (Fintech) Application Development
            </p>
            <p className={classNames.description}>
              Financial application needs special care and careful development
              as it is critical to any businesses. Our developers team
              experience in several financial application ranging from
              electronic wallet (e-wallet), payment gateway, and remittance
              services.
            </p>
          </div>
          <div className={classNames.illustration}>
            <div>
              <Image
                src={illustration1}
                alt="illustration"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classNames.section2} id="section2">
        {/* <div className={classNames.sectionImage}>
          <Image src={bgGeneral} alt="logo" fill objectFit="cover" />
        </div> */}
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.text}>Network and Connectivity Solution</p>
            <p className={classNames.description}>
              Whether it’s our remote helpdesk support giving you peace of mind,
              or our 24/7 network operating center will help customers once
              quick response needed. We’ll set you up with a cost- effective IT
              Support solution tailored for your business needs.
            </p>
          </div>
          <div className={classNames.illustration}>
            <div>
              <Image
                src={illustration2}
                alt="illustration"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classNames.section3} id="section3">
        {/* <div className={classNames.sectionImage}>
          <Image src={bgGeneral} alt="logo" fill objectFit="cover" />
        </div> */}
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.text}>Cyber Security Solution</p>
            <p className={classNames.description}>
              Our cyber security solutions, from Penetration Testing (VAPT) to
              Security Operation Center (SOC) is tailored to serve businesses of
              all sizes – protecting you and your company from cyber attacks.
            </p>
          </div>
          <div className={classNames.illustration}>
            <div>
              <Image
                src={illustration3}
                alt="illustration"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classNames.section4} id="section4">
        {/* <div className={classNames.sectionImage}>
          <Image src={bgGeneral} alt="logo" fill objectFit="cover" />
        </div> */}
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.text}>Web and Application Development</p>
            <p className={classNames.description}>
              Stop using vulnerable stacks that danger your business. We cater a
              custom web based on customers requested. We have developed tens of
              websites and corporate application such as human resource
              information system and inventory management.
            </p>
          </div>
          <div className={classNames.illustration}>
            <div>
              <Image
                src={illustration4}
                alt="illustration"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classNames.section5} id="section5">
        {/* <div className={classNames.sectionImage}>
          <Image src={bgGeneral} alt="logo" fill objectFit="cover" />
        </div> */}
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.text}>Digital Marketing</p>
            <p className={classNames.description}>
              Stop wasting your money on ads that do not give return. A proper
              digital marketing will maximize your return by targeting to proper
              target, time, and space.
            </p>
          </div>
          <div className={classNames.illustration}>
            <div>
              <Image
                src={illustration5}
                alt="illustration"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAndSolutionContainer;
