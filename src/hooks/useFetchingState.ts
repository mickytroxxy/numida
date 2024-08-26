import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setIsFetching } from '../redux/slices/fetchingState';
const useFetchingState = () => {
    const { isFetching } = useSelector((state: RootState) => state.fetchingState);
    const dispatch = useDispatch();

    const updateFetchingState = (state:boolean,text:string) => {
        dispatch(setIsFetching({state,text}));
        if(state){
            setTimeout(() => {
                dispatch(setIsFetching({state:false,text:''}));
            }, 1000 * 60);
        }
    }
    
    return {updateFetchingState,isFetching};
};

export default useFetchingState;
