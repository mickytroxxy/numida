import React, { memo, useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Col, Grid } from 'react-native-easy-grid';
import Icon from './Icon';
import { TextAreaProps } from '../../constants/Types';
import { colors, spacing } from '../../constants/theme';
import { getFontFamily } from '../../helpers';


const TextArea: React.FC<TextAreaProps> = memo((props) => {
  const [showPassword, setShowPassword] = useState(true);
  const [value, setValue] = useState('');
  const { attr } = props;

  useEffect(() => {
    setValue(attr?.value || '')
  },[attr]);

  return (
    <View>
      {attr?.label && //label
        <View style={[{paddingVertical:spacing/2}]}><Text style={{fontFamily:getFontFamily('Bold'),color:colors.black}}>{attr?.label}</Text></View>
      
      }

      <View style={{ height:attr.multiline ? 120 : 55, backgroundColor:colors.white,borderRadius:10 }}>
        <Grid style={[styles.searchInputHolder,{height:attr.multiline ? 120 : 55}, attr?.errorInfo?.state && {borderColor:colors.tomato}]}>
          <Col size={0.15} style={{ justifyContent: 'center', alignItems: 'center',marginLeft:5 }}>
            <Icon name={attr.icon.name} type={attr.icon.type as any} color={attr?.errorInfo?.state ? colors.tomato : attr.icon.color} size={24} />
          </Col>
          <Col style={{ justifyContent: 'center', marginLeft:5}}>
            <TextInput
              placeholder={attr.placeholder}
              autoCapitalize="none"
              multiline={attr.multiline} 
              maxLength={1200} 
              numberOfLines={attr.multiline ? 10 : 1} 
              keyboardType={attr.keyboardType || undefined}
              onChangeText={(val) => {
                setValue(val);
                attr.handleChange(attr.field, val);
              }}
              onFocus={() => attr?.onFocus && attr?.onFocus()}
              onBlur={() => attr?.onBlur && attr.onBlur()} 
              value={value}
              secureTextEntry={attr.field === 'password' ? showPassword : false}
              style={{ borderColor: '#fff', fontFamily: getFontFamily('Light'), fontSize: 14, color: '#757575' }}
            />
          </Col>
          <Col size={0.15} style={{ justifyContent: 'center', alignItems: 'center' }}>
            {attr.field === 'password' ? (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {!showPassword ? <Icon name="eye-off" type="Feather" color="grey" size={24} /> : <Icon name="eye" type="Feather" color="grey" size={20} />}
              </TouchableOpacity>
            ) : (
              <View>
                {attr.isSendInput ?
                  <View>
                    {value.length > 1 && (
                      <Animatable.View animation="bounceIn">
                        <TouchableOpacity onPress={() => {
                          attr?.onSendClicked && attr.onSendClicked();
                        }}>
                          <Icon name="send" type="Feather" color="green" size={20} />
                        </TouchableOpacity>
                      </Animatable.View>
                    )}
                  </View> :

                  <View>
                    {value.length > (attr.icon.min || 0) && (
                      <Animatable.View animation="bounceIn">
                        <Icon name="check-circle" type="Feather" color={colors.primary} size={20} />
                      </Animatable.View>
                    )}
                  </View>
                }
              </View>
            )}
          </Col>
        </Grid>
      </View>
      {attr?.errorInfo?.state &&
        <Text style={{fontFamily:getFontFamily('Light'),fontSize:12,color:colors.tomato}}>{attr?.errorInfo?.message}</Text>
      }
    </View>
  );
});

const styles = StyleSheet.create({
  searchInputHolder: {
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#a8a6a5',
    width: '100%',
  },
});

export default TextArea;
