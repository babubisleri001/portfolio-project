import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          As a web developer, I focus on creation of impressive websites
          <br /> and as a trader, I manage portfolios and advice securities
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
         
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Website Modernization</h2>
          <p>
          Revamp outdated websites with modern designs, ensuring mobile-friendliness, faster loading times, and improved UI/UX to boost customer engagement and business growth. I focus on responsive designs, intuitive navigation, and the latest tech trends to help you stay ahead.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Personal Finance Consulting</h2>
          <p>
          With expertise in equities and securities, I help clients manage their portfolios, minimize risk, and maximize returns. Tailored strategies for individuals and small businesses aiming to achieve financial goals efficiently.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> E-Commerce Development</h2>
          <p>
          Launch your online store with seamless designs, secure payment gateways, and user-friendly features. I specialize in building platforms like Shopify, WooCommerce, and custom stores that convert visitors into loyal customers.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> Data-Driven Marketing Insights</h2>
          <p>
          Leverage data analytics to enhance your website and investment decisions. I analyze visitor behavior, stock trends, and performance metrics to offer actionable insights that grow your digital and financial assets.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;