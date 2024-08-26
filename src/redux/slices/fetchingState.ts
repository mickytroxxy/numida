import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type PropTypes = {state:boolean,text:string}
const initialState: { isFetching:PropTypes} = {
  isFetching:{state:false,text:''}
};

const fetchingSlice = createSlice({
  name: "fetchingSlice",
  initialState,
  reducers: {
    setIsFetching: (state, action: PayloadAction<PropTypes>) => {
      state.isFetching = action.payload;
    }
  },
});

export const { setIsFetching  } = fetchingSlice.actions;
export default fetchingSlice.reducer;
