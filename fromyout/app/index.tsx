import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "@/Screens/HomeScreen";
import DetailsScreen from "@/Screens/DetailsScreen";
import LoginScreenm from '@/Screens/LoginScreenm';
import ForgotScreen from '@/Screens/Forgotpass';
import NewUser from '@/Screens/Newuser';

// Define the type for the stack param list
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Logindo: undefined;
  Forgot:undefined
  NewUser:undefined
};

// Create the Native Stack Navigator with the typed parameter list
const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Logindo" component={LoginScreenm} />
        <Stack.Screen name="Forgot" component={ForgotScreen} />
        <Stack.Screen name="NewUser" component={NewUser} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
