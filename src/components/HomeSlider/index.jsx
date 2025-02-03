import React from 'react';
import Slider from 'react-slick';
import classes from './index.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const products = [
    { id: 1, name: 'Product 1', image: 'https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png', link: '/product/1' },
    { id: 2, name: 'Product 2', image: 'https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png', link: '/product/2' },
    { id: 3, name: 'Product 3', image: 'https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png', link: '/product/3' },
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
