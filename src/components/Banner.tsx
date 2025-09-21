import React, { useEffect, useRef } from "react";

interface BannerProps {
  img: string;
  name: string;
  animationDelay?: number; // Optional delay in seconds
  width?: string | number; // Optional width (default: 100%)
  height?: string | number; // Optional height (default: 600px)
  isOpen?: boolean; // Controls open/close animation
}

function Banner({
  img,
  name,
  animationDelay = 0,
  width = "100%",
  height = "200px",
  isOpen = true,
}: BannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const rollEdgeRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);
  const [open, setOpen] = React.useState(isOpen);
  useEffect(() => {
    const banner = bannerRef.current;
    const photo = photoRef.current;
    const nameEl = document.getElementById(`name-${name.replace(/\s+/g, "-")}`);

    // Function to update photo position as banner rolls
    const updatePhotoPosition = () => {
      if (!banner || !photo) return;

      // Get the current height of the banner
      const bannerHeight = banner.offsetHeight;
      const bannerWidth = banner.offsetWidth;

      // Set image opacity based on banner height - fade out as banner rolls up
      if (bannerHeight > 60) {
        photo.style.opacity = "1";
        if (nameEl) nameEl.style.opacity = "1";
      } else if (bannerHeight > 30) {
        const scale = (bannerHeight - 30) / 30;
        photo.style.opacity = scale.toString();
        if (nameEl) nameEl.style.opacity = scale.toString();
      } else {
        // Hide the image when banner is almost fully rolled
        photo.style.opacity = "0";
        if (nameEl) nameEl.style.opacity = "0";
      }

      // Request next frame
      requestAnimationFrame(updatePhotoPosition);
    };

    // Start updating the photo position
    const animationFrame = requestAnimationFrame(updatePhotoPosition);

    // This adds some subtle random movement to make it more realistic
    const addSubtleMovement = () => {
      if (!banner) return;

      const randomX = (Math.random() - 0.5) * 2;
      const randomTime = 2 + Math.random() * 2;

      banner.style.transition = `transform ${1}s ease-in-out`;
      banner.style.transform = `rotateX(10deg)`;

      // setTimeout(addSubtleMovement,  1000);
    };

    // Start the subtle movement after a delay
    const timeout = setTimeout(addSubtleMovement, 2000);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeout);
    };
  }, [name]);
  const [toggleOpen, setToggleOpen] = React.useState(isOpen);
  return (
    <div className="flex flex-col items-center justify-center">
       <img
        src="/airship-silver.png"
        alt="Air"
        className=" w-[400px] h-[200px] z-10"
        onClick={() => setOpen(!open)}
      />
      <div
        className="relative  max-w-[170px] perspective-[1000px] translate-x-[-12%] translate-y-[-120%] z-[0] top-[200px] "
        style={{
          aspectRatio: "2/3", // Maintain a 2:3 aspect ratio
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `200px` : height,
        }}
      >
        {/* {Rope} */}
        <div className="absolute top-[-50px] left-[-10px] w-[5px] h-[50px] bg-gradient-to-b from-[#8a7055] to-[#5a4a38]  z-[3] shadow-md rotate-[-10deg]"></div>
        <div className="absolute top-[-50px] right-[-10px] w-[5px] h-[50px] bg-gradient-to-b from-[#8a7055] to-[#5a4a38]  z-[3] shadow-md rotate-[10deg]"></div>

        {/* Rod */}
        <div className="absolute top-0 left-0 w-full h-[10px] bg-gradient-to-b from-[#8a7055] to-[#5a4a38] rounded-[5px] z-[3] shadow-md before:content-[''] before:absolute before:w-[20px] before:h-[20px] before:bg-[#5a4a38] before:rounded-full before:top-[-5px] before:left-[-10px] before:z-[4] after:content-[''] after:absolute after:w-[20px] after:h-[20px] after:bg-[#5a4a38] after:rounded-full after:top-[-5px] after:right-[-10px] after:z-[4]"></div>

        {/* Banner */}
        <div
          ref={bannerRef}
          className={`absolute top-[10px] left-0 w-full bg-[#f5f0e1] origin-top shadow-md overflow-hidden h-[10px] ${
            open ? "animate-banner-open" : "animate-banner-close"
          }`}
          style={{
            height: "200px",
            transformOrigin: "top center",
            animationDelay: `${animationDelay}s`,
          }}
        >
          {/* Photo container */}
          <div className="absolute w-full h-full flex justify-center items-center overflow-hidden pointer-events-none">
            <img
              ref={photoRef}
              src="/OIP.jpg"
              alt={name}
              className="w-full h-full object-cover z-[2]"
            />
            <div className="absolute bottom-5 w-full text-center z-[3] bg-black/30 py-1 px-2">
              <span
                id={`name-${name.replace(/\s+/g, "-")}`}
                className="text-white font-semibold text-sm transition-opacity duration-300"
              >
                {name}
              </span>
            </div>
          </div>
        </div>
            
        {/* Roll Edge */}
        <div
          ref={rollEdgeRef}
          className="absolute w-full h-[20px] bottom-0 left-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] via-[rgba(0,0,0,0.1)] to-transparent rounded-bl-[10px] rounded-br-[10px] z-[9] animate-roll-up"
          style={{
            transformOrigin: "bottom center",
            animationDelay: `${animationDelay}s`,
          }}
        ></div>

        {/* Shadow */}
        <div
          className="absolute bottom-[-10px] left-[10%] w-[80%] h-[10px] bg-[rgba(0,0,0,0.2)] rounded-full blur-[5px] animate-shadow-change"
          style={{ animationDelay: `${animationDelay}s` }}
        ></div>
      </div>
    </div>
  );
}

export default Banner;
