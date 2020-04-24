
import React from 'react'
import {connect} from 'react-redux'
import {ActivityIndicator,StyleSheet,View, TextInput, Button ,FlatList,Text} from 'react-native'
//import films from  '../Helpers/filmsData'
import FilmItem from './FilmItem'
import {getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component{

  constructor(props)
  {
    super(props)
    this.page=0
    this.totalPages=0
    this.searchedText=""
    this.state = {
      films: [],
      isLoading: false
    }
  }

_displayDetailForFilm = (idFilm) =>   {
      this.props.navigation.navigate("FilmDetail",{idFilm:idFilm})
      //this.props.navigation.navigate("FilmDetail")
  }

_displayLoading(){
  if(this.state.isLoading){
    return(
      <View style={styles.loading_container}>
<ActivityIndicator size='large'/>
      </View>
    )
  }
}
// Components/Search.js

_searchFilms() {
  this.page = 0
  this.totalPages = 0
  this.setState({
    films: []
  })
  // J'utilise la paramètre length sur mon tableau de films pour vérifier qu'il y a bien 0 film
  console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)

  this._loadFilms()
}
_loadFilms(){
  console.log(this.searchedText)
  if(this.searchedText.length>0){
    this.setState({ isLoading: true })
  getFilmsFromApiWithSearchedText(this.searchedText,this.page+1).then(data=>{
     this.page=data.page
     this.totalPages=data.total_pages
     console.log(this.page+"---"+this.totalPages)
    this.setState({films:[...this.state.films,...data.results], //films: this.state.films.concat(data.results)
     isLoading:false
      })

  })
  .catch((error) => console.error(error))
}
}
_searchedTextInputChanged(text){
  this.searchedText=text

}
_displayFavoriteImage(filmId){
  
  
  const filmIndex= this.props.favoritesFilm.findIndex(item=>
     item.id===filmId
    )
  return filmIndex

  }

  render() {
     return (
       <View style={styles.main_container}>
         <TextInput style={styles.textinput} placeholder='Titre du film'
         onChangeText = {(text)=>this._searchedTextInputChanged(text)}
         />
          <Button title='Rechercher' onPress={() => this._searchFilms()}/>
         <FlatList
         data={this.state.films}
         keyExtractor={(item) => item.id.toString()}

         onEndReachedThreshold={0.5}
         onEndReached={()=>{if(this.page < this.totalPages){this._loadFilms(),console.log("loading more films!")}}}
         renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} deplayfavoritImage={this._displayFavoriteImage(item.id)}/>}
         />
         {this._displayLoading()}
       </View>
     );
   }
}
const styles =StyleSheet.create( {
  main_container:{
    flex:1,
    marginTop:30
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container:{
    position: 'absolute',
   left: 0,
   right: 0,
   top: 100,
   bottom: 0,
   alignItems: 'center',
   justifyContent: 'center'
  }
})
const mapStateToProps=(state)=>{
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps) (Search)


