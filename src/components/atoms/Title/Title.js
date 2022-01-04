import styled from 'styled-components';

const Title = styled.h1`
  margin: 15px;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export default Title;
