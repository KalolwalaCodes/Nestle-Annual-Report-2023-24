import React,{useRef} from "react";
import ProductHero from "../../Components/Producthero/ProductHero";
import GradientCard01 from "../../Components/GradientCard/GradientCard01";
import { motion, useInView } from 'framer-motion';

const Csr = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale:0.6},
    visible: { opacity: 1, scale:1,transition: {
     durations:1,
     ease:"easeInOut"
    }},
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true },{
    margin: "100px -160px -80px 0px"
  });  
  return (
    <div className="wrapper-main-product-portfolio">
      <div className="pp-sec-01">
        <ProductHero
          img1={"./ProductPortfolio/p40.jpg"}
          heading={"Bringing Purpose to life"}
          img2={""}
          url
          heading2={"Corporate social responsibility"}
        />
      </div>
      <div className="chairman-message-wrapper">
    <motion.div
      ref={ref}
      className="flex flex-nowrap gap-5"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
         <div className="w-[30%] flex flex-col gap-8 align-top justify-start">
        <motion.img className="mt-14" src="./Csr/1.png" alt="" variants={itemVariants} />
        <motion.img className="mt-5" src="./Csr/2.png" alt="" variants={itemVariants} />
        <motion.img className="mt-5" src="./Csr/3.png" alt="" variants={itemVariants} />
      </div>
      <div className="w-[28%] mt-10">
        <motion.img className="w-[100%]" src="./Csr/circle.png" alt="" variants={itemVariants} />
      </div>
      <div className="w-[30%] flex flex-col gap-8 align-bottom justify-end">
        <motion.img src="./Csr/4.png" alt="" variants={itemVariants} />
        <motion.img src="./Csr/5.png" alt="" variants={itemVariants} />
        <motion.img src="./Csr/6.png" alt="" variants={itemVariants} />
      </div>
        </motion.div>
        
        <GradientCard01
          bigData={"~14 million"}
          smallData={"Lives positively impacted*"}
        />
        <p className="qus-para">Empowering communities, Improving lives</p>
       <div className=" flex sm:flex-col md:flex-row gap-8 pl-0">
       <div className=" sm:w-full md:w-[70%]">
        <b>Project Jagriti</b>
        <p className="normal-paragraph-container">
          Project Jagriti was launched in 2014 in partnership with Mamta Health
          Institute for Mother and Child as a part of Nestlé India’s commitment
          to provide education programmes for good nutrition and feeding
          practices. The project promotes optimal health outcomes across India
          and has reached over 12.7 million beneficiaries during the period
          under review. This includes both direct beneficiaries and those
          indirectly impacted by its outreach efforts. Project Jagriti operates
          in eight states and union territories, making a significant
          contribution to health, hygiene and nutrition.
          <br />
          Project Jagriti's 'Life Course Approach' emphasizes on health and
          hygiene education across different key stages of life. The initiative
          further emphasizes the importance of proper nutrition throughout life,
          the benefits of prenatal and postnatal care, and the significance of
          exclusive breastfeeding and family planning.
        </p>
        </div>
        
        <div className="md:w-[30%] sm:w-full">
          <motion.img  initial={{opacity:0,scale:0.8,y:"100px"}}
          whileInView={{opacity:1,scale:1,y:0}}
          transition={{duration:0.7,ease:"easeInOut",delay:0.1}}
          className="w-full h-[300px] object-cover"
          src="./ProductPortfolio/Artboard 34@3x.webp"
          alt=""
        />
        </div>
       </div>
       
        
        <div
          className="flex w-100 sm:flex-col md:flex-row mt-6 align-top gap-8"
         
        >
           <div className="sm:w-full md:w-[30%]">
            <motion.img className="object-cover"  initial={{opacity:0,scale:0.8,y:"100px"}}
          whileInView={{opacity:1,scale:1,y:0}}
          transition={{duration:0.7,ease:"easeInOut",delay:0.1}} src="./ProductPortfolio/Artboard 35@3x.webp" alt="" />
          </div>
          <div className="sm:w-full md:w-[70%]">
            <p className="qus-para ">Empowering communities, Improving lives</p>
            <b>Nestlé Healthy Kids Programme</b>
            <p className="normal-paragraph-container">
              The Nestlé Healthy Kids Programme is a longstanding initiative
              dedicated to promoting healthy lifestyles amongst adolescents and
              parents across India. Launched as a pilot programme in 2009, it
              has grown significantly, reaching over 600,000 adolescents and
              56,000 parents in 26 states and union territories.
              <br />
              The programme equips adolescents with the knowledge and skills to
              make informed choices about healthy eating and active living. It
              promotes physical activity as a key component of a healthy
              lifestyle, promotes responsible plastic waste management practices
              and encourages parents to support their children in adopting
              healthy habits.
            </p>
          </div>
         
        </div>
        <div
          className="flex w-100 sm:flex-col md:flex-row mt-6 align-top  pl-0 gap-8"
         
        >
          <div className="sm:w-full md:w-[70%]">
            <p className="qus-para">
              Igniting young minds with experiential learning
            </p>
            <b>Project Jigyasa a part of Nestlé Healthy Kids Programme</b>
            <p className="normal-paragraph-container">
              Education is a powerful tool to bring about change in society. In
              collaboration with Agastya International Foundation, Project
              Jigyasa was launched in 2022 with the aim of spreading science
              education. As a part of this initiative, science labs and
              libraries have been set up in 20 schools of Goa, Haryana and
              Himachal Pradesh. The students have benefitted from the Project as
              it continues to increase access to practical, hands-on science
              education through an innovative, holistic and experiential model.
            </p>
          </div>
          <div className="sm:w-full md:w-[30%]">
            <motion.img className="object-cover"  initial={{opacity:0,scale:0.8,y:"100px"}}
          whileInView={{opacity:1,scale:1,y:0}}
          transition={{duration:0.7,ease:"easeInOut",delay:0.1}} src="./ProductPortfolio/Artboard 36@3x.webp" alt="" />
          </div>
        </div>
        <div
          className="flex w-100 sm:flex-col md:flex-row mt-6 align-top  gap-8"
         
        >
           <div className="sm:w-full md:w-[35%] ">
            <motion.img  initial={{opacity:0,scale:0.8,y:"100px"}}
          whileInView={{opacity:1,scale:1,y:0}}
          transition={{duration:0.7,ease:"easeInOut",delay:0.1}}
              className="h-[370px] object-cover"
              src="./ProductPortfolio/Artboard 33@3x.webp"
              alt=""
            />
          </div>
          <div className="sm:w-full md:w-[65%]">
            <p className="qus-para">
              Building a brighter future in rural Haryana
            </p>
            <b>Project Vriddhi</b>
            <p className="normal-paragraph-container">
              The project was launched in collaboration with SM Sehgal
              Foundation in 2019 with the vision of strengthening community-led
              rural development in Haryana. In 2023, the project expanded to
              include nine more villages, bringing the total to 14 and impacting
              around 18,000 beneficiaries.
              <br />
              Project Vriddhi has made a significant impact by improving access
              to clean drinking water, promoting water-saving irrigation
              practices, increasing nutrition awareness, enhancing farm
              productivity, and providing a better learning environment. The
              transformation journey of these villages has witnessed a
              multiplier effect on several development indicators and has
              empowered local communities to drive their own progress.
            </p>
          </div>
         
        </div>
        <div
          className="flex w-100 sm:flex-col md:flex-row mt-6 align-top p-4 pl-0 gap-8"
         
        >
          <div className="sm:w-full md:w-[70%]">
            <p className="qus-para">
              A recipe for success: strengthening street food safety
            </p>
            <b>Project Serve Safe Food</b>
            <p className="normal-paragraph-container">
              Project Serve Safe Food, was launched in 2016, in partnership with
              National Association of Street Vendors of India (NASVI) and local
              food safety authorities. It brings together industry expertise,
              vendor representation, and government oversight to create a
              comprehensive training programme and demonstrates the power of
              collaboration in addressing food safety concerns.
              <br />
              The project trains street food vendors on food safety and hygiene,
              proper food handling techniques to prevent contamination from
              purchase to preparation, waste disposal and digital payments.
              Around 68,500 street food vendors were trained in safe food
              handling practices across 26 states and 4 union territories.
            </p>
          </div>
          <div className="sm:w-full md:w-[30%] ">
            <motion.img  initial={{opacity:0,scale:0.8,y:"100px"}}
          whileInView={{opacity:1,scale:1,y:0}}
          transition={{duration:0.7,ease:"easeInOut",delay:0.1}}
              className="h-[300px] w-full object-cover"
              src="./ProductPortfolio/Artboard 37@3x.webp"
              alt=""
            />
          </div>
        </div>
        <div
          className="flex w-100 sm:flex-col md:flex-row mt-6 align-top p-4 pl-0 gap-8"
         
        >
          <div className="sm:w-full md:w-[35%]  ">
            <motion.img className="object-cover h-[500px]"  initial={{opacity:0,scale:0.8,y:"100px"}}
          whileInView={{opacity:1,scale:1,y:0}}
          transition={{duration:0.7,ease:"easeInOut",delay:0.1}} src="./ProductPortfolio/Artboard 38@3x.webp" alt="" />
          </div>
          <div className="sm:w-full md:w-[65%]">
            <p className="qus-para">
              Clean environment: Emphasis on waste management
            </p>
            <b>Project Hilldaari</b>
            <p className="normal-paragraph-container">
              In partnership with PLAN Foundation, Stree Mukti Sangathana and
              technical partner, Recity India Pvt. Ltd. project Hilldaari has
              successfully developed inclusive and resilient models for waste
              management in select tourist destinations of India in the last
              five years.
              <br />
              Project Hilldaari has diverted approximately 15,700 MT of waste
              from landfill through source segregation in seven cities. About
              84% of source segregation has been achieved across 69,700
              residential and commercial waste collection points during the
              period under review.
              <br />
              Project Hilldaari invokes a sense of solidarity and collective
              spirit among citizens. The initiative has professionalized over
              1,100 waste workers through a multi- collaborative approach with
              municipal councils, associations, citizens, contractors, and
              influencers. Waste workers have also been trained to become a part
              of behavior change interventions. The project has also provided
              them with occupational IDs, benefits such as health insurance and
              protective gear necessary for their work.
            </p>
          </div>
          
        </div>
        <div
          className="flex w-100 sm:flex-col lg:flex-row mt-6 align-top p-4 pl-0"
         
        >
          <div className="sm:w-full lg:w-[60%]">
            <p className="qus-para">
              Wash away worries: Clean water and sanitation facilities
            </p>
            <b>Water and Sanitation</b>
            <p className="normal-paragraph-container">
              Since 1999, your Company has constructed 300 clean drinking water
              facilities in schools. These facilities ensure students have
              access to clean and safe drinking water. Over 1,000 schools have
              been equipped with modern, easily maintained sanitation
              facilities. Around 320,000 girl students have benefitted from
              access to clean toilets, fostering a more dignified learning
              experience and potentially reducing absenteeism due to lack of
              proper facilities.
            </p>
            <p className="qus-para">Disaster Management</p>
            <p className="normal-paragraph-container">
              In addition to CSR, your Company has made interventions where
              societal needs are high or in special situations such as natural
              calamities.
            </p>
          </div>
          <div className="sm:w-full lg:w-[40%] ">
            <motion.img  initial={{opacity:0,scale:0.8,y:"100px"}}
          whileInView={{opacity:1,scale:1,y:0}}
          transition={{duration:0.7,ease:"easeInOut",delay:0.1}} src="./ProductPortfolio/p45q.webp" alt="" />
          </div>
        </div>
        <p className="qus-para">
          Impact mapped to Sustainable Development Goals
        </p>
        <div
          style={{ background: "rgb(234 229 242)", borderRadius: "10px" }}
          className="p-4 pl-0"
        >
          <motion.img
          initial={{opacity:0,scale:0.8,y:"100px"}}
          whileInView={{opacity:1,scale:1,y:0}}
          transition={{duration:0.7,ease:"easeInOut",delay:0.1}}
            className="mb-5 w-[80%] m-auto"
            src="./ProductPortfolio/p45i1.png"
            alt=""
          />
          <motion.img
          initial={{opacity:0,scale:0.8,y:"100px"}}
          whileInView={{opacity:1,scale:1,y:0}}
          transition={{duration:0.7,ease:"easeInOut",delay:0.3}}
            className="mb-5 w-[80%] m-auto"
            src="./ProductPortfolio/p45i2.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Csr;
