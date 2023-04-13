import React, {useState} from "react";
import {FiShoppingBag, FiSearch} from "react-icons/fi";
import {AiOutlineHeart, AiOutlineClose} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addCart, likeCart} from "../../redux/slice/cartSlice";

const ProductItems = ({cartItems}) => {
  const dispatch = useDispatch();
  const addToCart = (e) => {
    dispatch(addCart(e));
  };
  const likeToCart = (e) => {
    dispatch(likeCart(e));
  };
  const [openImage, setOpenImage] = useState(false);
  const [img, setImg] = useState("");
  const onOpenImage = (src) => {
    setImg(src);
    setOpenImage(true);
  };

  return (
    <>
      <div className="product_items">
        {cartItems.map((items) => (
          <div className="box" key={items.id}>
            <div className="img">
              <Link to={`/cart/${items.id}`}>
                <img src={items.cover} alt="" />
              </Link>
              <div className="overlay">
                <button className="button" onClick={() => addToCart(items)}>
                  <FiShoppingBag />
                </button>
                <button className="button" onClick={() => likeToCart(items)}>
                  <AiOutlineHeart />
                </button>
                <button className="button" onClick={() => onOpenImage(items.cover)}>
                  <FiSearch />
                </button>
              </div>
            </div>
            <div className="details">
              <h3>{items.title}</h3>
              <p>{items.author}</p>
              <h4>${items.price}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className={openImage ? "modelOpen" : "modelClose"}>
        <div className="onClickImage">
          <img src={img} alt="" />
          <button className="button" onClick={() => setOpenImage(false)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItems;
