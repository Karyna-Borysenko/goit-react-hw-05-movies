import styled from '@emotion/styled';
import { FcSearch } from 'react-icons/fc';

export const MovieSearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 900px;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MovieSearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const MovieSearchIcon = styled(FcSearch)`
  width: 20px;
  height: 20px;
`;

export const MovieSearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const MovieItem = styled.li`
  font-family: 'Segoe UI';
  display: flex;
  margin-top: 10px;
  padding: 2px;
  font-size: 23px;
  font-weight: 400;

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
