import { globalStyleSheet } from '@/styles/globalStyleSheet';
import { Image, ScrollView } from 'react-native';
import { SimpleFlexColumn, SimpleFlexRow } from '../StyledComponents/SimpleFlex';
import { StyledInput } from '../StyledComponents/StyledInput';
import { StyledText } from '../StyledComponents/StyledText';

export const ProfileForm = () => {
  return (
    <ScrollView>
      <SimpleFlexColumn style={globalStyleSheet.gap24}>
        <StyledInput
          leftIcon
          icon={
            <SimpleFlexRow style={globalStyleSheet.gap8}>
              <Image
                height={24}
                width={24}
                borderRadius={50}
                resizeMode={'cover'}
                source={{
                  uri: 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
                }}
              />
              <StyledText fontWeight={600} fontSize={14}>
                +1
              </StyledText>
            </SimpleFlexRow>
          }
          label="Phone Number"
          value={'64 012 3456'}
          type="formType"
          placeholder={'Phone Number'}
          onChange={(v) => console.log(v)}
        />
        <StyledInput
          leftIcon
          label="E-mail"
          value={'ashfaksayem@gmail.com'}
          type="formType"
          placeholder={'E-mail'}
          onChange={(v) => console.log(v)}
        />
        <StyledInput
          leftIcon
          label="Gender"
          value={'Male'}
          type="formType"
          placeholder={'Gender'}
          onChange={(v) => console.log(v)}
        />
        <StyledInput
          leftIcon
          label="Date of birth"
          value={'Not set'}
          type="formType"
          placeholder={'Date of birth'}
          onChange={(v) => console.log(v)}
        />
      </SimpleFlexColumn>
    </ScrollView>
  );
};
