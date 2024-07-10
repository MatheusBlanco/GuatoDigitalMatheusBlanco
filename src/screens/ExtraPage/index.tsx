import { ExtraPageItem } from '@/components/ExtraPageComponents/ExtraPageItem';
import { Container } from '@/components/StyledComponents/Container';
import { SimpleFlexColumn } from '@/components/StyledComponents/SimpleFlex';
import { StyledMainContainer } from '@/components/StyledComponents/StyledMainContainer';
import { Title } from '@/components/StyledComponents/Title';
import { getBrazilNews } from '@/services/news';
import { globalStyleSheet } from '@/styles/globalStyleSheet';
import { useQuery } from '@tanstack/react-query';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import React from 'react';
import { FlatList, StyleSheet, useColorScheme, View } from 'react-native';

const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />;

export const ExtraPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['brazil-news'],
    queryFn: getBrazilNews,
  });
  const colorScheme = useColorScheme();

  return (
    <Container>
      <StyledMainContainer style={globalStyleSheet.flex}>
        <SimpleFlexColumn style={{ ...globalStyleSheet.flex, ...globalStyleSheet.gap12 }}>
          <Title>{"Brazil's headlines: "}</Title>
          {isLoading ? (
            <MotiView
              transition={{
                type: 'timing',
              }}
              animate={{ backgroundColor: 'transparent' }}
            >
              <Skeleton colorMode={colorScheme as 'light' | 'dark'} width={'100%'} />
              <Spacer height={8} />
              <Skeleton colorMode={colorScheme as 'light' | 'dark'} width={'100%'} />
              <Spacer height={8} />
              <Skeleton colorMode={colorScheme as 'light' | 'dark'} width={'50%'} />
            </MotiView>
          ) : (
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
          )}
        </SimpleFlexColumn>
      </StyledMainContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  padded: {
    padding: 16,
  },
});
