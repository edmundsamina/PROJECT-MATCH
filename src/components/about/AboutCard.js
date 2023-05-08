import "./About.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutUsCard(props) {

  const ref = useRef(null);
  const  inView = useInView(ref, {
    threshold: 0.5, // When to trigger the animation
    once: true, // Only trigger once
  });

  const animationVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      ref={ref}
      initial={animationVariants.hidden}
      animate={inView ? animationVariants.visible : animationVariants.hidden}
      transition={{ duration: 0.5 }}
      className={`about-us-card ${props.class}`}
    >
      <h2>{props.heading}</h2>
      <p>{props.statement}</p>
    </motion.div>
  );
}