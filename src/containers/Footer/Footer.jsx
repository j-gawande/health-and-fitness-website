import React from 'react';

import './Footer.css';
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding h-auto bg-indigo-50 pt-28 pb-10' id='contact'>
        <div className='gpt3__footer-heading'>
          <h1 className='gradient__text text-slate-800'>Do you want to step in to the future before others</h1>
        </div>

        <div className='gpt3__footer-btn border-slate-800 rounded-xl'>
          <p className='text-slate-800'>Request Early Access</p>
        </div>

        <div className='gpt3__footer-links'>
          <div className='gpt3__footer-links_logo'>
            <div className='font-medium text-4xl'>Yoga</div>
            <p className='border-slate-800'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>

          <div className='gpt3__footer-links_div'>
            <h4 className='text-slate-800'>Links</h4>
            <p className='text-slate-800'>Overons</p>
            <p className='text-slate-800'>Social Media</p>
            <p className='text-slate-800'>Counters</p>
            <p className='text-slate-800'>Contact</p>
          </div>
          <div className='gpt3__footer-links_div'>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className='gpt3__footer-links_div'>
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>Counters</p>
            <p>info@payme.net</p>
          </div>
        </div>

        <div className='gpt3__footer-copyright pb-4'>
          <p className='h-full w-full'>&copy; 2023 GPT-3. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer;