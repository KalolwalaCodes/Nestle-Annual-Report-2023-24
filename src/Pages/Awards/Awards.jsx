import React from "react";
import { motion } from 'framer-motion';

const Awards = () => {
  return (
    <div className="w-[80%] m-auto">
      <motion.h3 initial={{opacity:0,x:"-10px"}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,ease:"easeInOut",delay:0.2}} className="bold-heading-text text-black font-bold">
        Awards and recognitions
      </motion.h3>
      <motion.p initial={{opacity:0,y:"10px"}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,ease:"easeInOut",delay:0.2}} className="qus-para">Company</motion.p>
      <div className="flex justify-center align-middle flex-wrap w-full lg:gap-2  mb-6">
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full   border  rounded-lg shadow card-main-c mb-1">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
              Mr. Suresh Narayanan was recognized as the{" "}
              <span className="pink-dark-text">' Best CEO in FMCG'</span> category
              at the Business Today MINDRUSH Awards
            </p>
          </div>
        </motion.div>
     
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Mr. Suresh Narayanan was awarded The Economic Times
              <span className="pink-dark-text"> ‘People-Focused CEO’</span> cof the year
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.5}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Ms. Svetlana Boldina was recognised as
              <span className="pink-dark-text">‘The Best CFO’ in Large Enterprises Manufacturing Industry</span>category by The Financial Express
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé India was acknowledged for 
              <span className="pink-dark-text">‘Best Supply Chain, Logistics, and Distribution Company of the Year’</span> 
              at Bharat Logistics and Supply Chain Conclave & Awards 2024
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé India was conferred with the
              <span className="pink-dark-text"> 'Supply Chain & Logistics Excellence Awards 2023'</span> 
              by CII
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.5}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé India was presented with the 
              <span className="pink-dark-text"> ‘DEI Excellence in People Practices'</span> Award at Spark Inclusive Leadership Summit
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé India’s Pantnagar factory was adjudged
              <span className="pink-dark-text">'1st Runner Up at CII’s 36th Quality circle competition'</span> 
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé India was awarded the prestigious
              <span className="pink-dark-text"> 'CFBP Jamnalal Bajaj Uchit Vyavahar Puraskar for Fair Business Practices 2023-24' </span>
              by the Council for Fair Business Practices              
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.5}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé India’s Tahliwal factory received
              <span className="pink-dark-text"> 'Environment Leadership Award'</span> 
              from Honourable Chief Minister of Himachal Pradesh
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé India’s Pantnagar factory won Gold and Sanand factory won Silver at the 
              <span className="pink-dark-text"> ‘National Awards for Manufacturing Competitiveness’</span> 
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé India Consumer Insight team was awarded the prestigious
              <span className="pink-dark-text">'MRSI Golden Key Award'</span> 
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.5}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé India was recognised as 
              <span className="pink-dark-text">'POSH VANGUARD'</span>
              at POSH Conclave & Excellence Awards 2024

            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé India’s Pantnagar factory team won the
              <span className="pink-dark-text">‘Regional finals’ </span> (North Zone) at the CII 36th Quality Circle Competition
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé India’s Samalkha factory was conferred th an award at the
              <span className="pink-dark-text"> 'CII 14<span style={{fontSize:"14px"}}>th </span>Food Safety Awards' </span>
               for maintaining excellent levels of food safety
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.5}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            AskNestlé secured 4 awards at the prestigious
              <span className="pink-dark-text">'DMA Asia Echo & DMA Sparkies'</span> 
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé India was honoured as best 
              <span className="pink-dark-text">'Organisation
              for Women' , </span> 2024 by Economic Times Edge
            </p>
          </div>
        </motion.div>
        {/* <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} class="max-h-[400px] ">
         
        </motion.div> */}
        <div className="flex sm:flex-col md:flex-row gap-4">
        <motion.img initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.1}} className=" md:w-[25%] sm:w-full  object-cover" src="./Awards/Artboard 46@3x.webp" alt="" />
        <motion.img initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.2}} className="md:w-[25%] sm:w-full  object-cover" src="./Awards/Artboard 47@3x.webp" alt="" />
        <motion.img initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} className="md:w-[25%] sm:w-full  object-cover" src="./Awards/Artboard 48@3x.webp" alt="" />
        <motion.img initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} className="md:w-[25%] sm:w-full  object-cover" src="./Awards/Artboard 49@3x.webp" alt="" />

        </div>
        {/* <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.5}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1">
        
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1">
        
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1">
        
        </motion.div> */}
       
         
          
       
        

      </div>
      <motion.p initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.1}} className="qus-para">Brands</motion.p>
      <div className="flex justify-center align-middle flex-wrap w-full gap-2 my-6 pb-6">
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1  border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé India won
              <span className="pink-dark-text">'6 prestigious EFFIE awards : 3 for MAGGI, 2 for NESCAFÉ</span> and
              <span className="pink-dark-text"> 1 for CEREGROW'</span>
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé KITKAT was
            vested with
              <span className="pink-dark-text"> ‘Brand of the Decade’</span>
               award in FMCG Confectionery category at Herald Global &BARC Asia Prestigious Brands Awards
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
         <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
         <span className="pink-dark-text">MAGGI won 7</span> and  
              <span className="pink-dark-text"> CEREGROW won 4</span> awards in
              <span className="pink-dark-text"> 'Exchange4media Marketing Awards 2023'</span>
            </p>
          </div>
        </motion.div>
        {/* <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.5}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
         
        </motion.div> */}
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé a+ Masala Millet was awarded
              <span className="pink-dark-text">‘Best Industry - Product Innovation for Mainstreaming Millets’</span> 
              by Nutrihub IIMR
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            NESCAFÉ was recognised as
              <span className="pink-dark-text"> 'People’s Hot Beverage Brand of the Year' </span> 
              and MAGGI was the joint winner in two categories -
               <span className="pink-dark-text">'People’s Snack Brand of the Year'</span>and -
                <span className="pink-dark-text">'People’s Culinary Condiment Brand of the Year' </span> 
                at the SLIM-KANTAR People’s Awards 2023
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.5}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            MAGGI received the
              <span className="pink-dark-text"> 'Brand Xcel Excellence Award' </span> 
               and was recognized as one of the most preferred brands for Indian consumers
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            NESCAFÉ Sunrise was adjudged the
              <span className="pink-dark-text">'first runner up in Indian Digital Marketing Awards 2023'</span> 
              for ‘Best Short Form Video for its product intrinsic films’
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            KITKAT won 
              <span className="pink-dark-text">' 3 awards, 1 Gold, 1 Silver and 1 Bronze'</span>
              at Digies 2024 for the #CatchABreak campaign             
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            Nestlé KITKAT was recognised as
              <span className="pink-dark-text">'India’s Most Trusted Chocolate Bar Brand 2023 '</span> 
              at the 12th Edition of TRA’s Brand Trust Report
            </p>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1 border  rounded-lg shadow card-main-c ">
          <img
            class="rounded-t-lg m-auto h-[200px] pt-3"
            src="./Landingpage/Artboard 45@3x.webp"
            alt=""
          />
          <div class="p-4 pt-0">
            <p class=" normal-paragraph-container text-center">
            MAGGI bagged 
              <span className="pink-dark-text"> '2 silvers at the DMA Asia Echo
              & DMA Sparkies, and 1 gold and 3 silvers at the ICMA awards'</span> 
            </p>
          </div>
        </motion.div>
        {/* <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.5}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1">
        
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} class="lg:w-[32.5%] md:w-[46%] sm:w-full sm:w-full mb-1">
        
        <img className="w-full object-cover" src="./Awards/Artboard 51@3x.webp" alt="" />
        </motion.div> */}
      </div>
      
      <motion.img initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.2}} className=" sm:w-full  object-cover" src="./Awards/Artboard 50@3x.webp" alt="" />
      <br />
      <span className="pink-dark-text ">Nestlé India Limited listed on National Stock Exchange on 1st August 2023</span> 
      <motion.img initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} className=" sm:w-full  object-cover" src="./Awards/Artboard 51@3x.webp" alt="" />

    </div>
  );
};

export default Awards;
