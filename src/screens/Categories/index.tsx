import { CategoriesComponent } from '@/components/CategoriesComponent';
import { Container } from '@/components/StyledComponents/Container';
import { StyledMainContainer } from '@/components/StyledComponents/StyledMainContainer';
import { Title } from '@/components/StyledComponents/Title';
import { NavProps } from '@/routes/Drawer';
import { globalStyleSheet } from '@/styles/globalStyleSheet';

export const Categories = (props: NavProps) => {
  const { navigation } = props;
  return (
    <Container>
      <StyledMainContainer style={globalStyleSheet.flex}>
        <Title fontWeight={600} fontSize={18}>
          All categories
        </Title>
        <CategoriesComponent navigation={navigation} />
      </StyledMainContainer>
    </Container>
  );
};
