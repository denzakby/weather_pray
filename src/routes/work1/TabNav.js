import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import app1 from '../../screens/work1/app1';
import app2 from '../../screens/work2/app2';
import app3 from '../../screens/work3/app3';
const Tab = createBottomTabNavigator();

export default TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={app1} />
      <Tab.Screen name="Settings" component={app2} />
      <Tab.Screen name="ayarlar" component={app3} />
    </Tab.Navigator>
  );
};
