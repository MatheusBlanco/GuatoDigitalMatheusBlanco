import { ServicesComponent } from '@/components/ServicesComponent';
import { Container } from '@/components/StyledComponents/Container';
import { StyledMainContainer } from '@/components/StyledComponents/StyledMainContainer';
import { NavProps } from '@/routes/Drawer';
import { globalStyleSheet } from '@/styles/globalStyleSheet';
import React from 'react';

export const Service = (props: NavProps) => {
  return (
    <Container>
      <StyledMainContainer style={globalStyleSheet.flex}>
        <ServicesComponent {...props} />
      </StyledMainContainer>
    </Container>
  );
};
