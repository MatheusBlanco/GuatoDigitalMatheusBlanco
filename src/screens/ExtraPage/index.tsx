import { ExtraPageItem } from '@/components/ExtraPageComponents/ExtraPageItem';
import { Container } from '@/components/StyledComponents/Container';
import { SimpleFlexColumn } from '@/components/StyledComponents/SimpleFlex';
import { StyledMainContainer } from '@/components/StyledComponents/StyledMainContainer';
import { Title } from '@/components/StyledComponents/Title';
import { getBrazilNews } from '@/services/news';
import { globalStyleSheet } from '@/styles/globalStyleSheet';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from 'moti/skeleton';
import { FlatList, View } from 'react-native';

export const ExtraPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['brazil-news'],
    queryFn: getBrazilNews,
  });

  return (
    <Container>
      <StyledMainContainer style={globalStyleSheet.flex}>
        <SimpleFlexColumn style={{ ...globalStyleSheet.flex, ...globalStyleSheet.gap12 }}>
          <Title>{"Brazil's headlines: "}</Title>
          <Skeleton show={isLoading}>
            <FlatList
              data={data?.articles}
              renderItem={({ item }) => {
                console.log(item);
                return (
                  <View>
                    <ExtraPageItem newsItem={item}></ExtraPageItem>
                  </View>
                );
              }}
            />
          </Skeleton>
        </SimpleFlexColumn>
      </StyledMainContainer>
    </Container>
  );
};
