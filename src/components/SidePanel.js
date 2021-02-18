import React from 'react';
import { sideBarIcons, tempChannels } from '../util/constant';
import Contacts from './Contacts';
import Icons from './Icons';
import styled from 'styled-components';

function SidePanel() {
  return (
    <SidebarStyled>
      {sideBarIcons.map((item) => {
        // TODO This needs to be a comp.
        const { name, icon, url, id } = item;
        return <Icons key={id} name={name} icon={icon} url={url} />;
      })}
      <hr />

      {tempChannels.map((item) => {
        const { name, id } = item;
        return <Contacts key={id} name={name} id={id} />;
      })}
    </SidebarStyled>
  );
}

const SidebarStyled = styled.aside`
  padding: 10px;
  background: var(--white);
`;
export default SidePanel;
