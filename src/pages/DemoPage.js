import React from 'react';
import SidePanel from '../components/SidePanel';
import MainPanel from '../components/MainPanel';
import styled from 'styled-components';

function DemoPage() {
  return (
    <DemoPageStyled>
      <SidePanel />
      <MainPanel />
    </DemoPageStyled>
  );
}

const DemoPageStyled = styled.main`
  height: var(--full-height);
  display: flex;
`;

export default DemoPage;
