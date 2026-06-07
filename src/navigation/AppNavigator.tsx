import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import SaveDocument from '../screens/Save/SaveDocument';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={BottomTabs} />

      <Stack.Screen name="Save" component={SaveDocument} />
    </Stack.Navigator>
  );
}
