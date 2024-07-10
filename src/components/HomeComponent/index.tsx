import { CategoryItem } from '@/components/CategoriesComponent/CategoryItem';
import { Offers } from '@/components/Offers';
import { SquareServiceItem } from '@/components/ServicesComponent/ServiceItems';
import { Container } from '@/components/StyledComponents/Container';
import { SimpleFlexRow } from '@/components/StyledComponents/SimpleFlex';
import { StyledButton } from '@/components/StyledComponents/StyledButton';
import { StyledInput } from '@/components/StyledComponents/StyledInput';
import { StyledMainContainer } from '@/components/StyledComponents/StyledMainContainer';
import { StyledText } from '@/components/StyledComponents/StyledText';
import { Title } from '@/components/StyledComponents/Title';
import { allCategories, allServices } from '@/constants/data';
import { NavProps } from '@/routes/Drawer';
import { globalStyleSheet } from '@/styles/globalStyleSheet';
import { FontAwesome6 } from '@expo/vector-icons';
import { arrowRight } from 'assets/images';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

export function HomeComponent(props: NavProps) {
  const { navigation } = props;
  const theme = useTheme();
  const homeCategories = [
    ...allCategories.slice(0, 3),
    {
      id: 0,
      title: 'See all',
      bgColor: theme.colors.background.twelfth,
      imageUrl: arrowRight,
      borderColor: theme.colors.background.thirteenth,
    },
  ];

  return (
    <Container>
      <ScrollView contentContainerStyle={globalStyleSheet.gap16}>
        <StyledMainContainer>
          <StyledView>
            <View>
              <StyledText fontWeight={600} fontSize={14} color={'fourth'}>
                Hello Ashfak 👋
              </StyledText>
              <StyledText fontWeight={700} fontSize={32} color={'tertiary'}>
                What are you looking for today
              </StyledText>
            </View>
            <StyledInput
              callback={function (): void {
                throw new Error('Function not implemented.');
              }}
              navigation={navigation}
              placeholder={'Search what you need...'}
              value={''}
              onChange={(v) => console.log(v)}
            />
          </StyledView>
        </StyledMainContainer>
        <StyledMainContainer>
          <Offers />
        </StyledMainContainer>
        <StyledMainContainer>
          <FlatList
            horizontal={true}
            data={homeCategories}
            contentContainerStyle={{
              ...globalStyleSheet.spaceBetween,
              width: '100%',
            }}
            renderItem={({ item }) => (
              <View>
                <CategoryItem
                  item={item}
                  callback={() =>
                    item.id === 0
                      ? navigation.navigate('Categories')
                      : navigation.navigate('Services', item)
                  }
                />
              </View>
            )}
          />
        </StyledMainContainer>
        <StyledMainContainer>
          <SimpleFlexRow style={{ ...globalStyleSheet.spaceBetween, ...style.marginBottom }}>
            <Title fontSize={18} fontWeight={600}>
              AC repair
            </Title>
            <StyledButton
              border={`1px solid ${theme.colors.background.fourteenth}`}
              type="pill"
              bgColor="transparent"
              callback={() => navigation.navigate('Services', allServices[0])}
            >
              <SimpleFlexRow style={globalStyleSheet.gap4}>
                <StyledText>See all</StyledText>
                <FontAwesome6
                  name="angle-right"
                  size={12}
                  color={theme.colors.text.themeConditional.tenth}
                />
              </SimpleFlexRow>
            </StyledButton>
          </SimpleFlexRow>
          <FlatList
            horizontal={true}
            data={allServices}
            contentContainerStyle={globalStyleSheet.gap16}
            renderItem={({ item }) => (
              <View>
                <SquareServiceItem service={item} onlyTitle />
              </View>
            )}
          />
        </StyledMainContainer>
      </ScrollView>
    </Container>
  );
}

const StyledView = styled.View`
  display: flex;
  gap: 16px;
`;

const style = StyleSheet.create({
  marginBottom: { marginBottom: 16 },
});
