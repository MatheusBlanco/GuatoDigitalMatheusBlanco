import { allOffers } from '@/constants/data';
import { globalStyleSheet } from '@/styles/globalStyleSheet';
import { FlatList, View } from 'react-native';
import { OfferItems } from './OfferItems';

export const Offers = () => {
  return (
    <>
      <FlatList
        horizontal={true}
        data={allOffers}
        contentContainerStyle={{
          ...globalStyleSheet.spaceBetween,
          ...globalStyleSheet.gap16,
        }}
        renderItem={({ item }) => (
          <View>
            <OfferItems offer={item} />
          </View>
        )}
      />
    </>
  );
};
