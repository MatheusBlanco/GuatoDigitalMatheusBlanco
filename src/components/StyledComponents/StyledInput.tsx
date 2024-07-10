import AntDesign from '@expo/vector-icons/build/AntDesign';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { SimpleFlexColumn, SimpleFlexRow } from './SimpleFlex';
import { StyledText } from './StyledText';

interface Props {
  type?: 'search' | 'formType';
  callback?: () => void;
  hasGoBack?: boolean;
  goBackCallback?: () => void;
  navigation?: DrawerNavigationProp<ParamListBase, string, undefined>;
  placeholder: string;
  label?: string;
  leftIcon?: boolean;
  icon?: React.ReactNode;
  value: string;
  onChange: (arg: any) => void;
}

export const StyledInput = ({
  type = 'search',
  callback,
  hasGoBack = false,
  goBackCallback,
  navigation,
  placeholder,
  label = '',
  leftIcon = false,
  icon = null,
  value,
  onChange,
}: Props) => {
  const theme = useTheme();
  switch (type) {
    case 'search':
      return (
        <StyledSearchInput>
          <SimpleFlexRow style={{ gap: 18 }}>
            {hasGoBack && (
              <TouchableOpacity
                onPress={() => {
                  if (goBackCallback !== undefined) {
                    goBackCallback;
                  } else {
                    navigation?.goBack();
                  }
                }}
              >
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color={theme.colors.text.themeConditional.fifth}
                />
              </TouchableOpacity>
            )}
            <StyledInputC
              placeholder={placeholder}
              color={theme.colors.text.fixed.secondary}
              placeholderTextColor={theme.colors.text.fixed.secondary}
              onChangeText={onChange}
              value={value}
            />
          </SimpleFlexRow>
          <StyledTouchableOpacity onPress={callback}>
            <AntDesign name="search1" size={14} color="white" />
          </StyledTouchableOpacity>
        </StyledSearchInput>
      );
    case 'formType':
      return (
        <SimpleFlexColumn style={{ gap: 8 }}>
          <StyledText fontWeight={600} fontSize={15}>
            {label}
          </StyledText>
          <StyledInputBox>
            {leftIcon && <>{icon}</>}
            <StyledInputC
              color={theme.colors.text.themeConditional.primary}
              placeholder={placeholder}
              placeholderTextColor={theme.colors.text.fixed.secondary}
              onChangeText={onChange}
              value={value}
            />
          </StyledInputBox>
        </SimpleFlexColumn>
      );
  }
};

const StyledSearchInput = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  height: 48px;
  width: 100%;
  padding: 9px 13px 9px 13px;
  background: ${({ theme }) => theme.colors.background.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.fixed.violet};
`;

const StyledInputC = styled.TextInput<{ color: 'primary' | 'secondary' }>`
  color: ${({ color }) => color};
  font-size: 14px;
  font-weight: 600;
  width: 70%;
`;

const StyledInputBox = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  border-radius: 8px;
  height: 45px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.background.seventh};
`;
