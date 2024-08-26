import React, { memo } from 'react';
import {Text, View} from 'react-native';
import { LoanCardTypes } from '../../constants/Types';
import { currencyFormatter, getFontFamily } from '../../helpers';
import { colors, radiusMid, spacing } from '../../constants/theme';
import { Button } from './Button';

export const LoanCard: React.FC<LoanCardTypes> = memo((props) => {
  const { loanType, amount, interest } = props;

  return (
    <View 
        style={{backgroundColor:colors.white,gap:spacing/2,borderRadius:radiusMid,padding:spacing,borderWidth:1,borderColor:colors.grey}}
        >
        <View><Text style={{fontFamily:getFontFamily('Bold'), fontSize:18}}>{loanType}</Text></View>
        <View><Text style={{fontFamily:getFontFamily('Light'), fontSize:14}}>Maximum Amount:</Text></View>
        <View><Text style={{fontFamily:getFontFamily('Bold'), fontSize:20,color:colors.primary}}>{currencyFormatter(amount)}</Text></View>
        <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center',flex:1}}><Text style={{fontFamily:getFontFamily('Light'), fontSize:16}}>Interest: {interest}%</Text></View>
            <View style={{flex:1}}>
            <Button  
                textInfo={{text:'Learn More'}} 
                variant='outline'
                rightIcon={{type:'Ionicons', name: 'arrow-forward',size:12}}
                handleBtnClick={() => {}}
            />
            </View>
        </View>
    </View>
  );
});