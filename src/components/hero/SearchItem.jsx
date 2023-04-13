import React from "react";
import {FiShoppingBag, FiSearch} from "react-icons/fi";
import {AiOutlineHeart} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {addCart, likeCart} from "../../redux/slice/cartSlice";

import r from "../../assets/images/product/1-1-1.jpg";

// all copy past from productItem page

const SearchItems = ({products, value, onSearch}) => {
  const dispatch = useDispatch();

  const addToCart = (e) => {
    dispatch(addCart(e));
  };
  const likeToCart = (e) => {
    dispatch(likeCart(e));
  };

  return (
    <>
      <section className="searchItems">
        <div className="product_items">
          {products
            .filter((items) => {
              const searchkey = value.toLowerCase();
              const title = items.title.toLowerCase();

              return searchkey && title.startsWith(searchkey) && title !== searchkey;
            })
            .slice(0, 10)
            .map((items) => (
              <div className="box" onClick={() => onSearch(items.title)} key={items.id}>
                <div className="img">
                  <img src={r} alt="" />
                  <div className="overlay">
                    <button className="button" onClick={() => addToCart(items)}>
                      <FiShoppingBag />
                    </button>
                    <button className="button" onClick={() => likeToCart(items)}>
                      <AiOutlineHeart />
                    </button>
                    <button className="button">
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
      </section>
    </>
  );
};

export default SearchItems;
