import { View } from 'react-native';
import styled from 'styled-components/native';
import { StyledText } from './StyledText';

export const Avatar = ({ size }: { size: number }) => {
  return (
    <StyledView>
      <StyledAvatar
        size={size}
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/29b6/bd47/fac26b454d7361160f49cc03f9a29963?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AQpUIu3Tipax9L7B6~x~YMIrmLsHttEe~-HcTJ~z7BYLNoxOGM~KIFIEyBNOGopbsIvToC~oo2e2VXaE--HppcUj6iqHb~04WdUh3y~k8NUuja0NH1oowAq0ZG4IAmr3a3hVZtba5gvGppty~Oj~lVShMLs35nlCtZAAgIczOF1gXCHT6dY0QjBLgxnex4~afmKq1CrEQGT-lBIXgpheq8~iP1sPFpl87Xg4RgPFM9NWzdBTpVQm4-haCP8L2RrW2BODNRRnQgtPMxuJQS0S2oAxJujGc8s4kDUzw7Qc2WxvRQbRZakzBlFLH28yanBdIdteCJP51--Jj~oF73Imiw__',
        }}
      />
      <View>
        <StyledText fontSize={15} fontWeight={600} color={'ninth'}>
          Ashfak Sayem
        </StyledText>
        <StyledText fontWeight={500} fontSize={12} color={'eighth'}>
          ashfaksayem@gmail.com
        </StyledText>
      </View>
    </StyledView>
  );
};
export const StyledAvatar = styled.Image<{ size: number }>`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
  border-radius: 50px;
`;

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;
