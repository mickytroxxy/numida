import React, { memo } from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import Icon from './Icon';
import { ButtonProps, IconButtonProps } from '../../constants/Types';
import { getFontFamily } from '../../helpers';
import { colors } from '../../constants/theme';

export const Button: React.FC<ButtonProps> = memo((props) => {
  const { btnInfo, textInfo, rightIcon, leftIcon, variant, handleBtnClick, disabled } = props;

  return (
    <TouchableOpacity 
      disabled={disabled}  
      onPress={handleBtnClick} 
      style={[
        {borderRadius: 10, padding: 15, borderColor: colors.primary, borderWidth: 0.7, flexDirection: 'row', width: '100%', backgroundColor: variant === 'filled' ? colors.primary : colors.white }, 
        btnInfo?.styles, disabled && {backgroundColor:colors.grey}
      ]}
    >
      {leftIcon && <Icon type={leftIcon.type as any} name={leftIcon.name} size={leftIcon.size} color={leftIcon?.color ? leftIcon.color : (variant === 'filled' ? colors.white : colors.primary)} />}
      <View style={{ marginHorizontal: 5, justifyContent: 'center', flex:1 }}>
        <Text 
          style={[{
            fontFamily: getFontFamily('Bold'), 
            color: variant === 'filled' ? colors.white : colors.primary, 
            fontSize: 12, textAlign: 'center' 
          }, textInfo?.styles && textInfo?.styles]} 
          numberOfLines={1}>
            {textInfo?.text}
        </Text>
      </View>
      {rightIcon && <Icon type={rightIcon.type as any} name={rightIcon.name} size={rightIcon.size} color={rightIcon?.color ? rightIcon.color : (variant === 'filled' ? colors.white : colors.primary)} />}
    </TouchableOpacity>
  );
});