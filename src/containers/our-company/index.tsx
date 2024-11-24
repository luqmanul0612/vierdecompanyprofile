"use client";

import illustration1 from "@/assets/images/our-company-illustration-1.webp";
import illustration2 from "@/assets/images/our-company-illustration-2.webp";
import illustration3 from "@/assets/images/our-company-illustration-3.webp";
import illustration4 from "@/assets/images/our-company-illustration-4.webp";
import illustration5 from "@/assets/images/our-company-illustration-5.webp";
import classNames from "./our-company.module.scss";
import Image from "next/image";
import Button from "@/components/atoms/button";

const OurCompanyContainer = () => {
  return (
    <>
      <div className={classNames.section1}>
        {/* <div className={classNames.sectionImage}>
          <Image src={bgImage1} alt="logo" fill objectFit="cover" />
        </div> */}
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.text}>Our Company</p>
            <p className={classNames.description}>
              VIERDE Innovation Labs Pte.Ltd is a customeroriented company that
              provides Fintech Aplication Development, Cyber Security, Digital
              Marketing and IT Managed Service. <br />
              <br />
              We have a team of energetic and experienced telecoms professionals
              that aim to deliver effective and efficient service.
            </p>
            <div className={classNames.buttonWrapper}>
              <Button>Get Schedule With Us</Button>
            </div>
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
      <div className={classNames.section2}>
        {/* <div className={classNames.sectionImage}>
          <Image src={bgImage2} alt="logo" fill objectFit="cover" />
        </div> */}
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p>Our Journey</p>
            <p>Reason to Choose Our Solution</p>
            <p>Already Collaboration with may clients</p>
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
      <div className={classNames.section3}>
        {/* <div className={classNames.sectionImage}>
          <Image src={bgImage2} alt="logo" fill objectFit="cover" />
        </div> */}
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p>Work With Us</p>
            <p>Collaboration for New Invention</p>
          </div>
          <div className={classNames.contentGrid}>
            <div className={classNames.gridItem}>
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
              <div className={classNames.gridItemContent}>
                <p>IT and Telecom - Savvy Team</p>
                <p>
                  We are experienced professionals that have served IT and
                  telecom industries for more than twelve years. We bring a
                  combination of technical and market knowledge to each of our
                  projects.
                </p>
              </div>
            </div>
            <div />
            <div />
            <div className={classNames.gridItem}>
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
              <div className={classNames.gridItemContent}>
                <p>Collaboration</p>
                <p>
                  Collaborate with multinational and Internasional companies,
                  which have expertise in IT solution and telecom carriers, we
                  tailor and match customers needs with effective and efficient
                  solution.
                </p>
              </div>
            </div>
            <div className={classNames.gridItem}>
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
              <div className={classNames.gridItemContent}>
                <p>Value to Customers</p>
                <p>
                  By focusing solely on areas where we excel, we aim to provide
                  a first-class service to our customers and bring value for our
                  customers by producing measurable results and cost savings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCompanyContainer;
