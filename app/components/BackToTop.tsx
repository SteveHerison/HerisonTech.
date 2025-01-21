"use client";
import { ArrowUpWideNarrow } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const BackToTop = () => {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = useCallback(() => {
    // Mostrar o botão quando o scroll for maior que 500px
    if (window.scrollY > 500 && !show) {
      setShow(true);
    }

    // Esconder o botão quando o scroll for menor ou igual a 500px
    if (window.scrollY <= 500 && show) {
      setShow(false);
    }
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed z-40 bottom-10 right-4"
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          <button
            onClick={scrollToTop}
            className="p-3 shadow-lg sm:p-4 shadow-purple-950 bg-gradient-to-r from-purple-950 to-black rounded-xl"
          >
            <ArrowUpWideNarrow size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
