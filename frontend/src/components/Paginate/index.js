import React from 'react';

import { Container } from './styles';

export default function Paginate({
  IconBack,
  IconNext,
  handleBack,
  handleNext,
  prev,
  next,
  page,
}) {
  return (
    <Container>
      <button type="button" disabled={prev} onClick={handleBack}>
        <IconBack size={26} />
      </button>
      <span>{page}</span>
      <button type="button" disabled={next} onClick={handleNext}>
        <IconNext size={26} />
      </button>
    </Container>
  );
}
