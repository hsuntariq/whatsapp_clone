import {AiOutlineClose, AiOutlineLoading} from 'react-icons/ai'
import RecentStatus from './RecentStatus'
import {data} from './data.js'
import { Link } from 'react-router-dom'
const StatusSidebar = () => {
  return (
    <>
    <main>
        <div className="status-sidebar">
            <div className="status-item">
              <div className="status-user">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
              </div>
              <div className="status-details">
                <div className="user-name">
                  <h4>My Status</h4>
                </div>
                <div className="status-time">
                  <p>No Updates</p>
                </div>
              </div>
            </div>
              <hr style={{width:'90%',border:'none',height:'1px',background:'#697881',margin:'auto'}} />

              <p style={{color:'#6d7276',margin:'0.5rem 1rem'}}>Recent</p>

              {/*  map over the statuses */}
            {data.map((status)=>{
              return <RecentStatus key={status.id} {...status} />
            })}
          
        </div>
        <div className="status-media">
              <Link to='/' style={{color:'white',textDecoration:'none'}}>
                  <AiOutlineClose style={{ fontSize: '2rem', position: 'absolute', right: '20px', top: '10px' }} />
              </Link>
            <div className="status-content">
              <div className="status-icons">
                <AiOutlineLoading className='icon icon1'/>
                <AiOutlineLoading className='icon icon2'/>
                <AiOutlineLoading className='icon icon3'/>
              </div>
                <div className="text">
                  <p style={{width:'max-content'}}>Click on the contact to view their status updates</p>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default StatusSidebar
