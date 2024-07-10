import { ServiceItemType } from '@/types';
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Image } from 'react-native';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';
import { SimpleFlexColumn, SimpleFlexRow } from '../StyledComponents/SimpleFlex';
import { ServiceInfo } from './ServiceInfo';

interface Props {
  service: ServiceItemType;
}

export const SquareServiceItem = ({ service }: Props) => {
  return (
    <SimpleFlexColumn style={{ gap: 10, marginBottom: 12 }}>
      <SimpleFlexColumn style={{ justifyContent: 'space-between' }}>
        <SimpleFlexColumn style={{ gap: 16, alignItems: 'center' }}>
          <Image
            source={{ uri: service.urlImage }}
            style={{ width: 105, height: 116, borderRadius: 8 }}
          />
          <SimpleFlexColumn style={{ gap: 7, alignSelf: 'flex-start' }}>
            <ServiceInfo service={service} />
          </SimpleFlexColumn>
        </SimpleFlexColumn>
      </SimpleFlexColumn>
    </SimpleFlexColumn>
  );
};

export const HorizontalServiceItem = ({ service }: Props) => {
  const theme = useTheme();
  return (
    <SimpleFlexColumn style={{ gap: 10 }}>
      <SimpleFlexRow align="flex-start" style={{ justifyContent: 'space-between' }}>
        <SimpleFlexRow style={{ gap: 16, alignItems: 'center' }}>
          <Image
            source={{ uri: service.urlImage }}
            style={{ width: 105, height: 116, borderRadius: 8 }}
          />
          <SimpleFlexColumn style={{ gap: 7 }}>
            <ServiceInfo service={service} />
          </SimpleFlexColumn>
        </SimpleFlexRow>

        <Entypo name="dots-three-horizontal" size={20} color={theme.colors.background.fixed.gray} />
      </SimpleFlexRow>
      <Divider />
    </SimpleFlexColumn>
  );
};

const Divider = styled.View`
  flex: 1;
  height: 1px;
  background: ${({ theme }) => theme.colors.background.eleventh};
  border-radius: 2px;
  margin-bottom: 10px;
`;
