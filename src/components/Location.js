
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = (props) => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-success'> Location {
      <select className='alert alert-success'  name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
        <option className='alert alert-success' value="£">Uk(£)</option>
        <option className='alert alert-success' value="₹">India(₹)</option>
        <option className='alert alert-success'  value="€">Europe(€)</option>
        <option className='alert alert-success'  value="CAD">Canada(CAD)</option>
      </select>	
      }	
    </div>
    );
};

export default Location;