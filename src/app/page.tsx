import classNames from "./page.module.scss";
import Footer from "@/components/organisms/footer";
import HomeContainer from "@/containers/home";

export default function Home() {
  return (
    <div className={classNames.main}>
      <HomeContainer />
      <Footer />
    </div>
  );
}
