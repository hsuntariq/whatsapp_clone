import { Link } from "react-router-dom"

const RecentStatus = ({id,name,image,time}) => {
  return (
    <>
        <Link to={`status-content/${id}`} style={{color:'white',textDecoration:'none'}}>
        
        <div className="status-item" style={{padding:'0.5rem 0',margin:0}}>
              <div className="status-user">
                <img src={image} alt="" />
              </div>
              <div className="status-details">
                <div className="user-name">
                  <h4>{name}</h4>
                </div>
                <div className="status-time">
                  <p>{time}</p>
                </div>
              </div>
            </div> 
            </Link>
    </>
  )
}

export default RecentStatus
