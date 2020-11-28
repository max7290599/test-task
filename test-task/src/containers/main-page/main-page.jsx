import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMetaData } from '../../state/meta-reducer/action';
import { openModal, closeModal } from '../../state/dialogWindow/action';
import { changeForm } from '../../state/form-reducer/action';
import { metaSelector } from '../../state/meta-reducer/selector';
import { windowSelector } from '../../state/dialogWindow/selector';
import Button from 'arui-feather/button';
import DinamicForm from '../../components/dinamicForm/dinamicForm';



const MainPage = () => {
    const [loadData, setloadData] = useState('true');
    const [formData, setFormData] = useState({});
    const put = useDispatch();
    const meta = useSelector(metaSelector);
    const modalWindow = useSelector(windowSelector);


    const getOpenModal = () =>{
        return put(openModal());
    }

    const handlerClick = () =>{
        put(getMetaData());
        meta? setloadData('false'):null;
    } 

    const addForm = (value) =>{
        setFormData(value)
        return put(changeForm(FormData));
    } 

    return (
        <div>
            { loadData=="true" ? ( 
                <Button view='extra'onClick={handlerClick} >Press me</Button>
            ):(
                <div>
                    <DinamicForm
                        meta = { meta }
                        addForm = { addForm }
                        getOpenModal = { getOpenModal }
                    />
                </div>
            )}
        </div> 
    )
}

export default MainPage;
