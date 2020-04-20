import React, { useState } from 'react';

import { MdMoreHoriz } from 'react-icons/md';

import { Container, MenuList } from './styles';

export default function ActionMenu({ children, problem }) {
  const [visible, setVisible] = useState(false);
  function handleVisible() {
    setVisible(!visible);
  }
  return (
    <Container>
      <button type="button" onClick={handleVisible}>
        <MdMoreHoriz color="#999" size={20} />
      </button>

      <MenuList problem={problem} visible={visible}>{children}</MenuList>
    </Container>
  );
}
