import { Button } from '@mui/material';
import bannerVideo from '../assets/banner-video.mp4'

function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen relative bg-blue-500 text-white flex items-center justify-center"
    >
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bannerVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay content */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-white drop-shadow-lg uppercase">Your Vision, Our Design</h2>
        <Button href="#about" className="duration-300 font-semibold !shadow-2xl !rounded-none hover:bg-[#000] hover:text-white"
        sx={{mt: 5, px: 4, py: 1.5, color: "#000", bgcolor: "#bfbebb"}}>
          Let's Transfrom Your Event
        </Button>
      </div>

      {/* Optional dark overlay to improve text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#A6A5A1] opacity-30 z-0"></div>
    </section>
  );
}

export default HeroSection;
