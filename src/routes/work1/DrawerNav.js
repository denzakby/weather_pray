import {createDrawerNavigator} from '@react-navigation/drawer';
import app1 from '../../screens/work1/app1';
import app2 from '../../screens/work2/app2';
import {NavigationContainer} from '@react-navigation/native';
import app3 from '../../screens/work3/app3';
import app4 from '../../screens/work4/app4';

const Drawer = createDrawerNavigator();

export default TabNav2 = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{
          headerStyle: {backgroundColor: '#6C9BD9'},
          headerTitleStyle: {color: '#F2F2F2'},
        }}
        name="Hava Durumu"
        component={app1}
      />
      <Drawer.Screen
        options={{
          headerStyle: {backgroundColor: '#71A8D9'},
          headerTitleStyle: {color: 'white'},
        }}
        name="Ezan Vakitleri"
        component={app2}
      />
    </Drawer.Navigator>
  );
};
