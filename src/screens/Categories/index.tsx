import { CategoriesComponent } from '@/components/CategoriesComponent';
import { Container } from '@/components/StyledComponents/Container';
import { StyledMainContainer } from '@/components/StyledComponents/StyledMainContainer';
import { Title } from '@/components/StyledComponents/Title';

export const Categories = () => {
  return (
    <Container>
      <StyledMainContainer style={{ flex: 1 }}>
        <Title fontWeight={600} fontSize={18}>
          All categories
        </Title>
        <CategoriesComponent />
      </StyledMainContainer>
    </Container>
  );
};
