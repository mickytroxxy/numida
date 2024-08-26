import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalStateType } from '../../constants/Types';
const initialState:ModalStateType = {
    isVisible: false,
    headerText: 'HEADER TEXT',
    data:{}
}
export const modalState = createSlice({
    name: 'modalState',
    initialState,
    reducers: {
        setModalState: (state, action: PayloadAction<Partial<ModalStateType>>) => {
            return {...state,...action.payload};
        }
    }
})
export const { setModalState } = modalState.actions
export default modalState.reducer