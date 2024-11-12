import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };
  const issec2 = true;
  return (
    <div className="w-[90%] h-full p-10 grid grid-cols-1 md:grid-cols-3  mx-auto gap-7 relative cursor-pointer">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onMouseEnter={() => handleClick(card)}
            style={{ background: card.colorIs }}
            className={cn(
              card.className,
              "relative overflow-hidden",
              "bg-white rounded-xl h-full w-full"
            )}
            layout
          >
            <button className="arrow-btn-main bg-black">
              <img src="./arrow-right-up.svg" alt="" />
            </button>
            {/* {selected?.id === card.id && <SelectedCard selected={selected} />} */}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }) => {
  const [loaded, setLoaded] = useState(false);
  console.log("card content", card.content);
  return (
    <>
      <img
        src={card.thumbnail}
        height="600"
        width="600"
        onLoad={() => setLoaded(true)}
        className={cn(
          "object-contain object-top absolute inset-0 w-full transition duration-200 m-auto",
          loaded ? "blur-none" : "blur-md"
        )}
        alt="thumbnail"
      />
      {
        <div className="absolute bottom-[-100%] left-0 right-0 bg-gray-800 bg-opacity-75 flex items-center justify-center transition-all duration-700 group-hover:bottom-0 w-full h-full position-abs-full-width-div">
          <div className="text-black text-center text-xl">{card.content}</div>
        </div>
      }
    </>
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
