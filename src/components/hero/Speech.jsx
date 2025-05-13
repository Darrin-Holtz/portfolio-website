import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const Speech = () => {
  return (
    <motion.div className='bubbleContainer' animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
        <div className="bubble">
          <TypeAnimation
            sequence={[
              1000,
              'Creative mind with a builder\'s heart',
              1000,
              'Makes ideas real - with code and vision',
              1000,
              'Builds brands, websites and digital freedom',
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
          />
        </div>
        <img src="/man.png" alt="" />
    </motion.div>
  )
}

export default Speech