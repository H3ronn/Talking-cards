import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 20px;
  color: white;
  background-color: ${({ theme }) => theme.colors.blue};
  width: max-content;
  padding: 16px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  transition: transform 0.2s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
// export const Button = styled.button`
//   margin-left: 20px;
//   color: white;
//   background-color: ${({ theme }) => theme.colors.blue};
//   width: max-content;
//   padding: 8px 12px;
//   cursor: pointer;
//   border: none;
//   font-size: 20px;
//   transition: transform 0.2s ease-in-out;

//   &:hover,
//   &:focus {
//     transform: scale(1.05);
//   }
// `;
