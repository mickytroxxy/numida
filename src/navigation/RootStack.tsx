import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { colors } from '../constants/theme';
import { getFontFamily } from '../helpers';
import Apply from '../screens/Apply';


const RootStack = createStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Home"
                screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: colors.primary,
                    borderBottomWidth: 0,
                },
                headerBackTitleVisible:false,
                headerTintColor: colors.white,
                headerTitleStyle: { fontFamily: getFontFamily('Bold') },
                headerShown: true
                }}
            >
                <RootStack.Screen
                    name="Home"
                    options={{headerTitle:'NUMIDA INVESTMENTS'}}
                    component={Home}
                />
                <RootStack.Screen
                    name="Apply"
                    options={{headerTitle:'APPLY FOR A LOAN'}}
                    component={Apply}
                />
            </RootStack.Navigator>
        </NavigationContainer>
        
    );
};
export default React.memo(Navigation);