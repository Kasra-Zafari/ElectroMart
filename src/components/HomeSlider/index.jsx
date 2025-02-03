import React from 'react';
import Slider from 'react-slick';
import classes from './index.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../../img/baner2.jpg';
import banner2 from '../../img/baner1.jpg';
import banner3 from '../../img/baner3.jpg';

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const products = [
    { id: 1, name: 'Product 1', image: banner1, link: '/product/14' },
    { id: 2, name: 'Product 2', image: banner2, link: '/product/4' },
    { id: 3, name: 'Product 3', image: banner3, link: '/product/8' },
  ];

  return (
    <div className={classes.sliderContainer}>
      <Slider {...settings}>
        {products.map(product => (
          <div key={`slide-${product.id}`} className={classes.slide}>
            <img src={product.image} alt={product.name} className={classes.image} />
            <button className={classes.button} onClick={() => window.location.href = product.link}>
              View Product
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
