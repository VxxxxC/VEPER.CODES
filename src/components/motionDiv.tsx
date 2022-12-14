import { motion } from "framer-motion";

const MotionDiv = ({ children, delay }: { children: any; delay: number }) => (
  <motion.div
    className="flex flex-wrap justify-evenly gap-8"
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: delay, ease: "linear" }}
  >
    {children}
  </motion.div>
);

export default MotionDiv;
