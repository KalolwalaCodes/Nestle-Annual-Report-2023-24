import React from 'react'
import ProductHero from '../../Components/Producthero/ProductHero';
import GradientCard01 from '../../Components/GradientCard/GradientCard01';
import {motion} from 'framer-motion';
const Patnerships = () => {
  return (
    <div className='wrapper-main-product-portfolio'>
    <div className="pp-sec-01">
     <ProductHero
       img1={"./Patnerships/p50.jpg"}
       heading={"Growing together to go far"}
       img2={""}
       url
       heading2={'Partnerships'}
     />
   </div>
   <div className="chairman-message-wrapper">
     <motion.p initial={{opacity:0,y:"10px"}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} className="big-medium-font mt-6">
     Your Company recognizes the importance of collaboration and
     has built a strong network of partners. This includes over 280,000 farmers, 4,600 suppliers, 10,000 distributors and re-distributors and 5.2 million retail outlets. This network, along with nine factories and 22 co-manufacturers and co-packers, produces high-quality products while delivering exceptional value to consumers.
        </motion.p>
    <div >

       <motion.p initial={{opacity:0,y:"10px"}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} className="normal-paragraph-container">
       Your Company's approach to supply chain management is anchored in three fundamental pillars: a forward- looking workforce, digital maturity and strong partnerships across the value chain. Prioritizing collaboration and continuous improvement ensures your Company’s supply chain is resilient, agile and adept
in meeting challenges in an interconnected world.
<br />
Product quality is paramount, from sourcing ingredients till manufacturing. Your Company adheres to the Nestlé Responsible Sourcing Standard (NRSS) in its supplier selection process. This stringent standard ensures that suppliers uphold ethical practices

       </motion.p>
       <div className="flex sm:flex-col md:flex-row gap-8">
       <GradientCard01
            bigData={"4,600+"}
            smallData={"Suppliers"}
          />
       <GradientCard01
            bigData={"10,000+"}
            smallData={"Distributors and re-distributors"}
          />
       </div>
      
       <motion.p initial={{opacity:0,y:"10px"}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} className="normal-paragraph-container">
       in business integrity, human rights, health and safety and environmental responsibility throughout their operations, production processes and sourcing practices.
<br />
Your Company sources more than 90% of raw materials locally. These include commodities such as milk, coffee, spices etc. Being deeply rooted in science and technology, your Company extensively uses technology, while partnering with farmers and other suppliers to ensure that the raw materials are sourced sustainably, with minimal impact on the environment. Your Company has trained dairy and coffee farmers on environmental sustainability.
<br />By embracing cutting-edge technology, your Company fosters a seamless flow of goods from production to the hands
of consumers. Supply Chain Management systems provide real-time inventory tracking,
ensuring distributors always have the products that they require. Over half of the customer orders are processed digitally and this has streamlined the entire ordering process. Secure distributor portals offer 24/7 access to resources
and empower them to manage their businesses efficiently. Mobile applications further streamline communication, allowing everyone to stay connected on the go. This focus on technological innovation, alongside strong partnerships,
has ensured that your Company's products are available even in the remotest corners of India, from the challenging terrains of Kargil in the north to the deep deserts
of Tanot in the west, and from the southernmost tip of Kanyakumari to remote areas like Koloriang in the north-east.
<br />
Your Company has been modernizing distribution centers to ensure faster servicing of customers and consumers.
       </motion.p>
    </div>
    <motion.div className="flex sm:flex-col lg:flex-row mt-4 lg:gap-10 p-4" >
    <motion.div initial={{opacity:0,y:"10px",scale:0.5}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.1}} viewport={{once:"true"}}  className='sm:w-full lg:w-[60%]'>
        <img src="./Patnerships/Artboard 42@3x.webp" alt="" />
    </motion.div>
    <motion.div initial={{opacity:0,y:"10px",scale:0.5}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} viewport={{once:"true"}}  className='sm:w-full lg:w-[30%] p-4'>
        <img  src="./Patnerships/p51q.webp" alt="" />
    </motion.div>

    </motion.div>
     </div>
 </div>
  )
}

export default Patnerships
