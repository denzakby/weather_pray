import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import app1 from '../../screens/work1/app1';
import app2 from '../../screens/work2/app2';
import TabNav from './TabNav';
import DrawerNav from './DrawerNav';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Sayfa3"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Sayfa3" component={DrawerNav} />
      <Stack.Screen name="Sayfa1" component={app1} />
      <Stack.Screen name="Sayfa2" component={app2} />
    </Stack.Navigator>
  );
};
export default MyStack;
