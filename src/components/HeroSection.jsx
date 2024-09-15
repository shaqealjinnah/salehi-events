import { Button } from "@mui/material";
import bannerVideo from "../assets/banner-video.mp4";
import { useEffect, useRef } from "react";

function HeroSection() {

  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center text-white"
    >
      {/* Background video */}
      <video
        className="absolute left-0 top-0 h-full w-full object-cover z-20"
        src={bannerVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      ></video>

      {/* Overlay content */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold uppercase text-white drop-shadow-lg">
          Your Vision, Our Design
        </h2>
        <Button
          href="#about"
          className="!rounded-none font-semibold !shadow-2xl duration-300 hover:bg-[#000] hover:text-white"
          sx={{ mt: 5, px: 4, py: 1.5, color: "#000", bgcolor: "#bfbebb" }}
        >
          Let's Transfrom Your Event
        </Button>
      </div>

      {/* Optional dark overlay to improve text readability */}
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-[#A6A5A1] opacity-30"></div>
    </section>
  );
}

export default HeroSection;
