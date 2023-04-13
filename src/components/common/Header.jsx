import React, {useRef, useState} from "react";
import logo from "../../assets/images/logo.svg";
import cartimg from "../../assets/images/cart.png";
import {BiSearch} from "react-icons/bi";
import {BsBagCheck} from "react-icons/bs";
import {RiUser3Line} from "react-icons/ri";
import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import {navlist} from "../../assets/data/data";
import {connect, useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import lg from "../../assets/images/ltk.jpg";
import {IoMdAddCircleOutline} from "react-icons/io";
import {addCart, likeCart, removeCartItems, rmCart} from "../../redux/slice/cartSlice";

const Header = () => {
  // navbar
  const [mobile, setMobile] = useState(false);
  // cartopen and close
  const [cartList, setCartList] = useState(false);
  const [cartLike, setCartLike] = useState(false);
  const handleClose = () => {
    setCartList(null);
  };
  const addQty = (e) => {
    dispatch(addCart(e));
  };
  const minusQty = (e) => {
    dispatch(rmCart(e));
  };
  // scroll navbar
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  // cart add in shop
  const getdata = useSelector((state) => state.cartReducer.carts);
  const getlike = useSelector((state) => state.cartReducer.likes);
  // delete cart

  const dispatch = useDispatch();
  const delet = (id) => {
    dispatch(removeCartItems(id));
  };

  // total prcie
  const [price, setPrice] = useState(0);

  const totals = () => {
    let price = 0;
    getdata.map((e, i) => {
      price = parseFloat(e.price) * e.qty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    totals();
  }, [totals]);
  let carRef = useRef();
  let likeRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!carRef.current.contains(event.target)) {
        setCartList(false);
      }
      if (!likeRef.current.contains(event.target)) {
        setCartLike(false);
      }
    });
  });
  const handleCloses = () => {
    setCartList(null);
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <div className="toggle">
              <button onClick={() => setMobile(!mobile)}>
                {mobile ? (
                  <AiOutlineClose className="close heIcon" />
                ) : (
                  <AiOutlineMenu className="open heIcon" />
                )}
              </button>
            </div>
            <div className="left">
              <Link to="/">
                <img src={lg} alt="logo" />
              </Link>
            </div>
            <div className="center">
              <ul className={mobile ? "mobile-nav" : "menu"}>
                {navlist.map((nav, i) => (
                  <li key={i}>
                    <Link to={nav.path}>{nav.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="right">
            <div className="right_search">
              <input type="text" placeholder="Search Products..." />
              <BiSearch className="serachIcon heIcon" />
            </div>
            <div ref={likeRef} className="right_user ">
              <RiUser3Line className="userIcon heIcon" />
              <AiOutlineHeart className="userIcon heIcon" onClick={() => setCartLike(!cartLike)} />
              <div className={cartLike ? "showCart" : "hideCart"}>
                {getlike?.length ? (
                  <section className="details">
                    <div className="details_title">
                      <h3>Photo</h3>
                      <p>Product Name</p>
                    </div>
                    {getdata.map((e) => (
                      <div className="details_content">
                        <div className="details_content_img">
                          <Link to={`/cart/${e.id}`} onClick={handleCloses}>
                            <img src={e.cover} alt="" />
                          </Link>
                        </div>
                        <div className="details_content_detail">
                          <div className="details_content_detail_price">
                            <p>{e.title.slice(0, 20)}...</p>
                            <p>Price : ${e.price}</p>
                          </div>
                        </div>
                        <div className="details_content_detail_icon">
                          <i>
                            <AiOutlineDelete onClick={() => delet(e.id)} />
                          </i>
                        </div>
                      </div>
                    ))}
                  </section>
                ) : (
                  <div className="empty">
                    <p>Ban chua thich </p>
                    <img src={cartimg} alt="" />
                  </div>
                )}
              </div>
            </div>
            <div ref={carRef} className="right_card">
              <button className="button" onClick={() => setCartList(!cartList)}>
                <BsBagCheck className="shop heIcon" />
                Giỏ hàng<span> ({getdata?.length})</span>
              </button>
              <div className={cartList ? "showCart" : "hideCart"}>
                {getdata?.length ? (
                  <section className="details">
                    <div className="details_title">
                      <h3>Photo</h3>
                      <p>Product Name</p>
                    </div>
                    {getdata.map((e) => (
                      <div className="details_content">
                        <div className="details_content_img">
                          <Link to={`/cart/${e.id}`} onClick={handleCloses}>
                            <img src={e.cover} alt="" />
                          </Link>
                        </div>
                        <div className="details_content_detail">
                          <div className="details_content_detail_price">
                            <p>{e.title.slice(0, 20)}...</p>
                            <p>Price : ${e.price}</p>
                            <p>Quantity : {e.qty}</p>
                            <IoMdAddCircleOutline onClick={() => addQty(e)} />
                            <AiOutlineMinusCircle onClick={() => minusQty(e)} />
                          </div>
                        </div>
                        <div className="details_content_detail_icon">
                          <i onClick={() => delet(e.id)}>
                            <AiOutlineDelete />
                          </i>
                        </div>
                      </div>
                    ))}
                    <div className="details_total">
                      <h4>Total : ${price}</h4>
                    </div>
                  </section>
                ) : (
                  <div className="empty">
                    <p>Your cart is empty</p>
                    <img src={cartimg} alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    amount: state.amount,
  };
};
connect(mapStateToProps)(Header);

export default Header;
