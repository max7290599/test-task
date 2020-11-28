import React, { useState } from 'react';
import Input from 'arui-feather/input';
import Label from 'arui-feather/label';
import FormField from 'arui-feather/form-field';


const InputNumber = (props) => {

const [error, setError]= useState(-1)

const handleChange = (value) => {
    setError( value.search(/^[0-9]*\.[0-9]+$/));
    props.addForm({[props.field.name]:value})
}

    return (
        <FormField>
        		<Label >
					{props.field.title}
				</Label>
        <Input
            type='number'
            placeholder='Введите число'
            error={ error ? 'Использовать разделитель точку(1.55)' : null }
			onChange={handleChange}
        />
        </FormField>
    );
}

export default InputNumber;