import React from 'react';
import Spin from 'arui-feather/spin';
import Button from 'arui-feather/button';

const IsLoading = (props) => {


    return (
        <div>
            <Spin
                ize={ size }
                visible={ true }
            />
            <Button size={ "m" } onClick={handlerClick}>
                Отмена
            </Button>
        </div>
    )
}

export default IsLoading;