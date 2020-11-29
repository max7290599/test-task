import React from 'react';
import Label from 'arui-feather/label';
import FormField from 'arui-feather/form-field';
import RadioGroup from 'arui-feather/radio-group';
import Radio from 'arui-feather/radio';

const FieldList = ({ field, onChange }) => (
    <FormField>
        <Label >
            {field.title}
        </Label>
        <RadioGroup type='line' onChange={(value) => onChange({ [field.name]: value })} >
            {Object.keys(field.values).map(key => (
                <Radio
                    value={key}
                    key={key}
                    text={field.values[key]}
                />
            ))}
        </RadioGroup>
    </FormField>
)

export default FieldList;