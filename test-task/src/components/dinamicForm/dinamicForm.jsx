import React from 'react';
import Button from 'arui-feather/button';
import Heading from 'arui-feather/heading';
import Form from 'arui-feather/form';

import InputText from '../inputText/inputText';
import InputNumber from '../inputNumber/inputNumber';
import FieldList from '../fieldList/fieldList';

import './DinamicForm.css';

const DinamicForm = ({ meta, onChangeForm, handleSubmitForm }) => {

    return (
        <>
        <Form>
            <Heading>
                {meta.title}
            </Heading>
            {meta.fields &&
                (meta.fields.map(item => {
                    switch (item.name) {
                        case 'text':
                            return <InputText onChange={onChangeForm} field={item} />
                        case 'numeric':
                            return <InputNumber onChange={onChangeForm} field={item} />
                        case 'list':
                            return <FieldList onChange={onChangeForm} field={item} />
                    }
                }))}
            <Button type="submit" onClick={handleSubmitForm}>Отправить</Button>
        </Form>
        <img src={meta.image} />
        </>
    );
}

export default DinamicForm;