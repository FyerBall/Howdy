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
  background-color: #eff2f4;
`;
export default MainPanel;
