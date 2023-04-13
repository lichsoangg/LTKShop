import React from "react";
import BannerImg2 from "../../assets/images/banner/banner2.jpg";
import BannerImg3 from "../../assets/images/banner/banner3.jpg";
const Aboutbanner = ({title, image, children}) => {
  return (
    <>
      <header className="banner">
        <div className="banner__container">
          <div className="banner__container-bg">
            <img src={image} alt="banner background" />
          </div>
          <div className="banner__content">
            <h2>{title}</h2>
            <p>{children}</p>
          </div>
        </div>
      </header>
      <section className="about__story container">
        <div className="container about__story-container">
          <div className="about__section-img">
            <img src={BannerImg2} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              LTK_Shop là một nhãn hiệu thời trang được sáng lập bởi nhà thiết kế Phạm Đức Kiệt.
            </p>
            <p>
              {" "}
              HTK_Shop là trang thương mại điện tử với phương châm "Đồng hành cùng phong cách thời
              trang của bạn" sẽ là nơi mua sắm an toàn và uy tín, bởi chúng tôi luôn đề cao tiêu chí
              mang đến cho quý khách những sản phẩm chất lượng nhất với giá cả luôn phải chăng.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision container">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              LTK_Shop là một nhãn hiệu thời trang được sáng lập bởi nhà thiết kế Phạm Đức Kiệt.
            </p>
            <p>
              HTK_Shop là trang thương mại điện tử với phương châm "Đồng hành cùng phong cách thời
              trang của bạn" sẽ là nơi mua sắm an toàn và uy tín, bởi chúng tôi luôn đề cao tiêu chí
              mang đến cho quý khách những sản phẩm chất lượng nhất với giá cả luôn phải chăng.
            </p>
          </div>
          <div className="about__section-img">
            <img src={BannerImg3} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutbanner;
