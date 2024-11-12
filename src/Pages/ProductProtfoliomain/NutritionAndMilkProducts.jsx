import React from "react";
import {motion} from 'framer-motion'
import ProductHero from "../../Components/Producthero/ProductHero";
import GradientCard01 from "../../Components/GradientCard/GradientCard01";

const NutritionAndMilkProducts = () => {
  return (
    <div className="wrapper-main-product-portfolio">
      <div className="pp-sec-01">
        <ProductHero
          img1={"./ProductPortfolio/12.jpg"}
          heading={"Nutrition in a nutshell"}
          img2={"./ProductPortfolio/Artboard 8@3x.webp"}
          url
          heading2={' Milk Products and Nutrition'}
        />
      </div>
      
      <div className="chairman-message-wrapper">
      <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}}  className="big-medium-font my-4 ">
          The Milk Products and Nutrition business registered strong growth,
          despite fluctuations in commodity prices, which were addressed through
          cost optimization and value chain efficiencies. The performance of
          Milk Products and Nutrition was further bolstered by e-commerce.
        </motion.p>
        <div className="flex w-100 sm:flex-col md:flex-row gap-8 col-reverse-small">
        <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,ease:"easeInOut"}}  className="sm:w-full md:w-[60%] object-cover" src="./ProductPortfolio/Artboard 9@3x.webp" alt="" />
        <div>
       
        <motion.img initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} className="w-[80%] object-contain" src="./ProductPortfolio/p21.webp" alt="" />
        <motion.img initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.1}} className="w-[80%] object-contain" src="./ProductPortfolio/p20.webp" alt="" />
        </div>
       


        </div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.2}}  className="flex sm:flex-col md:flex-row gap-6 justify-between normal-paragraph-container mt-6" >
        The Ready-To-Drink (RTD) portfolio saw strong growth in both in-home
        and out-of-home channels. The 'Thoda Aur Macha' campaign celebrating
        Gen Z heroes, contributed to NESCAFÉ RTD's increased visibility.
        </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.2}}  className="flex sm:flex-col md:flex-row gap-6 mt-4 justify-between p-4" >
          <div className="flex sm:flex-col md:flex-row gap-8">
       <div className="sm:w-full md:w-[50%]">
       <p className="normal-paragraph-container">
            Nestlé a+ Masala Millet, made with bajra and barley, was launched in
            Delhi- NCR and Mumbai and subsequently expanded to other cities
            across key geographies. MILO for teenagers was introduced in Tamil
            Nadu, Andhra Pradesh, Telangana, and Kerala.
            <GradientCard01
              bigData={"40.7%"}
              smallData={"Contribution to total sales"}
            />
          </p>
          <img
            className="w-[80%]"
            src={"./ProductPortfolio/Artboard 10@3x.webp"}
            alt=""
          />
       </div>
       <div className="sm:w-full md:w-[50%]">
       <p className="normal-paragraph-container sm:w-full">
            MILKMAID's engagement on digital platforms increased, and the
            website, <a href="https://www.milkmaid.in/"> milkmaid.in</a>, achieved a remarkable milestone by attracting
            over 7.2 million visits, demonstrating the growing demand for
            homemade desserts in India.
            <br />
            <GradientCard01
              bigData={"38 million"}
              smallData={"tins of MILKMAID sold"}
            />
          </p>
          <img
            className="w-[80%]"
            src={"./ProductPortfolio/Artboard 11@3x.webp"}
            alt=""
          />
       </div>
          </div>
          
         
        </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.2}} className="flex sm:flex-col md:flex-row gap-6  justify-between p-4" >
          
        </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.2}} className="flex sm:flex-col md:flex-row gap-6 mt-4 justify-between p-4 pt-0" >
          <p className="normal-paragraph-container sm:w-full md:w-[70%]">
          Your Company believes that breastmilk provides the best nutrition for babies and every child should be exclusively breastfed for six months, followed by the introduction of age- appropriate complementary feeding and continued breastfeeding until two years and beyond.
          <br />
            Your Company is committed to providing high-quality, innovative,
            science-based nutrition while expanding the reach of its toddler
            range of products. In line with its commitment to deliver 'Good
            Food, Good Life', your Company launched GERBER Multigrain Puffs for
            toddlers, which are crafted with a blend of oats, wheat, and rice.
            These are fortified with immuno-nutrients and are a source of fiber.
            Taking a step towards a more sustainable future, GERBER benches made
            from recycled plastic waste were installed in parks.
            <br />
          </p>
          <img
            className="sm:w-full md:w-[30%]"
            src={"./ProductPortfolio/Artboard 12@3x.webp"}
            alt=""
          />
        </motion.div>
      </div>
      <div className="pp-sec-01">
        <ProductHero
          img1={"./ProductPortfolio/p22.webp"}
          heading={"Enriching lives through nutrition"}
          img2={"/ProductPortfolio/Artboard 3@5x.webp"}
          url
          heading2={' Nestlé Health Science'}
        />
      </div>
      <div className="chairman-message-wrapper">
        <div className="flex sm:flex-col md:flex-row gap-8 mb-3 col-reverse-small">
        <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,ease:"easeInOut"}} className="sm:w-full md:w-[70%] " src="./ProductPortfolio/Artboard 13@3x.webp" alt="" />
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.2}} className="big-medium-font ">
          The Health Science business consisting of a portfolio of science-based
          medical and consumer healthcare nutrition products, launched three
          innovations, customised to improve health and quality of life.
        </motion.p>
        </div>
        <div className="flex sm:flex-col md:flex-row gap-8">
          <div className="sm:w-full md:w-[40%]">
            
            <motion.img initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} className="w-full object-contain m-auto" src="./ProductPortfolio/p22q.webp" alt="" />
          </div>
          <motion.p className="sm:w-full md:w-[70%] normal-paragraph-container" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.2}}>
          Thicken Up Clear was launched for patients with dysphagia. It has been
          clinically proven to improve swallowing safety and efficacy. The
          product was scientifically designed and manufactured by leveraging a
          unique technology at Osthofen, Germany, exclusively for Nestlé Health
          Science.
          <br />
          Resource Fiber Choice, a unique and effective gut health solution,
          that has proven to help relieve constipation and improve gut health
          was introduced in the Indian market. Resource Fiber Choice was
          recognized as the 'Best Health & Wellness Product of the Year' at the
          prestigious CIMS Medical Nutrition & Wellness Awards, 2023.
          <br />
          The core brand PEPTAMEN, for patients in critical care, continued to
          experience accelerated growth momentum.
          <br />
          Recognizing the unique needs of active millennials in India, your
          Company launched Resource Activ. Its new edge formula has high-
          quality protein, calcium and vitamin D, and hyaluronate (hyaluronic
          acid) for healthy skin. Nestlé India and Dr. Reddy’s Laboratories
          Limited entered into a definitive agreement to form a joint venture
          (JV) to bring innovative nutraceutical brands to consumers in India
          and other agreed territories. The JV Company is expected to become
          operational in Q2 of FY 2024-25.
          <br />
          The partnership will bring together the global range of nutritional
          health solutions as well as vitamin, minerals, herbals and supplements
          of Nestlé Health Science with the strong and established commercial
          strengths of Dr. Reddy’s in India.
        </motion.p>
        </div>
        
      </div>
    </div>
  )
}

export default NutritionAndMilkProducts
