export const ballAnimation: any = {
  bounceTypeA: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  bounceTypeB: {
    y: [0, -30],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.25,
      ease: "easeOut",
    },
  },
  bounceTypeC: {
    x: [-20, 80],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};
