import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const GetSectors = () => {
  const [sectors, setSectors] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getData = async () => {
    try {
      const data = await fetch('https://dark-blue-fox-toga.cyclic.app/api/get-sector')
      if (!data.ok) {
        throw new Error('Network response was not ok');
      }
      const response = await data.json();
      setSectors(response);
      setisLoading(false);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <h1 className='text-light text-center'>Loading...</h1>;
  }

  return (
    <div className="container">
      <h1 className="text-center animate display-1">Sectors</h1>
      <div className="row">
        {sectors.map((sector) => (
          <div className="col-sm-3" key={sector._id}>
            <div className="card p-2 mb-3" style={{ minHeight:'150px',maxHeight: '150px',overflowY:'scroll' }}>
              <h6 className="text-secondary">Id:  <span className="text-secondary fw-lighter"> {sector._id} </span></h6>
              <h6 className="text-dark">Name: <span className="text-secondary fw-lighter"> {sector.name} </span></h6>
              <h6 className="text-dark">Sectors:<span className="text-secondary fw-lighter"> {sector.selectedValues.join(', ')}</span></h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetSectors;
