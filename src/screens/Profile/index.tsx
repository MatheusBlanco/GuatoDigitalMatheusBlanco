import { ProfileForm } from '@/components/ProfileForm';
import { Avatar } from '@/components/StyledComponents/Avatar';
import { Container } from '@/components/StyledComponents/Container';
import { SimpleFlexRow } from '@/components/StyledComponents/SimpleFlex';
import { StyledButton } from '@/components/StyledComponents/StyledButton';
import { StyledMainContainer } from '@/components/StyledComponents/StyledMainContainer';
import { StyledText } from '@/components/StyledComponents/StyledText';
import { Title } from '@/components/StyledComponents/Title';
import { RootStackParamList } from '@/types';
import { Octicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

export function Profile({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}) {
  const theme = useTheme();
  return (
    <Container>
      <SimpleFlexRow style={{ justifyContent: 'space-between' }}>
        <Title fontSize={24} fontWeight={700}>
          Profile
        </Title>
        <StyledButton
          type={'pill'}
          callback={() => {
            alert('Function not implemented.');
          }}
        >
          <SimpleFlexRow style={{ gap: 4 }}>
            <StyledText fontWeight={500} fontSize={12} color="sixth">
              Edit profile
            </StyledText>
            <Octicons name="pencil" size={10} color={theme.colors.text.themeConditional.sixth} />
          </SimpleFlexRow>
        </StyledButton>
      </SimpleFlexRow>
      <StyledMainContainer>
        <Avatar size={56} />
      </StyledMainContainer>
      <StyledMainContainer>
        <ProfileForm />
      </StyledMainContainer>
    </Container>
  );
}
