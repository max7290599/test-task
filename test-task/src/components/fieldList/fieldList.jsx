import React from 'react';
import Label from 'arui-feather/label';
import FormField from 'arui-feather/form-field';
import RadioGroup from 'arui-feather/radio-group';
import Radio from 'arui-feather/radio';

const FieldList = (props) => {
    const arrayRadio = [];

    for (const key in props.field.values) {
        arrayRadio.push(
            <Radio
            name={props.field.name}
            value={key}
            key={key}
            text={props.field.values[key]}
            />);
        }

        const handleChange = (value) => {
            props.addForm({[props.field.name]:value})
        }

console.log('arrayRadio:',arrayRadio)
    return (
        <FormField>
        	<Label >
			    {props.field.title}
		    </Label>
                <RadioGroup type='line' onChange={handleChange} >
					{arrayRadio}
				</RadioGroup>
        </FormField>
    )
}

export default FieldList;