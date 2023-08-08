import { Container } from 'react-bootstrap'
import './assets/styles.css'
import {data} from './data'
import Header from './Header'
const Sidebar = () => {
  return (
    <>
      <Container className='sidebar'>
        <Header/>
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
