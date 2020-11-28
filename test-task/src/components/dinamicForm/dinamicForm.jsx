import React from 'react';
import Button from 'arui-feather/button';
import Heading from 'arui-feather/heading';
import Form from 'arui-feather/form';

import InputText from '../inputText/inputText';
import InputNumber from '../inputNumber/inputNumber';
import FieldList from '../fieldList/fieldList';

import './DinamicForm.css';

const DinamicForm = (props) => {

    const handlerClick = () =>{
        props.getOpenModal()
    } 
return (
        <Form>
        <Heading>
            {props.meta.title}
        </Heading>
        {props.meta.fields?
        (props.meta.fields.map(item => {
            switch(item.name) {
                case 'text': 
                return <InputText addForm={props.addForm} field={item} />
                break;
                case 'numeric': 
                return    <InputNumber addForm={props.addForm} field={item} />
                break;
                case 'list':  
                return    <FieldList addForm={props.addForm} field={item} />
                break;
            }
        })): console.log(')))))))))))))')}
        <Button type="submit" onClick={handlerClick}>Отправить</Button>
        </Form>
    );
}

export default DinamicForm;