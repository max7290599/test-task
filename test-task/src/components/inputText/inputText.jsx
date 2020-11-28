import React from 'react';
import Input from 'arui-feather/input';
import Label from 'arui-feather/label';
import FormField from 'arui-feather/form-field';

const InputText = (props) => {

	const handleChange = (value) => {
		props.addForm({[props.field.name]:value})
    };

    return (
        <FormField>
        	<Label>
				{props.field.title}
			</Label>
			<Input
				type={props.field.type}
				name={props.field.name}
				onChange={handleChange} 
				required='true'
			/>
        </FormField>
    );
}

export default InputText;