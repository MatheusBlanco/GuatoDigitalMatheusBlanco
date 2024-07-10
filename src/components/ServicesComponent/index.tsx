import { allServices } from '@/constants/data';
import { NavProps } from '@/routes/Drawer';
import { globalStyleSheet } from '@/styles/globalStyleSheet';
import { CategoryItemType } from '@/types';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Platform, StyleSheet, useColorScheme } from 'react-native';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';
import { SimpleFlexColumn, SimpleFlexRow } from '../StyledComponents/SimpleFlex';
import { Title } from '../StyledComponents/Title';
import { ColumnsFlatList, GridFlatList } from './FlatLists';

export const ServicesComponent = (props: NavProps) => {
  const { route } = props;
  const category = route?.params as CategoryItemType;
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const handleViewMode = (mode: 'list' | 'grid') => {
    setViewMode(mode);
  };

  return (
    <SimpleFlexColumn style={{ ...globalStyleSheet.gap12, ...globalStyleSheet.flex }}>
      <SimpleFlexRow style={globalStyleSheet.spaceBetween}>
        <Title fontWeight={600} fontSize={18}>
          {category.title}
        </Title>
        <SimpleFlexRow style={globalStyleSheet.gap8}>
          <StyledGridButton
            style={colorScheme === 'light' && viewMode === 'list' && styles.button}
            isFocused={viewMode === 'list'}
            onPress={() => handleViewMode('list')}
          >
            <Feather name="list" size={20} color={theme.colors.text.themeConditional.sixth} />
          </StyledGridButton>
          <StyledGridButton
            style={colorScheme === 'light' && viewMode === 'grid' && styles.button}
            isFocused={viewMode === 'grid'}
            onPress={() => handleViewMode('grid')}
          >
            <MaterialIcons
              name="grid-on"
              size={20}
              color={theme.colors.text.themeConditional.sixth}
            />
          </StyledGridButton>
        </SimpleFlexRow>
      </SimpleFlexRow>
      {viewMode === 'list' ? (
        <ColumnsFlatList allServices={allServices} />
      ) : (
        <GridFlatList allServices={allServices} />
      )}
    </SimpleFlexColumn>
  );
};

const StyledGridButton = styled.TouchableOpacity<{ isFocused: boolean }>`
  padding: 8px;
  border-radius: 8px;
  background: ${({ theme, isFocused }) => theme.colors.background[isFocused ? 'ninth' : 'tenth']};
`;

const styles = StyleSheet.create({
  button: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
