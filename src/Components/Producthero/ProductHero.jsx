import React from 'react';
import { motion } from 'framer-motion';
import './Productmain.css';

const ProductHero = ({ img1, heading, img2, heading2 }) => {
  return (
    <motion.div className='wrapper-main-product-sec-image'>
      <motion.h4
        initial={{ x: '-100px', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
        viewport={{ once: true }}
        className="main-heading-align-top-center text-black-tt my-5 pl-0 ml-0"
      >
        {heading2}
      </motion.h4>
      <div className="image-heading-text w-[100%] relative">
        <motion.img
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
          viewport={{ once: true }}
          src={img1}
          alt=""
        />
        <div className="heading-wrapper-abs-container">
          <motion.h3
            initial={{ x: '-100px', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
            viewport={{ once: true }}
            className="main-heading-align-top-center"
          >
            {heading}
          </motion.h3>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
          viewport={{ once: true }}
          className='small-image-align-bottom-center'
          src={img2}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default ProductHero;
