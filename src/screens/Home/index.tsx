import { Container } from '@/components/StyledComponents/Container';
import { StyledInput } from '@/components/StyledComponents/StyledInput';
import { StyledMainContainer } from '@/components/StyledComponents/StyledMainContainer';
import { StyledText } from '@/components/StyledComponents/StyledText';
import { NavProps } from '@/routes/Drawer';
import { View } from 'react-native';
import styled from 'styled-components/native';

export function Home(props: NavProps) {
  const { navigation } = props;
  return (
    <Container>
      <StyledMainContainer>
        <StyledView>
          <View>
            <StyledText fontWeight={600} fontSize={14} color={'fourth'}>
              Hello Ashfak 👋
            </StyledText>
            <StyledText fontWeight={700} fontSize={32} color={'tertiary'}>
              What are you looking for today
            </StyledText>
          </View>
          <StyledInput
            callback={function (): void {
              throw new Error('Function not implemented.');
            }}
            navigation={navigation}
            placeholder={'Search what you need...'}
            value={''}
            onChange={(v) => console.log(v)}
          />
        </StyledView>
      </StyledMainContainer>
    </Container>
  );
}

const StyledView = styled.View`
  display: flex;
  gap: 16px;
`;
