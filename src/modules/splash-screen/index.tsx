'use client';
import { useEffect, useState } from 'react';

import Loader from '@/components/layout/Loader';

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Save the original overflow style
    const originalOverflow = document.body.style.overflow;

    // Lock scrolling
    document.body.style.overflow = 'hidden';

    const fadeTimer = setTimeout(() => {
      setFade(true); // Start fading out after 3 seconds
      document.body.style.overflow = originalOverflow;
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShow(false); // Completely remove after fade completes
    }, 3500); // 3 seconds + 500ms for the fade effect

    // Cleanup function to clear timeouts if component unmounts before timeouts complete
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      // document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Render the Loader with Tailwind classes for fade-out animation
  return show ? (
    <div
      className={`transition-opacity duration-500 ease-out ${fade ? 'opacity-0' : 'opacity-100'}`}
    >
      <Loader />
    </div>
  ) : (
    <></>
  );
}
