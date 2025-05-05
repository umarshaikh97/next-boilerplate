'use client';
import { useEffect } from 'react';

export default function Loader() {
  useEffect(() => {
    // Save the original overflow style
    const originalOverflow = document.body.style.overflow;

    // Lock scrolling
    document.body.style.overflow = 'hidden';

    // Cleanup function to clear timeouts if component unmounts before timeouts complete
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="fixed w-screen h-screen overflow-hidden z-50">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/splash-background.mp4" type="video/mp4" />
      </video>

      <div className="absolute left-0 bottom-110 z-10 flex flex-col items-center w-full">
        <div className="w-70 h-29 object-contain mb-10">
          <video
            className="w-full h-full object-contain"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/dp-logo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <p className="font-32 text-center font-medium">
            Dubai Police Excellence App - Performance Dashboard V0.1
          </p>
        </div>
      </div>
      <div className="container">
        <p className="text-center absolute bottom-31 left-0 z-10 w-full font-16 font-normal">
          Supervised and Regulated by Dubai Police
        </p>
      </div>
    </div>
  );
}
