import { KeyboardTypeOptions, StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native"

export type IconType = {
    size?:number,
    color?:string,
    type:string,
    name:string,
    min?:number
}

export interface ButtonProps extends TouchableOpacityProps {
    btnInfo?: {
      styles?: StyleProp<ViewStyle>;
    };
    textInfo?: {
      text?: string;
      color?: string;
      styles?: StyleProp<TextStyle>;
    };
    variant:"outline" | "filled"
    leftIcon?: IconType;
    rightIcon?: IconType;
    handleBtnClick: () => void;
    disabled?:boolean
}
export interface IconButtonProps {
  iconInfo: IconType;
  handleBtnClick: () => void;
}
export interface DateButtonProps {
  handleBtnClick: (value:string) => void;
  placeholder?:string;
  mode: 'date' | 'time'
}

export interface FormDataType{
  fname:string;
  email:string;
  amount:number;
  purpose:string
} 
export interface TextAreaProps {
  attr: {
    icon: IconType;
    placeholder: string;
    keyboardType?: KeyboardTypeOptions;
    field: 'fname' | 'email' | 'amount' | 'purpose' | string;
    value?: string;
    color?:string;
    height?:any;
    multiline?:boolean;
    isSendInput?:boolean;
    label?:string;
    onSendClicked?: () => any;
    onFocus?: () => any;
    onBlur?: () => void; 
    handleChange: (field: string, value: string) => any;
    errorInfo?:{
      state:boolean;
      message:string;
    };
    isLableFloat?:boolean;
  };
}
export type EndpointTypes = 'apply-loan' | 'graphql'
export type FetchDataTypes = {endPoint: EndpointTypes; method: 'POST' | 'GET' | 'UPDATE' | 'DELETE'; data?: any;}; 
export type ConfirmDialogType = {
  isVisible: boolean,
  text: string,
  okayBtn: string,
  cancelBtn: string,
  hasHideModal?:boolean,
  isSuccess?: boolean,
  response?:any,
  severity?:boolean
}
export type ModalStateType = {
  isVisible: boolean;
  headerText: string;
  data: any
}
export interface LoanCardTypes {
  loanType:string;
  amount:number;
  interest:number
}
export type LoanProductTypes = {
  id:number;
  name:string;
  interestRate:number;
  maximumAmount:number;
}