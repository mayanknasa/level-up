import React from 'react'
import './contact.css';
function Contact() {
  return (
    <div className='contact-container' id="contact">
      <div className='contact-tile'>
        <div className='contact-heading'>Address</div>
        <div className='contact-desc'>1497, Sector 14, Sonipat 131001</div>
      </div>
      <div className='contact-tile'>
        <div className='contact-heading'>Phone Numbers</div>
        <div className='contact-desc'>
        <a href='tel:+919588586914'>+91 9588586914</a> <br/> 
        <a href='tel:+918708874805'>+91 8708874805</a><br/> 
        <a href='tel:+919817288638'>+91 9817288638</a>
        </div>
      </div>
      <div className='contact-tile'>
        <div className='contact-heading'>Instagram</div>
        <div className='contact-desc'>
          <a href='https://www.instagram.com/levelup.sonipat/'>@levelup.sonipat</a>
        </div>
      </div>
    </div>
  )
}

export default Contact