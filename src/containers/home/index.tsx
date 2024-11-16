"use client";

import illustration1 from "@/assets/images/illustration-1.webp";
import bgImage1 from "@/assets/images/bg-image-1.webp";
import bgImage2 from "@/assets/images/bg-image-2.webp";
// import bgGeneral from "@/assets/images/bg-general.webp";
import illustration2 from "@/assets/images/illustration-2.webp";
import Button from "@/components/atoms/button";
import classNames from "./home.module.scss";
import Image from "next/image";
import { Check } from "lucide-react";
import alibabacloud from "@/assets/images/partnership/alibabacloud.webp";
import cloudhost from "@/assets/images/partnership/cloudhost.webp";
import doku from "@/assets/images/partnership/doku.webp";
import duitku from "@/assets/images/partnership/duitku.webp";
import finnet from "@/assets/images/partnership/finnet.webp";
import fortinet from "@/assets/images/partnership/fortinet.webp";
import indonet from "@/assets/images/partnership/indonet.webp";
import indosat from "@/assets/images/partnership/indosat.webp";
import mikrotik from "@/assets/images/partnership/mikrotik.webp";
import ofon from "@/assets/images/partnership/ofon.webp";
import rujie from "@/assets/images/partnership/rujie.webp";
import telkomsel from "@/assets/images/partnership/telkomsel.webp";
import tuv from "@/assets/images/partnership/tuv.webp";
import xl from "@/assets/images/partnership/xl.webp";

const partnership = [
  {
    key: "alibabacloud",
    image: alibabacloud,
  },
  {
    key: "cloudhost",
    image: cloudhost,
  },
  {
    key: "doku",
    image: doku,
  },
  {
    key: "duitku",
    image: duitku,
  },
  {
    key: "finnet",
    image: finnet,
  },
  {
    key: "fortinet",
    image: fortinet,
  },
  {
    key: "indonet",
    image: indonet,
  },
  {
    key: "indosat",
    image: indosat,
  },
  {
    key: "mikrotik",
    image: mikrotik,
  },
  {
    key: "ofon",
    image: ofon,
  },
  {
    key: "rujie",
    image: rujie,
  },
  {
    key: "telkomsel",
    image: telkomsel,
  },
  {
    key: "tuv",
    image: tuv,
  },
  {
    key: "xl",
    image: xl,
  },
];

const HomeContainer = () => {
  return (
    <>
      <div className={classNames.section1}>
        {/* <div className={classNames.sectionImage}>
          <Image src={bgGeneral} alt="logo" fill objectFit="cover" />
        </div> */}
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.text}>
              Driving Success
              <br />
              <span>Through Innovation</span>
            </p>
            <p className={classNames.description}>
              Customer oriented services in Fintech Aplication Development,
              Cyber Security, Digital Marketing and IT Managed Service.
            </p>
            <div className={classNames.buttonWrapper}>
              <Button>Talk With Us</Button>
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
        <div className={classNames.section2Image}>
          <Image
            src={bgImage1}
            alt="logo"
            fill
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.title}>
              Your Trusted IT and Technology Partner
            </p>
            <p className={classNames.description}>
              We’re a customer-orientated company with a comprehensive solution
              of innovative Managed IT services and solutions across Asia.{" "}
              <br />
              <br />
              With an extensive experience in delivering services in financial
              technology (fintech) application development, cyber security,
              digital marketing, and IT managed service, we have developed a
              growing reputation of the go-to technology experts.
            </p>
          </div>
        </div>
      </div>
      <div className={classNames.section3}>
        <div className={classNames.sectionImage}>
          <Image
            src={bgImage2}
            alt="logo"
            fill
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.title}>How Can Help You</p>
            <p className={classNames.description}>
              Our 4-core Managed IT services, from business-critical Cyber
              Security to long-term remote working solutions, provides you with
              a single-source solution that drives your business forward.
            </p>
            <Button className={classNames.button}>Our Service</Button>
          </div>
        </div>
      </div>
      <div className={classNames.section4}>
        {/* <div className={classNames.sectionImage}>
          <Image src={bgGeneral} alt="logo" fill objectFit="cover" />
        </div> */}
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.text}>
              <span>Why Partner With Us ?</span>
              <br />
              Technology Driven, Service Led
            </p>
            <p className={classNames.description}>
              Though technology-driven, we’re service-led. Our customers are our
              number one priority and we strive to deliver a service experience
              that’s second to none.
            </p>
            <ul className={classNames.whyList}>
              <li className={classNames.whyListItem}>
                <div className={classNames.icon}>
                  <Check size={25} strokeWidth={3} />
                </div>
                People before technology.
              </li>
              <li className={classNames.whyListItem}>
                <div className={classNames.icon}>
                  <Check size={25} strokeWidth={3} />
                </div>
                Dedicated to building trusted relationships.
              </li>
              <li className={classNames.whyListItem}>
                <div className={classNames.icon}>
                  <Check size={25} strokeWidth={3} />
                </div>
                Access to technology thought leaders.
              </li>
              <li className={classNames.whyListItem}>
                <div className={classNames.icon}>
                  <Check size={25} strokeWidth={3} />
                </div>
                Certified and experienced team.
              </li>
              <li className={classNames.whyListItem}>
                <div className={classNames.icon}>
                  <Check size={25} strokeWidth={3} />
                </div>
                Technical talk translated into plain English.
              </li>
            </ul>
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
      <div className={classNames.section5} id="partnership">
        {/* <div className={classNames.sectionImage}>
          <Image src={bgGeneral} alt="logo" fill objectFit="cover" />
        </div> */}
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.text}>
              <span>Our Partnership</span>
              <br />
              We Partner With Only The Best
            </p>
            <p className={classNames.description}>
              We work with well-known suppliers and partners around the globe to
              ensure that our customers experience best services and can rely on
              us as their trusted technology consultant.
            </p>
          </div>
          <div className={classNames.partnership}>
            {partnership.map((item) => (
              <Image
                key={item.key}
                src={item.image}
                alt={item.key}
                width={150}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
