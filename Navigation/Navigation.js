import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Search from '../Components/Search'

const Stack = createStackNavigator();

function MyStack() {
  return (
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Search} />


    </Stack.Navigator>
      </NavigationContainer>
  );
}

export default MyStack  





}
