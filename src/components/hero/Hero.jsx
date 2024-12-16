import './hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
        <div className="textcontainer">
            <h2>Shubham Mishra</h2>
            <h1>Web developer</h1>
            <div className="buttons">
                <button>See the Latest Works</button>
                <button>Contact Me</button>
            </div>
            <img src="/scroll.png" alt="" />
        </div>
        </div>
      <div className="imgcontainer">
        <img src="./hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
