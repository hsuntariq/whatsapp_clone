import {useState} from 'react'
import {AiOutlineClose, AiOutlineLoading} from 'react-icons/ai'
import Modal from 'react-modal';
import RecentStatus from './RecentStatus'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import {  addStatus, getStatuses,reset } from './features/auth/authSlice'
import {FcUpload} from 'react-icons/fc'
import { base_url } from './assets/base_url';
import { FadeLoader } from 'react-spinners';
const StatusSidebar = () => {
  const {_id} = useParams();
  const {user, statuses, isLoading, isError, message } = useSelector(state => state.auth);
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
  
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



    // image states
     const [imageUploading, setImageUploading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [statusImage, setStatus] = useState(null);
    const [statusLoading,setStatusLoading] = useState(false);
    // handle image change
     const handleImage = (e) => {
        const file = e.target.files[0];
        const img = URL.createObjectURL(file);
        setImagePreview(img)
        setStatus(file)
    }

  //handle image upload
  const handleImageUpload = async (e) => {
    setImageUploading(true)
    const data = new FormData();
    data.append('file', statusImage);
    data.append('upload_preset', 'vgvxg0kj');
    let res = await fetch('https://api.cloudinary.com/v1_1/djo5zsnlq/image/upload', {
      method: 'post',
      body: data,
    })
    const urlData = await res.json();
    setImageUploading(false)
    return urlData.url;
  } 

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!statusImage) {
    toast.error('Please choose a photo');
  } else {
      setStatusLoading(true)
    try {
      let status = await handleImageUpload(statusImage);
      const data = {
        status: status,
        id: _id // Make sure _id is defined and accessible
      };
      const response = await fetch(`${base_url}/user/update-status/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      setStatusLoading(false);
      
      if (response.ok) {
        await response.json();
        toast.success('Status updated successfully');
        setStatus(null)
      } else {
        toast.error('Error updating status');
      }
    } catch (error) {
      toast.error('Error: ' + error.message);
    }
  }
};


  return (
    
    <>
    <main>
        <div className="status-sidebar">
            <div className="status-item" onClick={openModal}>
              <div className="status-user">
                <img src={user?.photo} alt="" />
              </div>
              <div className="status-details">
                <div className="user-name">
                  <h4>My Status</h4>
                </div>
                <div className="status-time">
                  {!user?.status && <p>No updates</p> }
                </div>
              </div>
            </div>
            
            <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Modal"
              >
                {statusLoading ? (
                  <div className='loader'>
                  <FadeLoader color='#01B29D' size={100} />
                  </div>
                ) : (
                  <>
                  <h1 className="close-button" style={{textAlign:'right',color:'#DD0031',fontWeight:'normal',cursor:'pointer'}} onClick={closeModal}>
                  X
                </h1>
                <h2 style={{textAlign:'center',color:'#00866A',fontWeight:'normal',cursor:'pointer'}}>Upload Your Status</h2>
                <input onChange={handleImage} type='file' style={{margin:'20px auto',display:'flex',cursor:'pointer',opacity:'0',zIndex:'3333'}}/>
                <div className='upload' style={{position:'relative',pointerEvents:'none'}} >
                  <FcUpload style={{margin:'20px auto',display:'flex',cursor:'',fontSize:'4rem',position:'absolute',top:'-40px',left:'50%',transform:'translate(-50%,-50%)'}}/>
                </div>
                <div className='imgPrev' style={{width:'500px',height:'300px',margin:'40px auto',border:'1px solid lightgray',borderRadius:'10px',boxShadow:'1px 1px 10px 1px gray'}}>
                    <img style={{width:'100%',height:'100%',objectFit:'contain'}} src={imagePreview && imagePreview}/>
                </div>
                <button onClick={handleSubmit} className='status-upload'>
                  Upload Status
                </button>
                </>
                )}
      </Modal>
              <hr style={{width:'90%',border:'none',height:'1px',background:'#697881',margin:'auto'}} />

              <p style={{color:'#6d7276',margin:'0.5rem 1rem'}}>Recent</p>

              {/*  map over the statuses */}
            {!isLoading ? (statuses?.map((status)=>{
              return <RecentStatus key={status._id} {...status} />
            })) : (
              <div className="loader"></div>
            ) }
          
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
                <div className="text" style={{margin:'20rem auto'}}>
                  <p style={{textAlign:'center'}}>Click on the contact to view their status updates</p>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default StatusSidebar
