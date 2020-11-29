import React from 'react';
import Paragraph from 'arui-feather/paragraph';
import Button from 'arui-feather/button';
import Heading from 'arui-feather/heading';

const DialogWindow = (props) => {
    return (
        <dialog open={props.isOpenDialogModal}>
            <Heading>
                Ответ от сервера
            </Heading>
            <Paragraph>
                {props.text && <div>{props.text.result}</div>}
            </Paragraph>
            <Button view='extra' size={'s'} onClick={props.handleCloseModal} >{'Ok'}</Button>
        </dialog>
    );
}

export default DialogWindow;