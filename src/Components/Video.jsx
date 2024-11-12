import React,{useRef} from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
const Video = ({src}) => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, {
    amount: 0.4,
  });
  const { scrollYProgress } = useScroll(
    () => {
      console.log(scrollYProgress);
    },
    {
      target: [targetRef],
      offset: ["start end", "end start"],
    }
  );
  const scale = useTransform(scrollYProgress, [0, 0.3,0.6], [1,1.5,2]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1,0.9]);
  return (
    <motion.div style={{scale:scale,opacity:opacity,overflowX:"hidden"}}  ref={targetRef}>
        <video autoPlay muted loop 
          style={{width:"100%",
          }}
        >
            <source src={src} />
        </video>
    </motion.div>
  )
}

export default Video