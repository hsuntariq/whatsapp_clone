import { Container } from 'react-bootstrap'
import './assets/styles.css'
import {data} from './data'
import Header from './Header'
import { FaSearch } from 'react-icons/fa';
import { MdFilterList } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';

import { useRef, useState } from 'react';

const Sidebar = () => {
  const [focus, setFocus] = useState(false);
  return (
    <>
      <Container className='sidebar'>
        <Header />
        <section className="search-section">
          <div className="search-bar">
            {focus ? (
                <span style={{color:'#00A884',transition:'all 0.2s5s',rotate:'180deg',fontSize:'1.5rem',alignSelf:'flex-start'}}>{<FiArrowRight/>}</span>
            ): (
                <span style={{color:'#697881',transition:'all 0.2s5s',rotate:'0deg'}}>{<FaSearch/>}</span>

            )}
            <input onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}  type="text" placeholder= {focus ? '' : 'Search or start a new chat'} className="search" />
          </div>
          <div className="filter">
            {<MdFilterList />}
          </div>
        </section>
        {data.map((person) => {
          return (
            <>
              <div className="item">
                <div className="left">

                <div className="image">
                  <img src={person.image} alt="" />
                </div>
                <div className="details">
                  <h4>{person.name}</h4>
                  <p>{person.message}</p>
                </div>
                </div>
                <div className="time">
                  <p>{person.time}</p>
                  <h6 className='new-message'>{person.newMessage}</h6>
                </div>
              </div>
            </>
          )
        })}
      </Container>
    </>
  )
}

export default Sidebar
