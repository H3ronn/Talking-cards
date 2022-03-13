import Label from 'components/atoms/Label/Label';
import React from 'react';
import { Wrapper, Input } from './RangeInput.styles';

const RangeInput = ({ value, label, id, unit = '', onChange, min = 0, max = 100 }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input type="range" id={id} name={id} min={min} max={max} value={value} onChange={onChange} />
      <span>
        {value}
        {unit}
      </span>
    </Wrapper>
  );
};

export default RangeInput;
