import { RootStackParamList } from '@/types';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

interface Props {
  callback: () => void;
  hasGoBack?: boolean;
  goBackCallback?: () => void;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

export const StyledInput = ({ callback, hasGoBack = false, goBackCallback, navigation }: Props) => {
  const [text, onChangeText] = useState('');
  const theme = useTheme();
  return (
    <StyledInputBox>
      <StyledFlex>
        {hasGoBack && (
          <TouchableOpacity onPress={() => goBackCallback || navigation.goBack()}>
            <AntDesign
              name="arrowleft"
              size={24}
              color={theme.colors.text.themeConditional.fifth}
            />
          </TouchableOpacity>
        )}
        <StyledInputC
          placeholder="Search what you need..."
          placeholderTextColor={theme.colors.text.fixed.secondary}
          onChangeText={onChangeText}
          value={text}
        />
      </StyledFlex>
      <StyledTouchableOpacity onPress={callback}>
        <AntDesign name="search1" size={14} color="white" />
      </StyledTouchableOpacity>
    </StyledInputBox>
  );
};

const StyledFlex = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;

const StyledInputBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  height: 48px;
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

const StyledInputC = styled.TextInput`
  color: ${({ theme }) => theme.colors.text.fixed.secondary};
`;
