import { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
const Register = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleImage = (e) => {
        const file = e.target.files[0];
        const img = URL.createObjectURL(file);
        setImagePreview(img)
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
                            <input type="text" placeholder='Username' />
                            <PhoneInput
                              country={'pk'}
                              value={phoneNumber}
                              onChange={(value)=>setPhoneNumber(value)}
                              placeholder={'+92 315 1248441'}
                              style={{color:'black',marginBottom:'1rem'}}
                            />
                      </form>
                      <button className='register'>Register</button>
                    </div>
              </div>
          </div> 
    </>
  )
}

export default Register
