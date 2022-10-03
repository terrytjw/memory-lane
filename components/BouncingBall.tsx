import React from "react";
import { motion, useCycle } from "framer-motion";
import Button from "./Button";
import { ballAnimation } from "../motionVariants/bouncingBall";

const BouncingBall = () => {
  // cycleAnimation is a function that will cycle through the animation variants
  const [animation, cycleAnimation] = useCycle(
    "bounceTypeA",
    "bounceTypeB",
    "bounceTypeC"
  );
  return (
    <div>
      <motion.div
        className="w-3 h-3 bg-white rounded-full"
        variants={ballAnimation}
        animate={animation}
      />
      <Button onClick={() => cycleAnimation()}>Change bounce type</Button>
    </div>
  );
};

export default BouncingBall;
