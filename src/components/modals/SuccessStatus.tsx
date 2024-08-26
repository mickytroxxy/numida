import React, { memo } from 'react'
import { View, Text } from 'react-native'
import Icon from '../ui/Icon';
import { colors } from '../../constants/theme';
import { getFontFamily } from '../../helpers';
type PriceTypeProps = {
    data:{
        status:boolean;
        message:string
    }
}
const SuccessStatus = memo((props:PriceTypeProps) => {
    const {status,message} = props.data;

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:100,padding:20}}>
            {status && <Icon type='MaterialIcons' name="check-circle" size={160} color={colors.green} />}
            {!status && <Icon type='MaterialIcons' name="cancel" size={160} color={colors.tomato} />}
            <Text style={{fontFamily:getFontFamily('Bold'),fontSize:12,color:colors.grey,textAlign:'center'}}>{message}</Text>
        </View>
    )
})

export default memo(SuccessStatus)