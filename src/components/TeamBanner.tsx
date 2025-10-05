import React from "react";
import Banner from "./Banner";

function TeamBanner({ prop , mobile }: { prop: any; mobile?: boolean }) {
  const [toggleOpen, setToggleOpen] = React.useState(true);
  console.log("Rendering TeamBanner with prop:", prop, "and mobile:", mobile);
  return (
    <div className="relative w-full flex justify-center items-center">
      {/* <img
        src="/airship-silver.png"
        alt="Air"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] z-50"
        onClick={() => setToggleOpen(!toggleOpen)}
      /> */}
      <Banner prop={prop} mobile={mobile} img={""} name={""} />
    </div>
  );
}

export default TeamBanner;
