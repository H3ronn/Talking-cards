import React from 'react';
import Label from 'components/atoms/Label/Label';
import { Wrapper, Input, ControlButton } from './RangeInput.styles';

const RangeInput = ({ value, label, id, name, unit = '', onChange, min = 0, max = 100, handleControls }) => {
  // const handleControls2 = () => {
  //   handleControls(name, )
  // }
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input type="range" id={id} name={name} min={min} max={max} value={value} onChange={onChange} />
      <div>
        <ControlButton onClick={() => handleControls('DECREMENT', name)}>-</ControlButton>
        <ControlButton onClick={() => handleControls('INCREMENT', name)}>+</ControlButton>
      </div>
      <span>
        {value}
        {unit}
      </span>
    </Wrapper>
  );
};

export default RangeInput;
