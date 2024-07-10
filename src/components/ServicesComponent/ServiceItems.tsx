import { globalStyleSheet } from '@/styles/globalStyleSheet';
import { ServiceItemType } from '@/types';
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';
import { SimpleFlexColumn, SimpleFlexRow } from '../StyledComponents/SimpleFlex';
import { ServiceInfo } from './ServiceInfo';

interface Props {
  service: ServiceItemType;
}

export const SquareServiceItem = ({ service, onlyTitle }: { onlyTitle?: boolean } & Props) => {
  return (
    <SimpleFlexColumn style={{ ...globalStyleSheet.gap10, marginBottom: 12 }}>
      <SimpleFlexColumn style={globalStyleSheet.spaceBetween}>
        <SimpleFlexColumn style={{ ...globalStyleSheet.gap12, ...globalStyleSheet.alignCenter }}>
          <Image source={{ uri: service.urlImage }} style={styles.verticalItem} />
          <SimpleFlexColumn
            style={{ ...globalStyleSheet.gap7, ...styles[onlyTitle ? 'center' : 'flexStart'] }}
          >
            <ServiceInfo service={service} onlyTitle={onlyTitle} />
          </SimpleFlexColumn>
        </SimpleFlexColumn>
      </SimpleFlexColumn>
    </SimpleFlexColumn>
  );
};

export const HorizontalServiceItem = ({ service }: Props) => {
  const theme = useTheme();
  return (
    <SimpleFlexColumn style={globalStyleSheet.gap10}>
      <SimpleFlexRow align="flex-start" style={globalStyleSheet.spaceBetween}>
        <SimpleFlexRow style={{ ...globalStyleSheet.gap16, ...globalStyleSheet.alignCenter }}>
          <Image source={{ uri: service.urlImage }} style={styles.horizontalItem} />
          <SimpleFlexColumn style={globalStyleSheet.gap7}>
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

const styles = StyleSheet.create({
  flexStart: { alignSelf: 'flex-start' },
  center: { alignSelf: 'center' },
  horizontalItem: { width: 105, height: 116, borderRadius: 8 },
  verticalItem: { width: 139, height: 154, borderRadius: 8 },
});
