import 'react-native-gesture-handler';
import React, { memo } from "react";
import { StyleSheet, ScrollView, Text, View, Modal, KeyboardAvoidingView , TouchableOpacity} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Icon from './Icon';
import SuccessStatus from '../modals/SuccessStatus';
import { setModalState } from '../../redux/slices/modalState';
import { getFontFamily } from '../../helpers';


const COMPONENT_MAP: { [key: string]: any } = {
    'SUCCESS_STATUS': SuccessStatus,
};
const ModalController = memo(() =>{
    const modalState = useSelector((state: RootState) => state.modalState);
    const dispach = useDispatch();
    const {isVisible, data, headerText} = modalState;

    const SelectedComponent = COMPONENT_MAP[headerText?.split(" ").join("_")];

    return(
        <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={() => dispach(setModalState({isVisible:false}))}>
            <View style={{flex:1,backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                <View style={styles.centeredView}>
                    <View style={styles.ProfileFooterHeader}>
                        <View style={{alignContent:'center',alignItems:'center',marginTop:-10}}>
                            <Icon type='FontAwesome' name="ellipsis-h" color="#5586cc" size={36} />
                        </View>
                        <TouchableOpacity onPress={() =>  dispach(setModalState({isVisible:false})) } style={styles.statsContainer}>
                            <Icon type='Feather' name="arrow-left-circle" color="#757575" size={24}/>
                            <Text style={{textTransform:'uppercase',fontSize:12,fontFamily:getFontFamily('Bold'),color:'#5586cc',marginLeft:10,marginTop:6}}>{headerText}</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:5}}>
                        <KeyboardAvoidingView behavior="padding" enabled>
                            {SelectedComponent && <SelectedComponent data={data}/>}
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
})
export default memo(ModalController);

const styles = StyleSheet.create({
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: -5,
        justifyContent:'center',
        padding:5,
    },
    ProfileFooterHeader:{
        borderTopLeftRadius: 30, borderTopRightRadius: 30,
        borderBottomWidth:1,
        borderColor:'#D2D6D8',
        height:70
    },
    centeredView:{
        minHeight:'60%',
        maxHeight:'90%',
        marginTop: 'auto',
        backgroundColor:'#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginLeft:2,marginRight:2
    },
});