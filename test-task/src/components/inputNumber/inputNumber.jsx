import React from 'react';
import Input from 'arui-feather/input';
import Label from 'arui-feather/label';
import FormField from 'arui-feather/form-field';


const InputNumber = ({onChange, field}) => {

    const handleChange = (value) => {
        onChange({ [field.name]: value.replace(',', '.') })
    }

    return (
        <FormField>
            <Label >
                {field.title}
            </Label>
            <Input
                type={field.type}
                onChange={handleChange}
            />
        </FormField>
    );
}

export default InputNumber;