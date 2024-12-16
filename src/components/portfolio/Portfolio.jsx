import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,

    title: "Blog Application",

    img: "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    desc: "Formulated a blog application with features like user authentication, flexible post creation, and editing, achieving increase in efficiency for blog post management.            Engineered RESTful APIs using Express.js, handling over 500 database queries per day to ensure smooth CRUD operations",

    githubLink:"https://github.com/babubisleri001/blog-app",
  },
  {
    id: 2,
    title: "Chess Game App",
    img: "https://images.pexels.com/photos/7978838/pexels-photo-7978838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    desc: "Engineered an interactive chess game with drag-and-drop functionality for 100+ unique game moves, enhancing the UI/UX. Integrated standard chess rules, including valid moves for all pieces with an intuitive drag-and-drop interface for moving pieces, providing a smooth user experience",

    githubLink:"https://github.com/babubisleri001/chess-game/tree/master"
  },
  {
    id: 3,
    title: "Finance Expense Tracker",

    img: "https://images.pexels.com/photos/7947998/pexels-photo-7947998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    desc: "Coming Soon...",

    github:""
  },
  {
    id: 4,
    title: "Investments and Securities suggestion",

    img: "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    desc: "Coming Soon...",

    github:""
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
              <button>Visit Github</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;