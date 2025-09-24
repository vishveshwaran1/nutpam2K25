import React from "react";
import Banner from "./Banner";

function TeamBanner({ prop }) {
  const [toggleOpen, setToggleOpen] = React.useState(true);
  return (
    <div className="relative w-full flex justify-center items-center">
      {/* <img
        src="/airship-silver.png"
        alt="Air"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] z-50"
        onClick={() => setToggleOpen(!toggleOpen)}
      /> */}
      <Banner img="/team.png" name="Team Banner" width="100%" height={400} isOpen={toggleOpen} prop={prop} />
    </div>
  );
}

export default TeamBanner;
