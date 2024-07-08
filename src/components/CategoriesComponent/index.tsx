import { allCategories } from '@/constants/data';
import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';
import { SimpleFlexColumn } from '../StyledComponents/SimpleFlex';
import { StyledText } from '../StyledComponents/StyledText';

export const CategoriesComponent = () => {
  return (
    <FlatList
      numColumns={3}
      data={allCategories}
      columnWrapperStyle={{
        flex: 1,
        justifyContent: 'space-around',
      }}
      renderItem={({ item }) => (
        <View>
          <Item item={item} />
        </View>
      )}
    />
  );
};

type ItemProps = {
  item: {
    title: string;
    bgColor: string;
    imageUrl: any;
  };
};

const Item = ({ item }: ItemProps) => {
  console.log(item.imageUrl);
  return (
    <SimpleFlexColumn style={{ gap: 2, alignItems: 'center' }}>
      <StyledItemContent bgColor={item.bgColor}>{item.imageUrl}</StyledItemContent>
      <StyledText fontWeight={500} fontSize={15}>
        {item.title}
      </StyledText>
    </SimpleFlexColumn>
  );
};

const StyledItemContent = styled.View<{ bgColor: string }>`
  width: 72px;
  height: 72px;
  border-radius: 50px;
  background: ${({ bgColor }) => bgColor};
  margin-vertical: 24px;
`;
