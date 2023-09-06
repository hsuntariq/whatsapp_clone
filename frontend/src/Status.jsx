import { BiArrowBack } from 'react-icons/bi'
import {useEffect} from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { Carousel } from 'react-responsive-carousel';
import {Link, useParams} from 'react-router-dom'
import { data } from './data';
import {  getStatuses,reset } from './features/auth/authSlice'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {useSelector,useDispatch} from 'react-redux'
const Status = () => {
    const { _id } = useParams();
    const user = data.find(user => user?.id === _id);
    const { statuses, isLoading, isError, message } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    try {
      dispatch(getStatuses())
    } catch (error) {
      toast(error);
    }
    dispatch(reset());
  }, [dispatch, isError, message]);
  
  const findStatus = () => {
      const user =  statuses.find(user => user._id === _id);
      return user
  }

  useEffect(()=>{
    findStatus();
  },[])

  return (
    <>
        <div className="status-screen">
              <div className="overlay">
                  <Link to={`/status/${_id}`} style={{color:'white',textDecoration:'none'}}>
                  <BiArrowBack style={{fontSize:'2rem',position:'absolute',top:'10px',left:'20px'}} />
                  </Link>
                  <Link to='/' style={{color:'white',textDecoration:'none'}}>
                      <AiOutlineClose style={{ fontSize: '2rem', position: 'absolute', right: '20px', top: '10px' }} />
                      </Link>
                  <div className="status-image">
                    <div className="user-status-details">
                        
                        
                      </div>
                      <Carousel showThumbs={false} dynamicHeight={true}>
                      {findStatus()?.statusContent?.map((content,index) => {
                        return <div key={index}>
                          <img src={content.status} alt={`Status ${index}`} />
                          <div className="user-image" style={{zIndex:'222',position:'absolute',top:'10px',left:'25px'}}>
                            <img src={findStatus()?.photo} alt="" />
                        </div>
                          <p style={{position:'absolute',top:'35px',left:'75px',color:'gray',color:'gray',fontWeight:'bold',fontSize:'0.85rem'}}>{content.statusUpdatedAt?.formattedTime}</p>
                          <div style={{position:'absolute',top:'15px',left:'75px',color:'gray'}} className="user-name">
                                <h4>{findStatus()?.username}</h4>
                        </div>

                        </div>
                      })}
                    </Carousel>
                      
                </div>
            </div>
        </div>
    </>
  )
}

export default Status
