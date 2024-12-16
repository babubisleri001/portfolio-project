import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)} style={{ background: "none", border: "none" }}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          d="M 2 2.5 L 20 2.5" // Top Line
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
        
        />
        <motion.path
          d="M 2 11.5 L 20 11.5" // Middle Line
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
        />
        <motion.path
          d="M 2 20.5 L 20 20.5" // Bottom Line
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
