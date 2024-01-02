import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { HashLoader } from "react-spinners";

const RecentStatus = ({ _id, username, photo, statusContent }) => {
  const { user, statuses, isLoading, isError, message } = useSelector(state => state.auth);

  const findStatus = () => {
    const user = statuses.find(user => user._id === _id);
    return user
  }

  useEffect(() => {
    findStatus();
  }, [])

  const getTotal = () => {
    const total = findStatus()?.statusContent?.length
    return total;
  }

  // console.log(console.log(getTotal()))
  if (isLoading) {
    return <div className='' style={{ height: '60vh', display: 'grid', placeContent: 'center' }}>
      <HashLoader color='#FF9100' size={40} />
    </div>
  }

  return (
    <>
      <Link to={`/status-content/${_id}`} style={{ color: 'white', textDecoration: 'none' }}>

        <div className="status-item" style={{ padding: '0.5rem 0', margin: 0 }}>
          <div className="status-user">
            <img src={photo} alt="" />
          </div>
          <div className="status-details">
            <div className="user-name">
              <h4>{username}</h4>
            </div>
            <div className="status-time">
              {/* <p>{time}</p> */}
            </div>
            {findStatus()?.statusContent?.map((u, index) => {
              return <div key={index} className="border-div"></div>
            })}
          </div>
        </div>
      </Link>
    </>
  )
}

export default RecentStatus
