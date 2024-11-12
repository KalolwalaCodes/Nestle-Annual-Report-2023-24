import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

export const InfiniteMovingCardsNew = ({
    dataToFeed,
    direction = "right",
    speed = "slow",
    pauseOnHover = true,
    className,
    issec2
  }) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);
    console.log(dataToFeed);
    useEffect(() => {
      addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
  
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
  
        getDirection();
        getSpeed();
        setStart(true);
      }
    }
    const getDirection = () => {
      if (containerRef.current) {
        if (direction === "left") {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards"
          );
        } else {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse"
          );
        }
      }
    };
    const getSpeed = () => {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s");
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s");
        } else {
          containerRef.current.style.setProperty("--animation-duration", "80s");
        }
      }
    };
    return (
      <div
        ref={containerRef}
        className={cn(
          `scroller relative z-20 w-[100%] overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_14%,white_80%,transparent)]`,
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {dataToFeed.map((item, idx) => (
            
            <li
              className="linear-gradient-bg-green w-[250px] max-w-full relative  border border-b-0 flex-shrink-0  px-8 py-6 md:w-[450px]"
             
              key={idx}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                 <div className=' flex w-full h-[50%] align-middle justify-center'>
          <img className='m-auto w-[40%] h-[40%] object-cover ' src={item[0]} alt="" />
           </div>
                <div className="relative z-20 mt-2 flex flex-row items-center justify-center">
                  <span className="flex flex-col gap-1">
                    <span className="leading-[1.6] span-bold-down font-bold text-center">
                      {item[1]}
                    </span>
                    <span className="normal-paragraph-container text-center text-xl ">
                      {item[2]}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    );
  };
