import React from 'react';
import styled from 'styled-components';
import done from '../assets/done.svg';

function DashboardPage() {
  return (
    <Wrapper>
      <h2>Stay on track and up to date</h2>
      <img src={done} alt='done' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  text-align: center;

  img {
    width: 20rem;
    margin: 0 auto;
  }
`;

export default DashboardPage;
