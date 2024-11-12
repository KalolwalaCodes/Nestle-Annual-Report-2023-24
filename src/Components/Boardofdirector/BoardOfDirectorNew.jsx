import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BoardOfDirectorNew = () => {
  const bodArray = [
    ["Mr. Suresh Narayanan", "Chairman and Managing Director", "/Bod/MD1.png"],
    ["Mr. R. V. Kanoria", "Independent Non-Executive Director", "/Bod/MD2.png"],
    ["Ms. Alpana Parida", "Independent Non-Executive Director", "/Bod/MD3.png"],
    ["Ms. Svetlana Boldina", "Executive Director –F&C and CFO", "/Bod/MD4.png"],
    ["Mr. Satish Srinivasan", "Executive Director -Technical", "/Bod/MD5.png"],
    ["Mr. P. R. Ramesh", "Independent Non-Executive Director", "/Bod/MD6.png"],
    ["Ms. Anjali Bansal", "Independent Non-Executive Director", "/Bod/MD7.png"],
    ["Ms. Suneeta Reddy", "Independent Non-Executive Director", "/Bod/MD8.png"],
    ["Mr. Sidharth Kumar Birla", "Independent Non-Executive Director", "/Bod/sidhartji.png"],
    ["Mr. Pramod Kumar Rai", "Company Secretary and Compliance Officer", "/Bod/MD9.png"],
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: window.innerWidth>=900? 0.5:0,
  });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration:0.5,
          ease:"easeInOut"
        },
      }));
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className='flex flex-wrap m-auto w-[90%] gap-5 justify-center'>
      {bodArray.map((data, key) => (
        <motion.div
          key={key}
          custom={key}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[15%] h-[370px] border border-gray-200 shadow border-pink-200 ml-4 rounded-lg"
        >
          <div className='h-[200px] w-auto m-auto red-orange-bg'>
            <img
              className="rounded-t-lg h-[200px] m-auto object-contain"
              src={data[2]}
              alt={data[0]}
            />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-xl  font-bold bod-name">{data[0]}</h5>
            <p className="mb-2 bod-Desg">{data[1]}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BoardOfDirectorNew;
