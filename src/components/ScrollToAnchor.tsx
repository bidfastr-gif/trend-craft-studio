import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pathToId: Record<string, string> = {
  "/how-it-works": "how-it-works",
  "/templates": "templates",
  "/pricing": "pricing",
  "/faq": "faq",
  "/request": "request-form",
};

const ScrollToAnchor = () => {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      return () => clearTimeout(timer);
    } else if (pathToId[pathname]) {
      const timer = setTimeout(() => {
        const element = document.getElementById(pathToId[pathname]);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToAnchor;
