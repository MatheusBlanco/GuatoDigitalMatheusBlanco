import { globalStyleSheet } from '@/styles/globalStyleSheet';
import { FontAwesome6, SimpleLineIcons } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { CustomNavHeader } from '../StyledComponents/CustomNavHeader';
import { SimpleFlexColumn, SimpleFlexRow } from '../StyledComponents/SimpleFlex';
import { StyledText } from '../StyledComponents/StyledText';

export interface NavProps {
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
}

export const HomeHeader = ({ navigation }: NavProps) => {
  const theme = useTheme();
  return (
    <CustomNavHeader>
      <SimpleFlexRow style={globalStyleSheet.gap12}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.padding}>
          <SimpleLineIcons name="menu" size={24} color={theme.colors.background.eighth} />
        </TouchableOpacity>
        <SimpleFlexColumn>
          <StyledText fontWeight={500} fontSize={9} color={'eighth'}>
            Current location
          </StyledText>
          <SimpleFlexRow style={globalStyleSheet.gap4}>
            <StyledText fontSize={13} color={'tertiary'}>
              15A, James Street
            </StyledText>
            <FontAwesome6
              name="caret-down"
              size={11}
              color={theme.colors.text.themeConditional.tertiary}
            />
          </SimpleFlexRow>
        </SimpleFlexColumn>
      </SimpleFlexRow>
    </CustomNavHeader>
  );
};

const styles = StyleSheet.create({
  padding: { padding: 12 },
});
