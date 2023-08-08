import { useState } from 'react'
import { toast } from 'react-toastify';

const AddEntry = () => {
  const [sector, setSector] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const handleSubmit = async(e) => {
    e.preventDefault()
    setisLoading(true)
    if (!sector) {
      toast.error('Please enter the field');
      setisLoading(false);
    }else{

  try {
    const data = await fetch('http://localhost:3001/api/post-sector', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sector
    })
  });

  if (!data.ok) {
    throw new Error('Network response was not ok');
  }

  const response = await data.json();

  console.log('Response:', response);
    setisLoading(false);
  toast.success('Data Posted SuccessFully')
  setSector('')
} catch (error) {
  toast.error( error);
}
    }


  }
  if (isLoading) {
    return <h1>Posting...</h1>
  }
  return (
    <>
    <div style={{height:'80vh'}} className="container ">      
      <form  className='p-4 col-lg-5 m-auto mt-5 border border-secondary'>
        <h1 className="text-center animate">
            Add an Entry
        </h1>
        <label className='text-light'>Sector</label>
        <input value={sector} onChange={(e)=>setSector(e.target.value)} type="text" placeholder='Sector...' className="form-control" />
        <button onClick={handleSubmit} className='btn btn-success my-3 w-100'>Add Entry</button>
      </form>
    </div>
    </>
  )
}

export default AddEntry
