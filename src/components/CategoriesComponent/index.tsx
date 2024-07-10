import { allCategories } from '@/constants/data';
import { FlatList, View } from 'react-native';
import { CategoryItem } from './CategoryItem';

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
          <CategoryItem item={item} />
        </View>
      )}
    />
  );
};
