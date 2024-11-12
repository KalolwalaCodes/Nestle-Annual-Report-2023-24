import React from "react";
import { motion } from "framer-motion";
import ProductHero from "../../Components/Producthero/ProductHero";
import GradientCard01 from "../../Components/GradientCard/GradientCard01";

const ProductPortfolioMain = () => {
  return (
    <div className="wrapper-main-product-portfolio">
      <div className="pp-sec-01">
        <ProductHero
          img1={"./ProductPortfolio/p34.jpg"}
          heading={"Innovating for customer delight"}
          img2={""}
          url
          overlay
          heading2={"Out-of-Home"}
        />
      </div>
      <div className="chairman-message-wrapper">
        {/* <h3 className="bold-heading-text text-black font-bold">
        
        </h3> */}
        <div className="flex gap-8 w-100 sm:flex-col md:flex-row">
          <motion.img
            className="object-contain"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            src="./ProductPortfolio/Artboard 26@3x.webp"
            alt=""
          />
          <motion.img
            className="object-contain"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            src="./ProductPortfolio/Artboard 27@3x.webp"
            alt=""
          />
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              className="big-medium-font "
            >
              The Out-of-Home business reported strong growth, propelled by
              portfolio transformation and premiumization, channel
              prioritization and new customer acquisition.
            </motion.p>
            <br />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              className="normal-paragraph-container  sm:w-full "
            >
              This business continued to accelerate rapidly by focusing on
              relevant innovations and robust penetration in emerging channels.
              Geographical expansion beyond metros into Tier-1 towns, tapping
              tourist hot spots and focusing on new geographical clusters also
              contributed to growth.
            </motion.p>
          </div>
        </div>

        <div className="flex sm:flex-col md:flex-row gap-8 p-4 mt-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className="normal-paragraph-container md:w-[70%] sm:w-full "
          >
            <br />
            The Out-of-Home business was one of the fastest growing business of
            your Company in India during the period under review.
            <br />
            It collaborated with McDonald's India (West and South), PVR-INOX,
            and Krispy Kreme to co-create a menu using KITKAT and NESCAFÉ. Your
            Company partnered with SOCIAL and BOSS Burger outlets to test launch
            the MAGGI Professional plant-based range. This range has been
            especially developed for chefs to cater to the Indian taste palate.
            The launch of the plant-based range is a part of your Company’s
            commitment to offer more food choices to consumers.
            <br />
            Your Company continues to make rapid strides on both the food and
            beverages portfolios in the Out-of-Home space aided by penetration
            and premiumization. The rapidly growing base of NESCAFÉ machines,
            backed by cutting-edge solutions catered to a wide spectrum of
            consumer preferences by offering both hot and cold beverages across
            offices, educational institutes, and healthcare facilities.
            <br />
            Food solutions such as MAGGI Coconut Milk Powder continued to
            accelerate rapidly across HORECA segments with applications in Thai
            and Coastal cuisines.
          </motion.p>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className="md:w-[50%]  sm:w-full mt-6 object-cover"
            src="./ProductPortfolio/Artboard 25@3x.webp"
            alt=""
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          className="normal-paragraph-container p-4"
        >
          Your Company's ‘Retail ONE' initiative fostered entrepreneurship by
          setting up over 830 branded kiosks such as NESCAFÉ Corners, MAGGI
          Hotspots, KITKAT Break Zones in educational institutes, hospital food
          zones, malls and airports. These kiosks are operator funded, and
          created employment opportunities for more than 1,600 people.
          Approximately 30% of the food handlers in the kiosks are women.
        </motion.p>
      </div>
    </div>
  );
};

export default ProductPortfolioMain;
