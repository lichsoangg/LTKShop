import React from 'react';
import '../styles/contact.scss';
import Aboutbanner from '../components/abouts/Aboutbanner';
import BannerImg from '../assets/images/banner/banner1.jpg';
import {MdEmail} from 'react-icons/md';
import {SiMessenger} from 'react-icons/si';
import {AiFillInstagram} from 'react-icons/ai';
const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="lichsoang3008@gmail.com" target="_blank" rel="noreference noopener">
              <MdEmail />
            </a>
            <a
              href="https://www.facebook.com/lich.soang/"
              target="_blank"
              rel="noreference noopener"
            >
              <SiMessenger />
            </a>
            <a
              href="https://www.instagram.com/i._soangg/"
              target="_blank"
              rel="noreference noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
