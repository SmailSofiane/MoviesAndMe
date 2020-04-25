
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'
import { FlatList } from 'react-native'
import FilmItem from './FilmItem'

class Favorites extends React.Component{
    
    constructor(props)
    {
        super(props)
        this.page=0
        this.totalPages=0
       
    }
    _displayDetailForFilm = (idFilm) =>   {
        this.props.navigation.navigate("FilmDetail",{idFilm:idFilm})
        //this.props.navigation.navigate("FilmDetail")
    }
    _displayFavoriteImage(filmId){
  
  
        const filmIndex= 1
        return filmIndex
      
        }
    render(){
        return(
           <FlatList style={styles.main_container} data={this.props.favoritesFilm}
           keyExtractor={(item)=>item.id.toString()}
           renderItem={({item})=><FilmItem film={item}  displayDetailForFilm={this._displayDetailForFilm}
           deplayfavoritImage={this._displayFavoriteImage(item.id)}
           />}
           />
        )
    }


}
const styles=StyleSheet.create(
    {
        main_container:{
            flex: 1,
            marginTop: 35,
        }
    }
)

const mapStateToProps=(state)=>{
    return {
      favoritesFilm: state.favoritesFilm
    }
  }

export default connect(mapStateToProps) (Favorites)
 