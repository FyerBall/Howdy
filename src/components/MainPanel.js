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
`;
export default MainPanel;
