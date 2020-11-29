import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMetaData } from '../../state/meta-reducer/action';
import { closeModal } from '../../state/dialogWindow/action';
import { changeForm } from '../../state/form-reducer/action';
import { metaSelector, isLoadedSelector, responseSelector } from '../../state/meta-reducer/selector';
import { dataFormSelector } from '../../state/form-reducer/selector';
import { windowSelector } from '../../state/dialogWindow/selector';
import { sendFetchData } from '../../state/meta-reducer/action';
import Button from 'arui-feather/button';
import DinamicForm from '../../components/dinamicForm/dinamicForm';
import WindowDialog from '../../components/dialogWindow/dialogWindow'
import IsLoading from '../../components/isLoading/isLoading';


const MainPage = () => {
    const [timerId, setTimerId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const put = useDispatch();
    const meta = useSelector(metaSelector);
    const isOpenDialogModal = useSelector(windowSelector);
    const isLoaded = useSelector(isLoadedSelector);
    const dataForm = useSelector(dataFormSelector);
    const response = useSelector(responseSelector);


    const handleCloseModal = () => {
        put(closeModal());
    }

    const handleSubmitForm = () => {
        put(sendFetchData(dataForm));
    }

    const handleClick = () => {
        setIsLoading(true);
        setTimerId(setTimeout(() => { put(getMetaData()) }, 3000));
    }

    const handleCancel = () => {
        setIsLoading(false)
        clearTimeout(timerId)
    }

    const handleChangeForm = (value) => {
        put(changeForm(value));
    }

    return (
        <div>
            { !isLoaded ? (
                <Button view='extra' onClick={handleClick} >Press me</Button>
            ) : (
                    <div>
                        <DinamicForm
                            meta={meta}
                            onChangeForm={handleChangeForm}
                            handleSubmitForm={handleSubmitForm}
                            response={response}
                        />
                    </div>
                )}
            <WindowDialog
                text={response}
                isOpenDialogModal={isOpenDialogModal}
                handleCloseModal={handleCloseModal}
            />
            {isLoading && !isLoaded && <IsLoading handleCancel={handleCancel} />}
        </div>
    )
}

export default MainPage;
