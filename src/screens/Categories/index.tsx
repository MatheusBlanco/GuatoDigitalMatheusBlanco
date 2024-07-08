import { CategoriesComponent } from '@/components/CategoriesComponent';
import { AC } from '@/components/Icons/CategorieIcons/AC';
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
        <AC />
        <CategoriesComponent />
      </StyledMainContainer>
    </Container>
  );
};
