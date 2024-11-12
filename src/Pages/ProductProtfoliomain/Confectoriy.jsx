import React from "react";
import { motion } from "framer-motion";
import ProductHero from "../../Components/Producthero/ProductHero";
import GradientCard01 from "../../Components/GradientCard/GradientCard01";

const Confectoriy = () => {
  return (
    <div className="wrapper-main-product-portfolio">
      <div className="pp-sec-01">
        <ProductHero
          img1={"./ProductPortfolio/p30.jpg"}
          heading={"Creating joy with every bite"}
          img2={""}
          url
          overlay
          heading2={" Confectionery"}
        />
      </div>
      <div className="chairman-message-wrapper">
        {/* <h3 className="bold-heading-text text-black font-bold">
         
        </h3> */}
        <div className="flex sm:flex-col md:flex-row gap-8">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className=" sm:w-full md:w-[60%] object-cover"
            src="./ProductPortfolio/Artboard 23@3x.webp"
            alt=""
          />
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              className="big-medium-font"
            >
              Confectionery was one of the main drivers of growth for your
              Company.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              className="normal-paragraph-container "
            >
              The growth was fueled by the launch of new products, increased
              media exposure, a more extensive and expanding distribution
              network, and innovative brand activations which were all
              instrumental in the portfolio's success.
              <br />
              KITKAT emerged as the star performer, by not only delivering
              strong growth but making Nestlé India the second largest market
              for the brand globally.
              <GradientCard01
                bigData={"16.5%"}
                smallData={"Contribution to total sales"}
              />
            </motion.p>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          className="normal-paragraph-container "
        >
          <br />
          This success can be attributed to innovative launches like KITKAT
          Butterscotch and a premium range with Dark, Rich, and Caramel options.
          <br /> MUNCH also performed well in different regions through
          innovations such as MUNCH Max Brownie and MUNCH Fruity to the existing
          range. Other new launches across the portfolio included MILKYBAR
          caramel, and POLO watermelon. These launches were supported by
          targeted advertising, digital and on-ground initiatives.
          <br />
          <div className="flex sm:flex-col md:flex-row">
            <p className="normal-paragraph-container md:w-[70%] sm:w-full">
              Beyond product innovation, creative marketing campaigns played a
              crucial role. KITKAT's 'Fingers Crossed for the Win' campaign
              resonated with audiences during the 2023 Cricket World Cup, while
              MUNCH leveraged the IPL season with its 'Play in the Gully and
              Meet Your Favorite Stars' initiative. This interactive campaign
              not only boosted brand awareness but also generated excitement by
              offering fans a unique opportunity to meet their cricket heroes.
              <br />
              These campaigns, along with influencer partnerships and a focus on
              video platforms, significantly enhanced brand visibility and
              consumer engagement. Your Company continued to demonstrate its
              commitment to sustainability. Two years ago the entire
              confectionery portfolio transitioned into recyclable packaging
              (Design for recycling - D4R) and remains dedicated to using
              recyclable materials. In another initiative, KITKAT benches from
              recycled pastic, were placed in colleges across the country.
            </p>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              className="md:w-[30%] sm:w-full"
              src="./ProductPortfolio/p31q.webp"
              alt=""
            />
          </div>
          <GradientCard01
            bigData={"4,200 million"}
            smallData={"KITKAT fingers sold"}
          />
        </motion.p>
      </div>
    </div>
  );
};

export default Confectoriy;
