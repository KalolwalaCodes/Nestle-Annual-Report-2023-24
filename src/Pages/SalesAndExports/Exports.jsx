import React from "react";
import { motion } from "framer-motion";

const Exports = () => {
  return (
    <div className="wrapper-main-product-portfolio">
      <div className="chairman-message-wrapper">
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            className="bold-heading-text text-black font-bold mt-4"
          >
            Exports
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            className="w-full"
          >
            <img className="w-full" src="./Sales/Artboard 520.webp" alt="" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            className="flex sm:flex-col lg:flex-row mt-8 gap-8"
          >
            <div className="sm:w-full md-w-[60%]">
              <p className="normal-paragraph-container">
                Your Company’s export business delivered good growth. Prepared
                dishes and cooking aids, led by the iconic MAGGI Noodles and
                Sauces, witnessed an increased demand in key markets such as
                Canada, the United States of America, Australia, New Zealand,
                and Singapore. MAGGI Noodles also expanded its footprint to
                newer markets such as Thailand and the Caribbean Islands,
                demonstrating the brand's global appeal with the Indian
                diaspora.
                <br />
                NESCAFÉ was a key contributor to growth in exports. NESCAFÉ
                SUNRISE continued to gain traction in established markets such
                as Singapore and Taiwan, and achieved a significant milestone
                with its first ever export to Canada. Additionally, NESCAFÉ
                Intenso roasted beans forayed into new markets in Maldives and
                Sri Lanka.
              </p>
              <p className="normal-paragraph-container">
                Your Company pursued alternative route to market through
                third-party business partners to ensure greater agility and
                efficacy in operations. This expedited delivery and enhanced
                operational efficiency.
              </p>
            </div>
            <div className="sm:w-full md-w-[40%]">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                className="sm:w-full object-contain"
                src="./Sales/Artboard 530.webp"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
                className="sm:w-full  md:w-[100%] object-contain"
                src="./Sales/Arpindarjit.webp"
                alt=""
              />
            </div>
            <br />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Exports;
