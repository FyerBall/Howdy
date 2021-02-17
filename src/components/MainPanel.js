import React from 'react';
import styled from 'styled-components';
import Chat from './Chat';

function MainPanel() {
  return (
    <MainPanelStyled>
      <Chat />
    </MainPanelStyled>
  );
}

const MainPanelStyled = styled.div`
  flex: 0.7;
  background-color: var(--body-color);
  overflow: scroll;
`;
export default MainPanel;
