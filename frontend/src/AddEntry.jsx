import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const AddEntry = () => {
  const [name, setName] = useState('');
  const [check, setCheck] = useState('');
  const [selectedValues, setSelectedValues] = useState([]);
  const [sector, setSector] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [sectors, setSectors] = useState([]);
  const [postLoad, setPostLoad] = useState(false);
  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const selectedValues = selectedOptions.map(option => option.value);
    setSelectedValues(selectedValues);
  };
    const getData = async () => {
      try {
        const data = await fetch('https://dark-blue-fox-toga.cyclic.app/api/get-sector')
        if (!data.ok) {
            throw new Error('Network response was not ok');
          }
          const response = await data.json();
          setSectors(response);
          setisLoading(false)
          console.log(sectors)
      } catch (error) {
        toast.error( error);
      }
  } 
  // post data
  const handleSubmit = async(e) => {
    e.preventDefault()
    setPostLoad(true)
    if (!name || !check || !selectedValues) {
      toast.error('Please enter the field');
      setPostLoad(false);
    }else{

  try {
    const data = await fetch('https://dark-blue-fox-toga.cyclic.app/api/post-sector', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,selectedValues
    })
  });

  if (!data.ok) {
    throw new Error('Network response was not ok');
  }

  const response = await data.json();

  console.log('Response:', response);
    setisLoading(false);
  toast.success('Data Posted SuccessFully')
  setName('')
  setSelectedValues([])
  setCheck('')
} catch (error) {
  toast.error( error);
}
    }


  }
   useEffect(() => {
        getData();
    },[])

    
  if (isLoading) {
    return <h1 className='text-light text-center'>Loading...</h1>
  }
  return (
    <>
    <div style={{height:'80vh'}} className="container ">      
      <form  className='p-4 col-lg-5 m-auto mt-5 border border-secondary'>
        <h1 className="text-center animate">
            Add an Entry
        </h1>
        <label className='text-light'>Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name...' className="form-control" />
          <select className='form-control my-3' multiple onChange={handleSelectChange} name="" id="">
            {sectors.map((sector)=>{
              return sector.selectedValues.map((mySector) => {
                return (
                  <>
                  <option value={mySector}>{mySector}</option>

                  </>
                )
              })
            })}
        </select>
        <input type="checkbox" value={check} onChange={(e)=>setCheck('checked')} className='' />
        <label htmlFor="" className='text-light ms-3'>Agree to terms</label>
        <button onClick={handleSubmit} className='btn btn-success my-3 w-100'>Save</button>
      </form>
    </div>
    </>
  )
}

export default AddEntry
