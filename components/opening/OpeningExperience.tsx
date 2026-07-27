"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpeningScreen from "./OpeningScreen";

interface Props {
  children: React.ReactNode;
}

export default function OpeningExperience({ children }: Props) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (!opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <>
      <AnimatePresence mode="wait">
        {!opened && (
          <motion.div
            key="opening"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.03,
              transition: {
                duration: 0.9,
                ease: "easeInOut",
              },
            }}
          >
            <OpeningScreen onOpen={() => setOpened(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
