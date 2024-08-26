import React, { memo } from 'react';
import {
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { colors, spacing } from '../constants/theme';
import TextArea from '../components/ui/TextArea';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '../components/ui/Button';
import { formValidator } from '../helpers';
import { useLoan } from '../hooks/useLoan';
import { KeyboardAvoidingView } from 'react-native';

function Apply(): React.JSX.Element {
  const {formData,errors,setErrors,handleChange,handleLoanApplication} = useLoan();
  return (
    <View style={{flex:1}}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={124} enabled style={{flex:1}}>
        <LinearGradient 
          colors={[colors.secondary, colors.faintGray, colors.secondary,colors.white]}
          style={{flex:1}}
        >
          <ScrollView style={{padding:spacing}} showsVerticalScrollIndicator={false}>
            <View style={{gap:spacing}}>
              <TextArea 
                attr={{
                  field:'fname',
                  label:'Full Name',
                  icon:{name:'user',type:'Feather',min:5,color:colors.primary},
                  keyboardType:'default',
                  placeholder:'Full Name',
                  color:colors.grey,
                  handleChange,
                  value:formData.fname,
                  onBlur: () =>  setErrors((prev) => ({ ...prev, fname: formValidator('fname',formData) })),
                  errorInfo: errors.fname ? { state: true, message: errors.fname } : undefined,
                }} 
              />

              <TextArea 
                attr={{
                  field:'email',
                  label:'Email',
                  icon:{name:'mail',type:'Feather',min:5,color:colors.primary},
                  keyboardType:'default',
                  placeholder:'yourname@example.com',
                  color:colors.grey,
                  handleChange,
                  value:formData.email,
                  onBlur: () =>  setErrors((prev) => ({ ...prev, email: formValidator('email', formData) })),
                  errorInfo: errors.email ? { state: true, message: errors.email } : undefined,
                }} 
              />

              <TextArea 
                attr={{
                  field:'amount',
                  label:'Loan Amount',
                  icon:{name:'money',type:'FontAwesome',min:5,color:colors.primary},
                  keyboardType:'numeric',
                  placeholder:'UGX',
                  color:colors.grey,
                  handleChange,
                  value:formData?.amount == 0 ? '' : formData.amount?.toString(),
                  onBlur: () =>  setErrors((prev) => ({ ...prev, amount: formValidator('amount', formData) })),
                  errorInfo: errors.amount ? { state: true, message: errors.amount } : undefined,
                }} 
              />

              <TextArea 
                attr={{
                  field:'purpose',
                  label:'Loan Purpose',
                  icon:{name:'list',type:'Feather',min:5,color:colors.primary},
                  keyboardType:'default',
                  placeholder:'Why do you need loan?',
                  color:colors.grey,
                  handleChange,
                  value:formData.purpose,
                  onBlur: () =>  setErrors((prev) => ({ ...prev, purpose: formValidator('purpose', formData) })),
                  errorInfo: errors.purpose ? { state: true, message: errors.purpose } : undefined,
                }} 
              />
            </View>
          </ScrollView>
          
          
          <View style={{padding:spacing * 2}}>
            <Button  
                textInfo={{text:'SUBMIT'}} 
                variant='filled'
                leftIcon={{type:'Ionicons', name: 'send',size:24}}
                handleBtnClick={handleLoanApplication}
                disabled = {Object.values(errors).some(error => error !== '') || Object.values(formData).some(value => value === '' || value === 0)}
            />
          </View>

        </LinearGradient>
      </KeyboardAvoidingView>
    </View>
  );
}

export default memo(Apply);
