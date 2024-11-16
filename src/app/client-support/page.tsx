import classNames from "./client-support.module.scss";
import Footer from "@/components/organisms/footer";
import ClientSupportContainer from "@/containers/client-support";

const ClientSupport = () => {
  return (
    <div className={classNames.main}>
      <ClientSupportContainer />
      <Footer />
    </div>
  );
};

export default ClientSupport;
