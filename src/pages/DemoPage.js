import React from 'react';
import SidePanel from '../components/SidePanel';
import MainPanel from '../components/MainPanel';
import styled from 'styled-components';
import { Dashboard } from '.';
import { useParams } from 'react-router-dom';

function DemoPage() {
  const { chatId } = useParams();
  return (
    <DemoPageStyled>
      <SidePanel />
      {chatId ? <MainPanel /> : <Dashboard />}
    </DemoPageStyled>
  );
}

const DemoPageStyled = styled.main`
  height: var(--full-height);
  display: grid;
  grid-template-columns: 20% 1fr;
`;

export default DemoPage;
