import ProgressiveImg from 'components/molecules/ProgressiveImg/ProgressiveImg';
import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

const sildeIn = keyframes`
from {
  opacity: 0;
  transform: translateX(10%);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`;

export const SliderText = styled.p`
  animation: ${sildeIn} 0.4s ease-in-out forwards;
  margin: 5px 0 10px;
`;

const flash = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const SliderImg = styled(ProgressiveImg)`
  width: 500px;
  animation: ${flash} 0.6s ease-in-out;
`;

export const SliderButton = styled.button`
  border: none;
  background: none;
  padding: 8px 0;
  cursor: pointer;
`;

export const Line = styled.div`
  border: none;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  margin: 3px;
  width: 20px;
  height: 4px;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;
