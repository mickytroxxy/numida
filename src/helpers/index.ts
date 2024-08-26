import { Platform } from "react-native";
import { FormDataType } from "../constants/Types";

export const formValidator = (field: string,formData:FormDataType) => {
    let message = '';
    switch (field) {
      case 'fname':
        if (!formData.fname) message = 'Full Name is required.';
        break;
      case 'email':
        if (!formData.email) {
          message = 'Email is required.';
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(formData.email)) {
            message = 'Invalid email format.';
          }
        }
        break;
      case 'amount':
        if (!formData.amount && formData.amount !== 0) {
          message = 'Amount is required.';
        } else if (isNaN(formData.amount)) {
          message = 'Amount must be a number.';
        } else if (formData.amount <= 0) {
          message = 'Amount must be a positive number.';
        }
        break;
      case 'purpose':
        if (!formData.purpose) message = 'Purpose is required.';
        break;
      default:
        break;
    }
    return message;
};
export const getFontFamily = (type:'Bold' | 'Light') => Platform.OS === 'ios' ? `Montserrat Alternates ${type}` : `Font${type}`;
export const currencyFormatter = (amount:any) => `UGX ${parseFloat(amount).toFixed(2)}`