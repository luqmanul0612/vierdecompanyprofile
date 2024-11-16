import ProductAndSolutionContainer from "@/containers/product-solution";
import classNames from "./product-solution.module.scss";
import Footer from "@/components/organisms/footer";

const ProductAndSolution = () => {
  return (
    <div className={classNames.main}>
      <ProductAndSolutionContainer />
      <Footer />
    </div>
  );
};

export default ProductAndSolution;
