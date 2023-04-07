import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const HeroSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      {/* Your hero section content */}
    </motion.div>
  );
};
