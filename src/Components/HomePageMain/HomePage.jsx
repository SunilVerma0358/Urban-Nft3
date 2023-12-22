import React from "react";
import BigCard from "../BigCard";
import SmallCard from "../SmallCard";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap  -mx-3 pb-11 sm:px-4">
        <BigCard />
        <SmallCard />
      </div>
    </>
  );
};

export default HomePage;
