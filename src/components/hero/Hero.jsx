import React, {useState} from 'react';
import {BiSearch} from 'react-icons/bi';
import {products} from '../../assets/data/data';
import SearchItems from './SearchItem';

const Hero = () => {
  // search
  const [value, setValue] = useState('');
  const onChanage = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (key) => {
    setValue(key);
    console.log('search', key);
  };
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>
            <label>
              Hơn <span>6,500</span> Sản phẩm
            </label>
            <br />
            <label>
              Thời trang nam, <span>Thời trang nữ, </span> Đồ cho bé
            </label>
          </h1>
          <p>Mang đến cho khách hàng trải nghiệm tốt nhất.</p>
          <div className="search">
            <span>Tất cả </span>
            <hr />
            <input
              type="text"
              placeholder="Nhập để tìm kiếm..."
              onChange={onChanage}
              value={value}
            />
            <button onClick={() => onSearch(value)}>
              <BiSearch className="serachIcon heIcon" />
            </button>
          </div>
          <SearchItems products={products} value={value} onSearch={onSearch} />
          <p>Ví dụ: Áo somi, Quần jean, Váy nữ, Quần short…</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
