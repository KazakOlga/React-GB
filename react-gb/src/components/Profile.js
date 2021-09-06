import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {buttonCheck} from '../state/actions/profile';

function Profile(){
    const dispatch = useDispatch();
    const {showName,name,age} = useSelector(state => state.profile)
    const setButtonCheck = () => {
        dispatch(buttonCheck());
      }
    
return(
    <div>
<p>Профиль </p>
<input
          type="checkbox"
          checked={showName}
          onChange={setButtonCheck}
/>
    {showName && <div>{name}</div>}
    <p>{age}</p>
    </div>
    
)
};

export default Profile;