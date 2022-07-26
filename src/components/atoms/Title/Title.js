import styled from 'styled-components';

const Title = styled.h1`
  margin: 15px;
  white-space: nowrap;
  color: ${({ theme, blue }) => (blue ? theme.colors.blue : theme.colors.darkGrey)};
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export default Title;
