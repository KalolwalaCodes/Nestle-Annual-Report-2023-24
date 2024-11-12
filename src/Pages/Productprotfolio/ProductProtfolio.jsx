import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./Layout";
import TextAnimation01 from "../../Components/AnimateText/AnimatedText01";

export function ProductPortfolio() {
  return (
    <div className="h-screen py-20 w-ful">
      <h3 className="bold-heading-text text-black font-bold text-center">
        <TextAnimation01 text={"Product portfolio"} />{" "}
      </h3>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = ({ color }) => {
  return (
    <div className="LinearGradient-line-bg">
      <p
        style={{ color: "rgb(110 42 127)" }}
        className="font-bold lg:text-6xl sm:text:4xl text-black"
      >
        40.7%
      </p>
      <p style={{ color: "rgb(110 42 127)" }} className="font-normal text-base">
        Contribution to total sales
      </p>
      <p
        style={{ color: "rgb(110 42 127)" }}
        className="font-normal text-base sm:my-2 lg:my-4 max-w-lg text-neutral-200"
      >
        Milk Products and Nutrition
      </p>
    </div>
  );
};

const SkeletonTwo = ({ color }) => {
  return (
    <div className="LinearGradient-line-bg">
      <p
        style={{ color: "rgb(110 42 127)" }}
        className="font-bold lg:text-6xl sm:text:4xl "
      >
        16.5%
      </p>
      <p
        style={{ color: "rgb(110 42 127)" }}
        className="font-normal text-base "
      >
        Contribution to total sales
      </p>
      <p
        style={{ color: "rgb(110 42 127)" }}
        className="font-normal text-base sm:my-2 lg:my-4 max-w-lg text-neutral-200"
      >
        Confectionery
      </p>
    </div>
  );
};
const SkeletonThree = ({ color }) => {
  return (
    <div className="LinearGradient-line-bg">
      <p
        style={{ color: "rgb(110 42 127)" }}
        className="font-bold lg:text-6xl sm:text:4xl "
      >
        30.4%
      </p>
      <p
        style={{ color: "rgb(110 42 127)" }}
        className="font-normal text-base "
      >
        Contribution to total sales
      </p>
      <p
        style={{ color: "rgb(110 42 127)" }}
        className="font-normal text-base sm:my-2 lg:my-4 max-w-lg text-neutral-200"
      >
        Prepared Dishes and Cooking Aids
      </p>
    </div>
  );
};
const SkeletonFour = ({ color }) => {
  return (
    <div className="LinearGradient-line-bg">
      <p
        style={{ color: "rgb(110 42 127)" }}
        className="font-bold sm:text-2xl md:text-4xl "
      ></p>
      <p
        style={{ color: "rgb(110 42 127)" }}
        className="font-normal text-base sm:my-2 lg:my-4 max-w-lg text-neutral-200"
      >
        Out-of-Home
      </p>
    </div>
  );
};
const SkeletonFive = ({ color }) => {
  return (
    <div className="LinearGradient-line-bg">
      <p
        style={{ color: "rgb(110 42 127)" }}
        className="font-bold lg:text-6xl sm:text:4xl"
      >
        12.4%
      </p>
      <p
        className="font-normal text-base "
        style={{ color: "rgb(110 42 127)" }}
      >
        Contribution to total sales
      </p>
      <p
        style={{ color: "rgb(110 42 127)" }}
        className="font-normal text-base sm:my-2 lg:my-4 max-w-lg text-neutral-200"
      >
        Powdered and Liquid Beverages
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne color={"rgb(233 246 244)"} />,
    className: "md:col-span-1",
    colorIs: "rgb(233 246 244)",
    thumbnail: "./ProductPortfolio/Artboard 2@3x.png",
  },
  {
    id: 2,
    colorIs: "#fdeee3",
    content: <SkeletonTwo color={"#fdeee3"} />,
    className: "col-span-1",
    thumbnail: "./ProductPortfolio/Artboard 4@3x.png",
  },
  {
    id: 3,
    content: <SkeletonThree color={"#fef5f4"} />,
    colorIs: "#fef5f4",
    className: "col-span-1",
    thumbnail: "./ProductPortfolio/Artboard 3@3x.png",
  },
  {
    id: 4,
    content: <SkeletonFour color={"#f0eef7"} />,
    colorIs: "#f0eef7",

    className: "md:col-span-1",
    thumbnail: "./ProductPortfolio/Artboard 6@3x.png",
  },
  {
    id: 5,
    content: <SkeletonFive color={"#fef6e4"} />,
    colorIs: "#fef6e4",
    className: "md:col-span-2",
    thumbnail: "./ProductPortfolio/Artboard 5@3x.png",
  },
];
