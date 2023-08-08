import { useState,useEffect } from "react";
import { toast } from "react-toastify";

const GetSectors = () => {
  const [sectors, setSectors] = useState([]);
  const [isLoading, setisLoading] = useState(true);
    const getData = async () => {
      try {
        const data = await fetch('http://localhost:3001/api/get-sector')
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
    useEffect(() => {
        getData();
    },[])
    if (isLoading) {
        return <h1>Loading...</h1>
    }
  return (
    <>
        <div className="container">
            <h1 className="text-center animate display-1">
                Sectors
            </h1>
              <div className="row">
                {sectors?.map((sector)=>{
                    return (
                        <>      
                        <div className="col-sm-3">
                                <div className="card p-2 mb-3" style={{ height: '100px' }}>
                                <h6 className="text-secondary">id:{sector._id}</h6>
                                <h6 className="text-dark">sector:{sector.sector}</h6>
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default GetSectors
