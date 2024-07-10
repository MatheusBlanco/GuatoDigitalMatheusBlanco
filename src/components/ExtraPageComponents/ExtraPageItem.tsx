import { globalStyleSheet } from '@/styles/globalStyleSheet';
import { NewsType } from '@/types';
import { AntDesign, Entypo } from '@expo/vector-icons';
import React from 'react';
import { Linking } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { SimpleFlexColumn, SimpleFlexRow } from '../StyledComponents/SimpleFlex';
import { StyledText } from '../StyledComponents/StyledText';

interface Props {
  newsItem: NewsType;
}

export const ExtraPageItem = ({ newsItem }: Props) => {
  const theme = useTheme();
  return (
    <SimpleFlexColumn style={globalStyleSheet.gap10}>
      <SimpleFlexRow align="flex-start" style={globalStyleSheet.spaceBetween}>
        <SimpleFlexRow style={{ ...globalStyleSheet.gap16, ...globalStyleSheet.alignCenter }}>
          {/* <Image source={{ uri: newsItem.urlImage }} style={styles.horizontalItem} /> */}
          <SimpleFlexColumn style={globalStyleSheet.gap7}>
            <SimpleFlexRow style={globalStyleSheet.gap5}>
              <AntDesign name="star" size={12} color={theme.colors.background.fixed.yellow} />
              <SimpleFlexRow>
                <StyledText fontWeight={700} fontSize={12}>
                  {newsItem.author}
                </StyledText>
                <StyledText fontWeight={700} fontSize={12} fixedColor>
                  {' '}
                  - Source: {newsItem.source.name}
                </StyledText>
              </SimpleFlexRow>
            </SimpleFlexRow>
            <StyledText fontWeight={600} fontSize={14}>
              {newsItem.title}
            </StyledText>

            <LinkingOpacity onPress={() => Linking.openURL(newsItem.url)}>
              <StyledText fontWeight={700} fontSize={12} fixedColor color="dark">
                Access at full article here
              </StyledText>
            </LinkingOpacity>
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

export const LinkingOpacity = styled.TouchableOpacity`
  padding: 4.5px 6px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.background.fixed.green};
  align-self: flex-start;
`;
