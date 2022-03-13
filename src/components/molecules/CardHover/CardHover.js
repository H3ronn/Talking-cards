import React from 'react';
import { HoverWrapper, HoverButton } from './CardHover.styles';

const CardHover = ({ editFn, deleteFn, ...props }) => {
  return (
    <HoverWrapper {...props}>
      <HoverButton onClick={editFn}>Edit</HoverButton>
      <HoverButton onClick={deleteFn}>Delete</HoverButton>
    </HoverWrapper>
  );
};

export default CardHover;
