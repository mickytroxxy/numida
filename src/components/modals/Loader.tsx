import React, { memo } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { getFontFamily } from '../../helpers';

const LoadingIndicator = memo((props:{text?:string}) => {
  return(
    <View style={{backgroundColor:'rgba(0, 0, 0, 0.7)',flex:1,position:'absolute',width:'100%',height:'100%',justifyContent:'center',alignItems:'center',zIndex:10}}>
        <ActivityIndicator color={colors.primary} size={48} />
        <Text style={{fontFamily:getFontFamily('Light'),color:colors.white,marginTop:24}}>{props?.text}</Text>
    </View>
  )
});

export default LoadingIndicator;
