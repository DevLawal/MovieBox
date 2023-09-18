// hooks/useScroll.js
import { useEffect, useState } from 'react';

export function useScroll() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const TOP_OFFSET = 66; // Define your top offset value here

    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return showBackground;
}
