import React, { useEffect } from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import { colors, radiusBig, radiusMid, spacing } from '../constants/theme';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '../components/ui/Button';
import {currencyFormatter, getFontFamily } from '../helpers';
import { useLoan } from '../hooks/useLoan';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { LoanCard } from '../components/ui/LoanCard';

function Home(): React.JSX.Element {
  const {getLoanProducts,loanProducts} = useLoan();
  const {navigate} = useNavigation<any>();
  
  useEffect(() => {
    getLoanProducts();
  },[])

  return (
    <View style={{flex:1}}>
      <LinearGradient 
          colors={[colors.secondary, colors.faintGray, colors.secondary,colors.white]}
          style={{flex:1}}
        >
          <ScrollView style={{padding:spacing}} showsVerticalScrollIndicator={false}>
            <View style={{gap:spacing}}>
              <View><Text style={{fontFamily:getFontFamily('Bold'), fontSize:24}}>Loan Application Dashboard</Text></View>
              <View><Text style={{fontFamily:getFontFamily('Light'), fontSize:14}}>Quick and convenient unsecured loans.</Text></View>

              <View style={{alignItems:'center'}}>
                <Image source={require('../assets/images/banner.png')} style={{width:'96%', aspectRatio:1}} />
              </View>

              <View style={{gap:spacing}}>
                {loanProducts?.map(product => 
                  <View key={product.id}>
                    <LoanCard loanType={product.name} amount={product.maximumAmount} interest={product.interestRate} />
                  </View>
                )}
              </View>

              <View style={{marginTop:spacing,paddingBottom:60}}>
                <Button  
                  textInfo={{text:'APPLY FOR A LOAN'}} 
                  variant='filled'
                  leftIcon={{type:'FontAwesome', name: 'money',size:24}}
                  handleBtnClick={() => navigate('Apply')}
                />
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
    </View>
  );
}

export default Home;
