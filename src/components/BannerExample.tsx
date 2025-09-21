import React from "react";
import Banner from "./Banner";

const BannerExample = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Rolling Banner Animation</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example banners with different images */}
        <Banner img="/logo.png" name="Logo Banner" width={300} height={450} />

        <Banner
          img="/JOKER.png"
          name="Joker Banner"
          width="100%"
          height={400}
        />

        <Banner
          img="/placeholder.svg"
          name="Placeholder Banner"
          width="90%"
          height={500}
        />
      </div>
    </div>
  );
};

export default BannerExample;
