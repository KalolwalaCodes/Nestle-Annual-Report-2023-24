import React from 'react'
import { motion } from 'framer-motion';
import TextAnimation01 from '../AnimateText/AnimatedText01';

const GradientCard01 = ({bigData,smallData}) => {
  return (
    <motion.div initial={{opacity:0,y:"10px",scale:0.5}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.1}} viewport={{once:"true"}}  className='wrapper-card-container-01'>
      <motion.div initial={{opacity:0,y:"-10px"}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,ease:"easeInOut",delay:0.4}} viewport={{once:"true"}}  className="heading-bar">
      {bigData}
      </motion.div>
      <p className="bold-small-text">
       <TextAnimation01 text= {smallData}/>
      </p>
    </motion.div>
  )
}

export default GradientCard01
