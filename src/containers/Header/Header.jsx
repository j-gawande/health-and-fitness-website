import React from 'react';
import people from '../../assets/people.png';
import yogaImg from '../../assets/yoga_header.svg';
import { motion } from "framer-motion";
import './Header.css';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
  
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}
const Header = () => {
  return (
    <motion.div className='gpt3__header section__padding' variants={container} id='home'>
        <div className='gpt3__header-content'>
          <motion.h1 className='gradient__text' variants={item}>Welcome!, Your Path to Inner Peace and Physical Wellness Through Yoga</motion.h1>

          <div className='gpt3__header-content__people'>
            <img src={people} alt='people' />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>

        </div>
        <div className='gpt3__header-image'>
          <img src={yogaImg} alt="yogaImg" />
        </div>
    </motion.div>
  )
}

export default Header;