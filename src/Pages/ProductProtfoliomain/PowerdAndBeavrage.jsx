import React from "react";
import { motion } from "framer-motion";
import ProductHero from "../../Components/Producthero/ProductHero";
import GradientCard01 from "../../Components/GradientCard/GradientCard01";

const PowerdAndBeavrage = () => {
  return (
    <div className="wrapper-main-product-portfolio">
      <div className="pp-sec-01">
        <ProductHero
          img1={"./ProductPortfolio/p32.webp"}
          heading={"Brewing goodness in every sip"}
          img2={"./ProductPortfolio/Artboard 4@5x.webp"}
          url
          overlay
          heading2={" Powdered and Liquid Beverages"}
        />
      </div>
      <div className="chairman-message-wrapper">
        <div className="flex sm:flex-col md:flex-row gap-8 col-reverse-small">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className="sm:w-full md:w-[60%] object-cover"
            src="./ProductPortfolio/Artboard 24@3x.webp"
            alt=""
          />
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              className="big-medium-font "
            >
              The Powdered and Liquid Beverages business recorded robust
              performance by staying focused on recruitment and creating more
              occasions for coffee consumption.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              className="normal-paragraph-container "
            >
              The in-home portfolio of NESCAFÉ, comprising NESCAFÉ Classic,
              NESCAFÉ Sunrise, and NESCAFÉ GOLD, delivered strong double- digit
              growth. This resulted in the highest-ever yearly increase in
              household penetration and market share in 2023, further
              strengthening NESCAFÉ's market leadership. NESCAFÉ has introduced
              its coffee to over 30 million Indian households in the past seven
              years.
            </motion.p>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          className="normal-paragraph-container "
        >
          {/* <br /> */}
          {/* KITKAT emerged as the star performer, by not only delivering strong
          growth but making Nestlé India the second largest market for the brand
          globally. */}
          <br />
          <div className="flex sm:flex-col md:flex-row gap-8">
            <div>
              NESCAFÉ Classic led category recruitment with the highest
              penetration gains in a year by driving relevance through core
              thematic campaigns and expanding its availability. The brand
              increased consumption occasions with a focus on cold coffee during
              summer and monsoon. NESCAFÉ continued its innovation journey with
              the launch of NESCAFÉ ALL IN 1 FRAPPE, which provides consumers a
              convenient way of making cold coffee.
              <br />
              NESCAFÉ GOLD delivered strong growth. It catered to the growing
              demand for premium coffee experiences. This growth underscores the
              brand's commitment to delivering a superior coffee experience that
              resonates with consumers. NESCAFÉ Sunrise emerged as one of the
              top 10 brands for Nestlé India, leading to significant market
              share gains in the coffee business in the south region. A
              captivating new thematic campaign, launched across TV and digital
              platforms, further strengthened brand awareness with consumers in
              South India.
              <br />
              Unprecedented green coffee price inflation was mitigated through
              proactive strategies that improved efficiency across the entire
              value chain.
              <br />
              Your Company continued to work closely with coffee farmers in
              Karnataka, Tamil Nadu, and Kerala through the NESCAFÉ Plan,
              towards developing good agricultural practices, sustainable
              management of landscapes, and enhancing biodiversity in coffee
              farms.
            </div>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              className="md:w-[30%] sm:w-full"
              src="./ProductPortfolio/p33q.webp"
              alt=""
            />
          </div>

          <div className="flex sm:flex-col md:flex-row gap-8">
            <GradientCard01
              bigData={"15 billion+"}
              smallData={"Cups of coffee"}
            />
            <GradientCard01
              bigData={"12.4%"}
              smallData={"Contribution to total sales"}
            />
          </div>
        </motion.p>
      </div>
    </div>
  );
};

export default PowerdAndBeavrage;
