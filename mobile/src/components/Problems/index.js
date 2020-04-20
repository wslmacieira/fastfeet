import React from 'react';
import { parseISO, format } from 'date-fns';

import { Container, ProblemDescription, ProblemDate } from './styles';

export default function Problems({ data }) {
  const {description, created_at} = data;

  console.tron.log(data)

  return (
    <Container>
      <ProblemDescription>{description}</ProblemDescription>
  <ProblemDate>{format(parseISO(created_at), 'dd/MM/yyyy')}</ProblemDate>
    </Container>
  );
}
