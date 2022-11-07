import styled from '@emotion/styled';

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
  color: goldenrod;
`;

export const MovieItem = styled.li`
  display: flex;
  margin-top: 10px;
  padding: 2px;
  font-size: 23px;
  font-weight: 400;
  font-family: 'Segoe UI';

  :hover,
  :focus {
    color: #8f6f06;
  }

  ::before {
    content: '🎬';
    display: flex;
    align-items: center;
    margin-right: 5px;
  }
`;
