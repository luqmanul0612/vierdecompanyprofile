"use client";

import { useRouter } from "next/navigation";
import heroImageSection1 from "@/assets/images/homepage-hero-image-1-opt.jpg";
import employeeImage1 from "@/assets/images/image-employee-1.jpg";
import employeeImage2 from "@/assets/images/image-employee-2.jpg";
import employeeProfile1 from "@/assets/images/image-employee-profile-1.jpg";
import employeeProfile2 from "@/assets/images/image-employee-profile-2.jpg";
import employeeProfile3 from "@/assets/images/image-employee-profile-3.jpg";
import Button from "@/components/atoms/button";
import classNames from "./home.module.scss";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { services } from "@/constants/config";
import TextContent from "@/components/molecules/text-quote";
import clsx from "clsx";

const HomeContainer = () => {
  const router = useRouter();
  return (
    <>
      <div className={classNames.section1}>
        <div className={classNames.section1Image}>
          <Image src={heroImageSection1} alt="logo" fill objectFit="cover" />
        </div>
        <div className={classNames.content}>
          <p className={classNames.text}>
            Driving Success
            <br />
            Through Technology
          </p>
          <p className={classNames.description}>
            Customer focused IT Support, Cyber Security and Communications
            solutions, from one of the UK’s leading Managed Service Providers.
          </p>
          <div className={classNames.buttonWrapper}>
            <Button endIcon={<ChevronRight size={18} />} variant="secondary">
              Let&apos;s Talk About Your Business
            </Button>
            <Button endIcon={<ChevronRight size={18} />} variant="secondary">
              Success Stories
            </Button>
          </div>
        </div>
      </div>
      <div className={classNames.section2}>
        <div className={classNames.content}>
          <div className={classNames.illustration}>
            <Image src={employeeImage1} alt="logo" fill objectFit="cover" />
          </div>
          <div className={classNames.contentSection}>
            <TextContent
              title="YOUR TECHNOLOGY PARTNER"
              subTitle="Your Trusted IT and Technology Partner"
              description={
                <>
                  We’re a customer-orientated Managed Service Provider; a single
                  source solution of innovative Managed IT services and
                  solutions across the UK.
                  <br />
                  <br /> With comprehensive expertise in all things IT, cyber
                  security, communications and business software, we have
                  developed a growing reputation of the go-to technology
                  experts.
                </>
              }
            />
          </div>
        </div>
      </div>
      <div className={classNames.section3}>
        <div className={classNames.content}>
          <p className={classNames.bgText}>OUR SERVICES</p>
          <p className={classNames.title}>OUR SERVICES</p>
          <p className={classNames.subTitle}>How We Can Help You</p>
          <p className={classNames.description}>
            Our wide-ranging Managed IT services, from business-critical Cyber
            Security to long-term remote working solutions, provides you with a
            single-source solution that drives your business forward.
          </p>
          <div className={classNames.serviceWrapper}>
            {services.map((service) => (
              <div className={classNames.service} key={service.path}>
                <div className={classNames.serviceImage}>
                  <service.icon />
                </div>
                <p className={classNames.serviceName}>{service.name}</p>
                <p className={classNames.serviceDescription}>
                  {service.description}
                </p>
                <Button
                  endIcon={<ChevronRight size={18} />}
                  className={classNames.button}
                  onClick={() => router.push(service.path)}
                >
                  Find Out More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={classNames.section4}>
        <div className={classNames.content}>
          <div className={classNames.illustration}>
            <Image src={employeeImage2} alt="logo" fill objectFit="cover" />
          </div>
          <div className={classNames.contentSection}>
            <TextContent
              title="Why Partner With Us"
              subTitle="Technology Driven, Service Led"
              description="
                Though technology-driven, we’re service-led. Our customers are
                our number one priority and we strive to deliver a service
                experience that’s second to none."
            />
            <ul className={classNames.whyList}>
              <li className={classNames.whyListItem}>
                <ArrowRight size={30} />
                People before technology.
              </li>
              <li className={classNames.whyListItem}>
                <ArrowRight size={30} />
                Dedicated to building trusted relationships.
              </li>
              <li className={classNames.whyListItem}>
                <ArrowRight size={30} />
                Access to technology thought leaders.
              </li>
              <li className={classNames.whyListItem}>
                <ArrowRight size={30} />
                Certified and experienced team.
              </li>
              <li className={classNames.whyListItem}>
                <ArrowRight size={30} />
                Technical talk translated into plain English.
              </li>
            </ul>
            <Button
              endIcon={<ChevronRight size={18} />}
              className={classNames.button}
              onClick={() => router.push("/about-us")}
            >
              More About Us
            </Button>
          </div>
        </div>
      </div>
      <div className={classNames.section5}>
        <div className={classNames.content}>
          <p className={classNames.bgText}>Testimonials</p>
          <div className={classNames.testimonialWrapper}>
            <TextContent
              className={classNames.textContent}
              title="Testimonials"
              subTitle="Their Words, Not Ours..."
              description="From the maritime industry to mineral explorers, we’ve worked with diverse clients to provide a new perspective on how technology can drive innovation."
            />
            <div className={classNames.testimonial1}>
              <div
                className={clsx(
                  classNames.testimonialCard,
                  classNames.secondary
                )}
              >
                <p className={classNames.testimonialText}>
                  {`"Aztek gets what we do as a business, without us even having to explain it! The longer we've been with them, the more they have got to know our systems. And it's not just their IT - their full range of development services have helped drive our wider business objectives."`}
                </p>
                <div className={classNames.testimonialInfo}>
                  <div className={classNames.testimonialImage}>
                    <Image
                      src={employeeProfile1}
                      alt="logo"
                      fill
                      objectFit="cover"
                    />
                  </div>
                  <div className={classNames.testimonialUser}>
                    <p>Byron Petzer</p>
                    <p>Keter UK</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames.testimonial2}>
              <div className={classNames.testimonialCard}>
                <p className={classNames.testimonialText}>
                  {`"We found Aztek's pricing structure revolutionary. Instead of the headache of hourly billing and hidden costs, their transparent, fixed price structure meant we knew exactly what to expect and could budget effectively."`}
                </p>
                <div className={classNames.testimonialInfo}>
                  <div className={classNames.testimonialImage}>
                    <Image
                      src={employeeProfile2}
                      alt="logo"
                      width={100}
                      height={100}
                      className={classNames.testimonialImage}
                    />
                  </div>
                  <div className={classNames.testimonialUser}>
                    <p>Byron Petzer</p>
                    <p>Keter UK</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames.testimonial3}>
              <div className={classNames.testimonialCard}>
                <p className={classNames.testimonialText}>
                  {`""Aztek are more than our IT support company - they are an extension of our business. From building our IT infrastructure to looking at new ways we can innovate with technology, I cannot emphasise enough how pleased we are to be partnered with them."`}
                </p>
                <div className={classNames.testimonialInfo}>
                  <div className={classNames.testimonialImage}>
                    <Image
                      src={employeeProfile3}
                      alt="logo"
                      width={100}
                      height={100}
                      className={classNames.testimonialImage}
                    />
                  </div>
                  <div className={classNames.testimonialUser}>
                    <p>Byron Petzer</p>
                    <p>Keter UK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
