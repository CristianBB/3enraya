import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

const StyledFlex = styled(Flex)`
  min-height: 100vh;
`;

const Main = ({ children }) => (
  <StyledFlex flexDirection="column">{children}</StyledFlex>
);

export default Main;
