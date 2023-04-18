import {useState} from "react";
import {products} from "../../assets/data/data";
import Heading from "../common/Heading";
import ProductItems from "./ProductItem";

const Product = () => {
  const [cartItems, setCartItems] = useState(products ?? []);
  return (
    <>
      <section className="product">
        <div className="container">
          <Heading
            title="Sản phẩm nổi bật"
            desc="Cập nhật những mẫu hot nhất tuần. Những sản phẩm này đáng để bạn chú ý."
          />

          <ProductItems cartItems={cartItems} />
        </div>
      </section>
    </>
  );
};

export default Product;
