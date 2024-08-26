import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConfirmDialogType } from '../../constants/Types';

const initialState: ConfirmDialogType = {
    isVisible: false,
    text: 'Would you like to come today for a fist?',
    okayBtn: 'VERIFY',
    cancelBtn: 'CANCEL',
    hasHideModal: false,
    isSuccess: false,
    response: null,
    severity: true,
};

export const confirmDialogSlice = createSlice({
    name: 'confirmDialog',
    initialState,
    reducers: {
        setConfirmDialog: (state, action: PayloadAction<Partial<ConfirmDialogType>>) => {
            Object.assign(state, action.payload);
        },
    },
});

export const { setConfirmDialog } = confirmDialogSlice.actions;

export default confirmDialogSlice.reducer;
