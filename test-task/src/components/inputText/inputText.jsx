import React from 'react';
import Input from 'arui-feather/input';
import Label from 'arui-feather/label';
import FormField from 'arui-feather/form-field';

const InputText = ({ onChange, field }) => (
	<FormField>
		<Label>{field.title}</Label>
		<Input
			type={field.type}
			onChange={(value => onChange({ [field.name]: value }))}
			required='true'
		/>
	</FormField>
);

export default InputText;