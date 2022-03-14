import React from 'react';
import Label from 'components/atoms/Label/Label';
import { Wrapper, Input, ControlButton } from './RangeInput.styles';

const RangeInput = ({ value, label, id, name, unit = '', onChange, min = 0, max = 100, step = 1, handleControls }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input type="range" id={id} name={name} min={min} max={max} value={value} step={step} onChange={onChange} />
      <span>
        <ControlButton onClick={() => handleControls('DECREMENT', name)}>-</ControlButton>
        {value}
        {unit}
        <ControlButton onClick={() => handleControls('INCREMENT', name)}>+</ControlButton>
      </span>
    </Wrapper>
  );
};

export default RangeInput;
