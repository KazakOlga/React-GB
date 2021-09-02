import React from 'react';
import useCallback from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {buttonCheck} from '../state/actions/profile';

function Profile(){
    const dispatch = useDispatch();
    const {showName,name,age} = useSelector(state => state.profile)
    const setShowName = useCallback(() => {
        dispatch(buttonCheck);
      }, [dispatch]);
    
return(
    <div>
<p>Профиль </p>
<input
          type="checkbox"
          checked={showName}
          value={showName}
          onChange={setShowName}
/>
    {showName && <p>{name}</p>}
    <p>{age}</p>
    </div>
    
)
};

export default Profile;