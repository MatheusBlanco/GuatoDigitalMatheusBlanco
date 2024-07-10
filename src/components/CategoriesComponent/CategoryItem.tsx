import { CategoryItemType } from '@/types';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { SimpleFlexColumn } from '../StyledComponents/SimpleFlex';
import { StyledText } from '../StyledComponents/StyledText';

export type ItemProps = {
  item: CategoryItemType;
  callback: () => void;
};

export const CategoryItem = ({ item, callback }: ItemProps) => {
  return (
    <SimpleFlexColumn style={styles.simpleFlexColumn}>
      <StyledItemContent bgColor={item.bgColor} onPress={callback}>
        <Image source={item.imageUrl} style={styles.image} />
      </StyledItemContent>
      <StyledText fontWeight={500} fontSize={15}>
        {item.title}
      </StyledText>
    </SimpleFlexColumn>
  );
};

const StyledItemContent = styled.TouchableOpacity<{ bgColor: string }>`
  width: 72px;
  height: 72px;
  border-radius: 50px;
  background: ${({ bgColor }) => bgColor};
  margin-vertical: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const styles = StyleSheet.create({
  simpleFlexColumn: { gap: 2, alignItems: 'center' },
  image: { height: 32, width: 32 },
});
