import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMetaData } from '../../state/meta-reducer/action';
import { metaSelector } from '../../state/meta-reducer/selector';
import Button from 'arui-feather/button';


const MainPage = () => {
    const [loadData, setloadData] = useState('true');

    const put = useDispatch();
    const meta = useSelector(metaSelector);

    const handleClick = () =>{
        setloadData('false')
        put(getMetaData());}

    return (
        <div>
            { loadData=="true" ? ( 
                <Button view='extra'onClick={handleClick} >Press me</Button>
            ):(
                <div>Form</div>
            )}
        </div> 
    )
}

export default MainPage;
