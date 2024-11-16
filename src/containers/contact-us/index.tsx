"use client";

import illustration1 from "@/assets/images/contact-us-illustration-1.webp";
import bgImage1 from "@/assets/images/contact-us-bg-1.webp";
import bgImage2 from "@/assets/images/contact-us-bg-2.webp";
import Button from "@/components/atoms/button";
import classNames from "./contact-us.module.scss";
import Image from "next/image";
import { Check } from "lucide-react";
import TextField from "@/components/atoms/textfield";
import TextArea from "@/components/atoms/textarea";

const reasonList = [
  {
    key: 1,
    text: "If you’re struggling to keep up with new technology but want to grow.",
  },
  {
    key: 2,
    text: "If you’re looking for fast, reliable connections that are cost-effective.",
  },
  {
    key: 3,
    text: "If you want to transform your business communications with a cloud-based phone system.",
  },
  {
    key: 4,
    text: "Communications with a cloud-based phone system. ",
  },
  {
    key: 5,
    text: "If you’re worried about the harmful impacts of a cyber-security attack.",
  },
  {
    key: 6,
    text: "If you want to set your business up for long-term remote working.",
  },
];

const ContactUsContainer = () => {
  return (
    <>
      <div className={classNames.section1}>
        <div className={classNames.sectionImage}>
          <Image src={bgImage1} alt="logo" fill objectFit="cover" />
        </div>
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.text}>Contact Us</p>
            <p className={classNames.description}>
              Got a question about our Managed IT services? Talk to us today and
              we’ll help align our services with your needs.
            </p>
            <div className={classNames.buttonWrapper}>
              <Button>Talk With Us</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames.section2}>
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.text}>
              <span>Why Partner With Us ?</span>
              <br />
              {"We're Here To Help"}
            </p>
            <p className={classNames.description}>
              Want to know more about our customer-focused IT solutions? Or
              maybe you simply need some advice. Here are some ideas on what you
              can discuss with our experts:
            </p>
            <ul className={classNames.whyList}>
              {reasonList.map((item) => (
                <li key={item.key} className={classNames.whyListItem}>
                  <div className={classNames.icon}>
                    <Check size={25} strokeWidth={3} />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
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
      <div className={classNames.section3}>
        <div className={classNames.sectionImage}>
          <Image src={bgImage2} alt="logo" fill objectFit="cover" />
        </div>
        <div className={classNames.content}>
          <div className={classNames.contentSection}>
            <p className={classNames.text}>Send us a Message</p>
            <p className={classNames.description}>
              Fill out the form below and we’ll get back to you within a couple
              of hours.
            </p>
            <form className={classNames.form}>
              <TextField label="Your Name" placeholder="" />
              <TextField label="Your Email Address" placeholder="" />
              <TextField label="Preferred Contact" placeholder="" />
              <TextField label="Company Name" placeholder="" />
              <TextArea label="Message (optional)" placeholder="" />
              <div className={classNames.buttonWrapper}>
                <Button>Talk With Us</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsContainer;
