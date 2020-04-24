import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, Text ,ActivityIndicator,ScrollView,Image,TouchableOpacity} from 'react-native'
import {getFilmDetailFromApi,getImageFromApi} from '../API/TMDBApi'

class FilmDetail extends React.Component {
constructor(props)
{
  super(props)
  this.state={
    film:undefined,
    isLoading:true
  }
}
componentDidMount() {
  getFilmDetailFromApi(this.props.route.params.idFilm)
  .then(data=>{
    this.setState({film:data,
    isLoading:false})
  })
 }

  _displayLoading()
  {
    if(this.state.isLoading)
    {
      return(
        <View style={styles.loading_container}>
         <ActivityIndicator size='large' />
       </View>
      )
    }
  }
  _toggleFavorite(){
    const action={type:"TOGGLE_FAVORITE",value:this.state.film}
    this.props.dispatch(action)
  }
  _displayFavoriteImage(){
  
    var sourceImage = require('../images/ic_favorite_border.png')

    const filmIndex= this.props.favoritesFilm.findIndex(item=>
       item.id===this.state.film.id
      )
     
      if(filmIndex!==-1) {  
     sourceImage= require('../images/ic_favorite.png') 
      console.log(require('../images/ic_favorite.png'))
    
    }   
    return(
    <Image
    style={styles.favorite_image}
    source={sourceImage}
  />
    )
    }

  _displayFilm(){
    if(this.state.film!=undefined){
      return(
        <ScrollView style={styles.scrollview_container}>
        <Image   style={styles.image} source={{uri: getImageFromApi(this.state.film.poster_path)}}></Image>
        <Text>{this.state.film.title}</Text>
        <TouchableOpacity style={styles.favorite_container} onPress={()=>this._toggleFavorite()}>
          {this._displayFavoriteImage()}
          </TouchableOpacity>
        <Text>{this.state.film.overview}</Text>
        <Text>Sorti le:{this.state.film.release_date}</Text>
        <Text>Note:{this.state.film.vote_average}/10</Text>
        <Text>Budjet:{this.state.film.budget}</Text>
        </ScrollView>
      )
    }
  }
  render() {
   
    return (
      <View style={styles.main_container}>
      {this._displayLoading()}
      {this._displayFilm()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }, scrollview_container: {
    flex: 1
  },  image: {
      width: 410,
      height: 120,
      margin:1,
      backgroundColor: 'gray'
    },favorite_container:{
      alignItems:'center',
    },favorite_image:{
      width:40,
      height:40
    }
})

const mapStateToProps=(state)=>{
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps) (FilmDetail)
