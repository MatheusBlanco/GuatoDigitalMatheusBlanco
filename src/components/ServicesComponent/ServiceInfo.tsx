import { globalStyleSheet } from '@/styles/globalStyleSheet';
import { ServiceItemType } from '@/types';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { useTheme } from 'styled-components/native';
import { PriceTag } from '../StyledComponents/PriceTag';
import { SimpleFlexRow } from '../StyledComponents/SimpleFlex';
import { StyledText } from '../StyledComponents/StyledText';

interface Props {
  service: ServiceItemType;
}

export const ServiceInfo = ({ service, onlyTitle }: { onlyTitle?: boolean } & Props) => {
  const theme = useTheme();

  return (
    <>
      {!onlyTitle && (
        <SimpleFlexRow style={globalStyleSheet.gap5}>
          <AntDesign name="star" size={12} color={theme.colors.background.fixed.yellow} />
          <SimpleFlexRow>
            <StyledText fontWeight={700} fontSize={12}>
              {service.rating}
            </StyledText>
            <StyledText fontWeight={700} fontSize={12} fixedColor>
              {' '}
              {'(' + service.reviewNumber + ')'}
            </StyledText>
          </SimpleFlexRow>
        </SimpleFlexRow>
      )}
      <StyledText fontWeight={600} fontSize={14}>
        {service.title}
      </StyledText>
      {!onlyTitle && (
        <>
          <StyledText fontWeight={500} fontSize={12} fixedColor>
            Starts from
          </StyledText>
          <PriceTag>
            <StyledText fontWeight={700} fontSize={12} fixedColor color="dark">
              ${service.price}
            </StyledText>
          </PriceTag>
        </>
      )}
    </>
  );
};
