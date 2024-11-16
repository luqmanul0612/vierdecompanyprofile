import classNames from "./contact-us.module.scss";
import Footer from "@/components/organisms/footer";
import ContactUsContainer from "@/containers/contact-us";

const ContactUs = () => {
  return (
    <div className={classNames.main}>
      <ContactUsContainer />
      <Footer />
    </div>
  );
};

export default ContactUs;
