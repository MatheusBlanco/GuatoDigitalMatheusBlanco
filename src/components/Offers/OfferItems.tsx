import { globalStyleSheet } from '@/styles/globalStyleSheet';
import { OfferType } from '@/types';
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import styled, { useTheme } from 'styled-components/native';
import { SimpleFlexColumn, SimpleFlexRow } from '../StyledComponents/SimpleFlex';
import { StyledButton } from '../StyledComponents/StyledButton';
import { StyledText } from '../StyledComponents/StyledText';

interface Props {
  offer: OfferType;
}

export const OfferItems = ({ offer }: Props) => {
  const theme = useTheme();
  return (
    <StyledOffer bgColor={offer.bgColor}>
      <SimpleFlexColumn>
        <SimpleFlexRow style={globalStyleSheet.gap5}>
          <StyledText fontWeight={600} fontSize={13} fixedColor color="darkGray">
            {offer.title}
          </StyledText>
          <MaterialIcons name="info" size={13} color={theme.colors.text.fixed.gray} />
        </SimpleFlexRow>
        <StyledText fontWeight={600} fontSize={48} fixedColor color="dark">
          Get {offer.offerPercentage}%
        </StyledText>
        <StyledButton
          type="pill"
          bgColor={theme.colors.background.fixed.white}
          callback={function (): void {
            throw new Error('Function not implemented.');
          }}
        >
          <SimpleFlexRow style={globalStyleSheet.gap4}>
            <StyledText fixedColor color="darkerGreen">
              Grab offer
            </StyledText>
            <FontAwesome6
              name="angle-right"
              size={12}
              color={theme.colors.text.fixed.darkerGreen}
            />
          </SimpleFlexRow>
        </StyledButton>
      </SimpleFlexColumn>
    </StyledOffer>
  );
};

const StyledOffer = styled.View<{ bgColor: string }>`
  background: ${({ bgColor }) => bgColor};
  padding: 19px 12px;
  border-radius: 14px;
  min-width: 298px;
`;
