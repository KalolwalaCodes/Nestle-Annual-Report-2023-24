import React from "react";
import { motion } from "framer-motion";

const SalesAndExports = () => {
  return (
    <div className="wrapper-main-product-portfolio">
      <div className="chairman-message-wrapper">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          className="bold-heading-text text-black font-bold"
        >
          Sales
        </motion.h3>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          src="./Sales/Artboard 540.webp"
          alt=""
        />

        <div>
          <motion.p
            initial={{ opacity: 0, y: "-10px" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className="qus-para"
          >
            RUrban
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className="normal-paragraph-container"
          >
            Your Company accelerated its growth journey in RUrban markets,
            supplemented by strong growth momentum in metro and mega cities.
            RUrban focus was enhanced by investing in robust distribution
            channels for efficient product delivery. Your Company launched
            products specifically tailored to the needs and preferences of
            RUrban consumers and leveraged technology to optimize sales force
            routes, enhancing productivity and coverage in RUrban areas.
            Implementing strategies to ensure prominent product placement and
            high-attention activities (HAAT) within stores and driving sales
            enabled your Company to meet its ambitious goal of reaching 200,000
            villages.
            <br />
            {/* <div className="flex sm:flex-col md:flex-row">
              <img src="" alt="" />

            </div> */}
            The 'Retailer Self-Ordering Application' – NesMitra – emerged as a
            game-changer in RUrban markets. This mobile application enables
            retailers to conveniently place orders, boosting engagement and
            overcoming challenges associated with difficult-to-access rural
            locations. NesMitra has a rapidly growing user base, of over 10,000
            active users. It serves as a valuable complementary routeto-market
            solution, streamlining processes. NesMitra's success has been
            recognized within the Nestlé global network as a model for driving
            operational efficiency and speed. <br />
            Your Company also engaged with women from rural areas under Project
            Swabhimaan to foster entrepreneurial skills by upskilling and
            training them. This initiative was first launched in Uttar Pradesh
            and has now scaled up to 25 states, engaging with over 1,900 women
            entrepreneurs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className="qus-para"
          >
            E-commerce
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            className="normal-paragraph-container"
          >
            Your Company’s e-commerce business continued to accelerate with
            significant growth in quick commerce along with click & mortar,
            driven by brands such as KITKAT, MAGGI Noodles and others.
            E-commerce business contributed 6.8% to sales in the fifteen months
            financial year ended 31st March 2024.
            <br />
            Targeted demand-generation initiatives across key platforms based on
            portfolio relevance and shopper needs, combined with new product
            launches were implemented.
            <br />
            Quick commerce growth was aided by new user acquisition initiatives
            through targeted digital communication across various touchpoints.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className="qus-para"
          >
            Direct-to-consumer
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            className="normal-paragraph-container"
          >
            Your Company’s direct-to- consumer (D2C) e-commerce platform –
            <a href="www.mynestle.in">www.mynestle.in</a> is operational in
            Delhi-NCR and Bangalore. Launched with the aim of providing
            customers with curated product bundles and a range of services,
            including gourmet recipes, personalised gifting, and subscriptions,
            the platform also offers free nutrition counseling. Since its
            launch, MyNestle.in has witnessed a steady increase in both website
            visitors and transactions, demonstrating a positive response from
            consumers. This growth highlights the platform's success in meeting
            the evolving needs and preferences of today's online shoppers.
            <br />
          </motion.p>
          <div className="flex sm:flex-col md:flex-row gap-8">
            <div className="sm:w-full md:w-[70%]">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
                className="qus-para"
              >
                Organized trade
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
                className="normal-paragraph-container mb-4"
              >
                The channel saw broad-based growth across product groups. Retail
                delivered double-digit growth driven by store expansion,
                shopper- centric promotion, participation in customer thematic
                properties, and merchandising initiatives.
              </motion.p>
            </div>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
              className="sm:w-full md:w-[30%]"
              src="./Sales/Sushrut.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAndExports;
