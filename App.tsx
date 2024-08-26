import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View} from 'react-native';
import RootStack from './src/navigation/RootStack';
import { colors } from './src/constants/theme';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import { Provider } from 'react-redux';
import useFetchingState from './src/hooks/useFetchingState';
import LoadingIndicator from './src/components/modals/Loader';
import ConfirmDialog from './src/components/modals/ConfirmDialog';
import ModalController from './src/components/ui/ModalController';

function App(): React.JSX.Element {
  return (
    <View style={{flex:1}}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <EntryPoint />
        </Provider>
      </PersistGate>
      <StatusBar barStyle='light-content' backgroundColor={colors.primary}/>
    </View>
  );
}

const EntryPoint = () => {
  const {isFetching} = useFetchingState();
  return(
    <View style={{flex:1}}>
      <RootStack/>
      {isFetching?.state && <LoadingIndicator text={isFetching?.text} />}
      <ConfirmDialog />
      <ModalController />
    </View>
  )
}
export default App;
