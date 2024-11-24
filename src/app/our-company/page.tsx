import classNames from "./our-company.module.scss";
import Footer from "@/components/organisms/footer";
import OurCompanyContainer from "@/containers/our-company";

const OurCompany = () => {
  return (
    <div className={classNames.main}>
      <OurCompanyContainer />
      <Footer />
    </div>
  );
};

export default OurCompany;
