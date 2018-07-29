import React from 'react';
import { Box, Flex } from 'rebass';
import { Gamepad } from 'styled-icons/fa-solid';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  box-shadow: 2px 0 4px ${({ theme }) => theme.colors.black};
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  margin-left: ${({ theme }) => theme.space[2]}px;
  text-decoration: none;
  text-transform: uppercase;
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  }
`;

const Header = () => (
  <StyledBox bg="grayDark" color="white" p={3}>
    <Flex justifyContent="space-between" alignItems="center">
      <Gamepad size="24" />
      <Box>
        <StyledLink to="/" exact>Partida Actual</StyledLink>
        <StyledLink to="/history">Histórico de Partidas</StyledLink>
      </Box>
    </Flex>
  </StyledBox>
);

export default Header;
