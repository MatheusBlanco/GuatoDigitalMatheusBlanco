import { allCategories } from '@/constants/data';
import { globalStyleSheet } from '@/styles/globalStyleSheet';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { CategoryItem } from './CategoryItem';

interface Props {
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
}

export const CategoriesComponent = ({ navigation }: Props) => {
  return (
    <FlatList
      numColumns={3}
      data={allCategories}
      columnWrapperStyle={globalStyleSheet.columnWrapperStyle}
      renderItem={({ item }) => (
        <MarginedView>
          <CategoryItem item={item} callback={() => navigation.navigate('Services', item)} />
        </MarginedView>
      )}
    />
  );
};

const MarginedView = styled.View`
  margin-vertical: 24px;
`;
