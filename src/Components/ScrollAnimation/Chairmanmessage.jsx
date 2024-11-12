import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import TextAnimation01 from "../AnimateText/AnimatedText01";
export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1, 1.1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.6], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.6], [0, -100]);

  return (
    <div
      className="sm:h-[70rem] md:h-[70rem] flex items-center justify-center relative p-2 md:p-20 bg-[rgb(76 77 79)] "
      ref={containerRef}
    >
      <div
        className="py-10 md:py-10 w-full relative"
        style={{
          perspective: "900px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center bold-heading-text text-black font-bold"
    >
     <TextAnimation01 text={"Chairman's message"} />
    </motion.div>
  );
};

export const Card = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        background: "#8be1de",
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-3 mx-auto sm:h-[50rem] md:h-[40rem] w-full border-4 border-[#8be1de] p-2 md:p-6 bg-[rgb(149 203 197)] rounded-[30px] shadow-2xl"
    >
      <div className=" h-full w-full  overflow-hidden rounded-2xl md:rounded-2xl md:p-4 chairman-img-bg flex justify-center align-middle sm:flex-col md:flex-row">
        {/* {children} */}
        <img
          className="m-auto sm:w-[50%] md:w-[40%]"
          src="./Landingpage/Artboard 2.png"
          alt=""
        />
        <div className="msg-chairman">
          Your Company’s total sales witnessed a double-digit growth as we
          navigated a dynamic market landscape.
          <div className="name">
            Suresh Narayanan
            <br />
            <span>Chairman and Managing Director</span>
            <br />
            <button className="">
              {" "}
              <Link to={"/Chairman's-message"}> Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
