import React from "react";
import ProductHero from "../../Components/Producthero/ProductHero";
import GradientCard01 from "../../Components/GradientCard/GradientCard01";
import { motion } from "framer-motion";
const People = () => {
  return (
    <div className="wrapper-main-product-portfolio">
      <div className="pp-sec-01">
        <ProductHero
          img1={"./People/p46.jpg"}
          heading={"Where people make the difference"}
          img2={""}
          url
          heading2={"People"}
        />
      </div>
      <div className="chairman-message-wrapper">
        <div className="flex sm:flex-col md:flex-row gap-8 w-[100%]">
        <div className="sm:w-full lg:w-[30%] p-4">
           <motion.img
              initial={{ opacity: 0, scale: 0.8, y: "100px" }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              src="./People/p47q.webp"
              alt=""
            />
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className="md:w-[68%] sm:w-full object-cover"
            src="./People/Artboard 40@3x.webp"
            alt=""
          />
           
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          className="flex sm:flex-col lg:flex-row mt-3 gap-8"
        >
          <div className="sm:w-full">
            <p className="qus-para">Elevating the onboarding experience</p>
            <p className="normal-paragraph-container">
              Your Company enhanced the onboarding experience for new employees
              with an objective to prioritize employee well-being. To achieve
              this, a comprehensive ‘peopleexperienceframework’ was developed.
              This framework equips new hires with the necessary information,
              support, and guidance to seamlessly transition into their roles.
              Positivescoresontheonboarding programme have increased by 20%,
              with new employees expressing their appreciation for the
              programme's structure and the level of support provided.
            </p>
            <p className="qus-para">Building an inclusive future</p>
            <p className="normal-paragraph-container">
              In pursuit of fostering Diversity, Equity and Inclusion (DE&I),
              your Company welcomed 27 people with disabilities,23 of whom
              joined the production lines at the Sanand factory during the
              period under review.
              <br />
              This expansion strengthens the workforce and promotes a more
              inclusive team. Your Company organized sensitization sessions and
              someemployeeshavegone the extra mile by volunteering to learn sign
              language, fostering better communication and building stronger
              connections. Safety and accessibility standards wereworkeduponto
              support new joinees with disabilities.
              <br />
              Your Company has also made steady progress towards an inclusive
              workplace for LGBT+ employees. Healthcare benefits now include
              same-sex partner insurance, sensitization sessions and initiatives
              like 'Awareness Builds Consciousness' have fostered a more
              supportive work environment.
            </p>
          </div>
         
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          className="flex sm:flex-col lg:flex-row mt-4 gap-8"
        >
          <div className="sm:w-full lg:w-[70%]">
            <p className="qus-para">Encouraging gender diversity</p>
            <p className="normal-paragraph-container">
              Your Company has one of the highest representation of women in
              FMCG field sales force. It has created a work environment where
              women can thrive and reach their full potential. This commitment
              has resulted in a 2.5% jump in the number of women holding
              managerial positions compared to the previous year. <br />
              50% of the Board of Directors constitute women, demonstrating your
              Company's commitment to diversity at all levels of leadership.
            </p>
            <GradientCard01
              bigData={"50%"}
              smallData={"of the Board of Directors are women"}
            />
            <p className="qus-para">Nurturing young talent - Nesternship</p>
            <p className="normal-paragraph-container">
              Your Company has demonstrated a continued commitment to investing
              in the growth and development of young talent through its
              Nesternship programme. Over a period of 4 years, this programme
              has already provided exposure to approximately 1,400 interns on
              relevant projects, thereby enhancing their capabilities and
              skills. Moreover, your Company has benefitted from their fresh
              perspectives, energy, and innovative ideas.
            </p>
          </div>
          <div className="sm:w-full lg:w-[30%] p-4">
            <motion.img
              initial={{ opacity: 0, scale: 0.8, y: "100px" }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              src="./People/p48q2.webp"
              alt=""
            />
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          className="qus-para"
        >
          Building a digi-able workforce
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          className="normal-paragraph-container"
        >
          Recognizing the increasing importance of digital fluency, your Company
          prioritises digi-ability and digi-integration within its deimport{" "}
          {motion} from 'framer-motion'; velopment strategy. This translates
          into a range of digital learning tools, from leveraging platforms like
          LinkedIn (used by over 3600+ employees) to offering app-based learning
          specifically designed for 1,500+ strong field force, equipping them
          with the necessary digital skills.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          className="qus-para"
        >
          Mentoring and employee development
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          className="normal-paragraph-container"
        >
          Your Company has been prioritising mentoring through its strong
          internal mentor network, which comprises 100 members. This network
          helps support talent in all aspects of their professional life and
          also provides a sounding board for innovators, aspirants and new
          leaders. To ensure a productive and growth-oriented partnership, a
          guided, democratic, and digitally-enabled process is used to match
          talent with the right mentor for their journey. In addition to
          mentoring, your Company also focuses on coaching its employees. By
          providing a strong professional coaching infrastructure that consists
          of 50+ experts, your Company helps employees tackle a range of
          development challenges to arrive at unique solutions that suit their
          customised needs. This coaching process is conducted through an
          external, neutral lens to ensure that employees receive unbiased and
          effective guidance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          className="flex sm:flex-col lg:flex-row mt-4 gap-8"
        >
            <div className="sm:w-full lg:w-[30%] m-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.8, y: "100px" }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              src="./People/p48q3.webp"
              alt=""
            />
            
          </div>
          <div className="sm:w-full lg:w-[70%]">
            <p className="qus-para">Leadership development programmes</p>
            <p className="normal-paragraph-container">
              Within the realm of enablement, a range of offerings were made
              available to individuals seeking to enhance their skill sets.
              These offerings included transition journeys for new leaders,
              young leads of large teams, and those stepping into CXO roles. The
              learning solutions are a combination of experiential and immersive
              approaches to equip employees.
            </p>
            <div className="sm:w-full lg:w-[100%]">
              <p className="qus-para">Investing in employee well- being</p>
              <p className="normal-paragraph-container">
                Your Company is dedicated to promoting employee well-being by
                providing mental health benefits as part of its health
                insurance. Additionally, it organised mental health sessions
                throughout the year, including for first-time line managers.
                Your Company also places a strong emphasis on the health and
                well-being of women. It conducted interactive sessions with
                health experts on topics such as women's health and hygiene,
                menopause, and other related issues. Further, your Company has
                demonstrated its commitment to creating a safe, respectful, and
                inclusive work environment for all by introducing a new Nestlé
                Policy against violence, discrimination, and harassment. It also
                offers guidance to employees who have been victims of domestic
                violence.
              </p>
              <GradientCard01
                bigData={"94%"}
                smallData={
                  "of the workforce in Sanand factory are less than 40 years"
                }
              />
            </div>
          </div>
        
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          className="flex sm:flex-col lg:flex-row mt-4 p-4"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          className="flex sm:flex-col lg:flex-row mt-4 gap-8 align-top"
          // style={{ background: "rgb(234, 229, 242)" }}
        >
          {/* 
          <div className="sm:w-full lg:w-[60%] m-auto">
           
          </div> 
          */}
          {/* <div className="sm:w-full lg:w-[30%] p-4 m-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.8, y: "100px" }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              src="./People/p49q5.webp"
              alt=""
            />
          </div> */}
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className="md:w-[40%] sm:w-full  object-contain"
            src="./People/Artboard 39@3x.webp"
            alt=""
          />
          <div className="md:w-[60%] sm:w-full">
          <motion.img
            className="object-contain w-full"
              initial={{ opacity: 0, scale: 0.8, y: "100px" }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              src="./pq49.png"
              alt=""
            />
           <motion.img
            className="object-contain h-[400px] w-[80%] "
              initial={{ opacity: 0, scale: 0.8, y: "100px" }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              src="./p49q5.webp"
              alt=""
            />
            
          </div>
           
        </motion.div>
      </div>
    </div>
  );
};

export default People;
