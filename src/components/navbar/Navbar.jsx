import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
    
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
      <div className="quote">The journey of a thousand miles begins with a single line of code.</div>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          
          <a href="https://www.instagram.com/babu_bisleri.01/">
            <img src="/instagram.png" alt="" />
          </a>

          <a href="https://github.com/babubisleri001 ">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/shubham-mishra-75340a24b" target="_blank">
  <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
</a>


         
          
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;