import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SHUBHAM MISHRA</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and Equity Trader
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            {/* Resume Button */}
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1Zd6gJvN5L_I4pn0hHoRQ4YEOtBNKTExi/view?usp=drive_link",
                  "_blank"
                );
              }}
              style={{
                cursor: "pointer",
              }}
            >
              Resume
            </motion.button>

            {/* Contact Me Button */}
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/shubham-mishra-75340a24b"
                );
              }}
            > 
              Contact Me
            </motion.button>
          </motion.div>




          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Welcome All
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;