import Label from 'components/atoms/Label/Label';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  @media (max-width: 750px) {
    width: 80vw;
  }
  span {
    font-size: 20px;
  }
`;

const Input = styled.input.attrs({ type: 'range' })`
  width: 100%;
`;

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
