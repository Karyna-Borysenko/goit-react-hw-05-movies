import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  display: inline-flex;
  padding: 5px 5px;
  color: #0a5c5f;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  /* background-color: gold; */
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid rgb(47, 158, 153);

  :hover {
    color: goldenrod;
  }
`;

export const Container = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(47, 158, 153);
`;

export const Image = styled.img`
  width: 400px;
  border-radius: 4px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const MovieInfoContainer = styled.div`
  margin-left: 15px;
`;

export const MovieTitle = styled.h2`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
  font-family: 'Andale Mono', monospace;
  color: goldenrod;
`;

export const Сriteria = styled.p`
  font-family: 'Andale Mono', monospace;
  font-size: 24px;
  font-weight: 600;
  color: #0a5c5f;
  margin-bottom: 10px;
`;

export const Details = styled.p`
  font-family: 'Andale Mono', monospace;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
  color: dimgrey;
  line-height: 30px;
`;

export const Average = styled.span`
  display: inline-block;
  color: white;
  background-color: #2f9e99;
  border-radius: 5px;
  padding: 1px 10px;
  font-weight: 500;
  font-size: 18px;
`;

export const StyledLink = styled(NavLink)`
  margin-right: 15px;

  color: white;
  background-color: #2f9e99;
  border-radius: 5px;
  padding: 2px 10px;
  font-weight: 500;
  font-size: 22px;
  text-align: center;

  :hover,
  :focus,
  :active {
    background-color: #075a56;
  }
`;

export const LinkContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 25px;
  text-align: center;
`;
