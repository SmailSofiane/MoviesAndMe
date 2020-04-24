import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites '
const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name='Search' component={Search} />
        <Stack.Screen name='FilmDetail' component={FilmDetail} />
      </Stack.Navigator>
     
  )
}
const Tab =createBottomTabNavigator();
function MoviesTabNavigator (){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Search" component={MainStackNavigator}/>
        <Tab.Screen name ="Favorites" component={Favorites}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}



export default MoviesTabNavigator
