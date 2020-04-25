import * as React from 'react'
import {Image,StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites '
import Ionicons from 'react-native-vector-icons/Ionicons';
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
      <Tab.Navigator
      screenOptions={({route}) =>({
        tabBarIcon:()=>
          {
            let iconName;
            if(route.name==='Search') return (
            <Image source={require('../images/ic_search.png')}
            style={styles.icon}
            />)
            else return(
            <Image source= {require('../images/ic_favorite.png')}
            style={styles.icon}
            />)

          }
        
      })
    }
    tabBarOptions={{
      activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
      showLabel: false, // On masque les titres
      showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    }}
      >
        <Tab.Screen name="Search" component={MainStackNavigator}/>
        <Tab.Screen name ="Favorites" component={Favorites}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles=StyleSheet.create({
  icon:{
    width:30,
    height:30
  }
})


export default MoviesTabNavigator
