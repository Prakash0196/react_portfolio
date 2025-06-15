// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0); // scrolls to top
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;



import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); // can use 'smooth' optionally
  }, [pathname]);

  return null;
};

export default ScrollToTop;