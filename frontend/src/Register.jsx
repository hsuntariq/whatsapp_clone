import { useEffect, useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { registerUser, reset } from './features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import {FadeLoader} from "react-spinners";
import './assets/styles.css'
const Register = () => {
  const [imageUploading, setImageUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
    const [phone, setPhone] = useState('');
    const [formFields,setFormFields] = useState({
      name:'',email:'',password:''
    })
    const { username, password } = formFields;

    // get data from the state
  const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth);

  // initialize dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
    // handle the change
    const handleChange = (e) => {
      setFormFields((prevValue) => ({
        ...prevValue,
        [e.target.name] : e.target.value,
      }))
    }
    
    const handleImage = (e) => {
        const file = e.target.files[0];
        const img = URL.createObjectURL(file);
        setImagePreview(img)
        setImage(file)
    }


  const handleImageUpload = async (e) => {
    setImageUploading(true)
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'vgvxg0kj');
    let res = await fetch('https://api.cloudinary.com/v1_1/djo5zsnlq/image/upload', {
      method: 'post',
      body: data,
    })
    const urlData = await res.json();
    setImageUploading(false)
    return urlData.url;
  }
  // send the data to the backend
  
  const handleClick = async(e) => {
    e.preventDefault()
   
    if (!username || !password || !image || !phone) {
      toast('Please enter all the fields');
    } else {
        const photo = await handleImageUpload(image);
        const userData = {
        username,password,phone,photo
      }
      if (isError) {
        toast(message);
      } else {
      dispatch(registerUser(userData))
    }
  }

    
  }

  // handle the side effects
  useEffect(() => {
    if (isSuccess || user) {
      navigate('/');
      toast.success(`Welcome ${user?.username.toUpperCase()}`);
    } if(isError) {
      toast(message);
    }
    dispatch(reset())
  }, [isSuccess, user, navigate, dispatch,isError,message]);


  if (isLoading) {
    return <div className='loader'>
      <FadeLoader color='#01B29D' size={100} />
    </div>
  }

  return (
    <>
          <div className="background">
              <div className="green">
                  <div className="logo">
                      <img style={{width:'40px'}} src="https://www.freepnglogos.com/uploads/whatsapp-png-logo-1.png" alt="" />
                      <h3>WhatsApp Web</h3>
                  </div>
              </div>
              <div className="form">
                  <div className="info" style={{ color: 'black',display:'flex',justifyContent:'space-around',flexDirection:'column' }}>
                      <div className="top">
                          
                        <h1>To use WhatsApp on your computer:</h1>
                        <ul>
                            <li>Register Yourself</li>
                            <li>If you are already a user, login with your registered credential</li>
                            <li>Start Chatting!</li>
                        </ul>
                      </div>
                      <div className="bottom">
                          <p>Already a user of WhatsApp ? <span className='login'>Login Instead</span> </p>
                      </div>
                    </div>
                    <div className="registration-form">
                      <form>
                          <div className="profile">
                              <AiOutlinePlus className="add"/>  
                          <img style={{width:'150px',height:'150px',margin:'auto',display:'flex',objectFit:'contain',border:'1px solid lightgray',borderRadius:'5px'}} src={imagePreview ? imagePreview : "https://thumbs.dreamstime.com/z/qr-code-sample-shape-smiling-face-isolated-white-background-92511322.jpg"} alt="" /><br/>
                            <input type="file" onChange={handleImage} className='file'  />
                        </div>
                            <input type="text" placeholder='Username' name='username' value={username} onChange={handleChange} />
                            <input type="password" name='password' placeholder='Password' value={password} onChange={handleChange} />
                            <PhoneInput
                              country={'pk'}
                              value={phone}
                              onChange={(value)=>setPhone(value)}
                              placeholder={'+92 315 1248441'}
                              style={{color:'black',marginBottom:'1rem'}}
                            />
                      </form>
                      <button onClick={handleClick} className='register'>Register</button>
                    </div>
              </div>
          </div> 
    </>
  )
}

export default Register
