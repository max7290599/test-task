import React from 'react';
import Button from 'arui-feather/button';
import Plate from 'arui-feather/plate';
import Spin from 'arui-feather/spin';

import './isLoading.css';


const IsLoading = ({ handleClick }) => (
    <Plate type='common' title='Подождите, идет загрузка данных...' className='dialog-window'>
        <Spin
            className='loading'
            size='xl'
            visible={true}
        />
        <Button className='button' size='m' onClick={handleClick} text='Отмена' />
    </Plate>
)

export default IsLoading;