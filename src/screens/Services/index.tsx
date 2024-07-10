import { ServicesComponent } from '@/components/ServicesComponent';
import { Container } from '@/components/StyledComponents/Container';
import { StyledMainContainer } from '@/components/StyledComponents/StyledMainContainer';
import { NavProps } from '@/routes/Drawer';
import React from 'react';

export const Service = (props: NavProps) => {
  return (
    <Container>
      <StyledMainContainer style={{ flex: 1 }}>
        <ServicesComponent {...props} />
      </StyledMainContainer>
    </Container>
  );
};
