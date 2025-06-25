import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollMainIntoView = () => {
      const mainEl = document.querySelector("main");
      if (mainEl) {
        mainEl.scrollIntoView({
          behavior: "auto", // use "smooth" if you want animated scroll
          block: "start",
        });
      } else {
        window.scrollTo({ top: 0, left: 0 });
      }
    };

    const timeout = setTimeout(() => {
      // Ensure layout is painted and motion is done
      requestAnimationFrame(() => {
        scrollMainIntoView();
      });
    }, 300); // Delay more than Framer Motion's total animation duration

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
