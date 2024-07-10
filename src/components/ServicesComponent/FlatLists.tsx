import { globalStyleSheet } from '@/styles/globalStyleSheet';
import { ServiceItemType } from '@/types';
import { FlatList, View } from 'react-native';
import { HorizontalServiceItem, SquareServiceItem } from './ServiceItems';

export const ColumnsFlatList = ({ allServices }: { allServices: ServiceItemType[] }) => {
  return (
    <FlatList
      data={allServices}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <HorizontalServiceItem service={item} />
        </View>
      )}
    />
  );
};

export const GridFlatList = ({ allServices }: { allServices: ServiceItemType[] }) => {
  return (
    <FlatList
      numColumns={3}
      data={allServices}
      columnWrapperStyle={globalStyleSheet.columnWrapperStyle}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <SquareServiceItem service={item} />
        </View>
      )}
    />
  );
};
