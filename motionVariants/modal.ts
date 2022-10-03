export const overlayVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
  exit: {
    transition: {
      delay: 0.6,
      duration: 0.4,
    },
  },
};

export const modalVariant = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      ease: "easeInOut",
    },
  },
  exit: {
    y: -100,
    opacity: 0,
  },
};
