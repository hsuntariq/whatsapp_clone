import React from 'react'
import { BsEmojiLaughing,BsPlusLg,BsFillMicFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
        <footer>      
            <div className="emojis">
                <BsEmojiLaughing/>
                <BsPlusLg/>
            </div>
              <div className="message">
                  <input type="text" placeholder='Type a message' />
            </div>
              <div className="voice">
                  <BsFillMicFill/>
            </div>
        </footer>
    </>
  )
}

export default Footer
