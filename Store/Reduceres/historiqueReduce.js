const initState={histoFilms:[]}


 function toggleHistorique(state=initState,action){

    let nextState
    switch(action.type)
    {
        case 'TOGGLE_FILMDETAIL':
            const histoFilmsIndex=state.histoFilms.findIndex
            (
             (item)=>item.id===action.value.id
            )
            if(histoFilmsIndex===-1){
                nextState={
                    ...state,
                    histoFilms:[...state.histoFilms,action.value]
                }
               
            }
           
            return nextState||state
           case 'REMOVE_HISTORIC_FILM ':
            const filmtoRemoveIndex=state.histoFilms.findIndex
            (
             (item)=>item.id===action.value.id
            )
            if(filmtoRemoveIndex!==-1){
                nextState={...state,
                    histoFilms:state.histoFilms.filter((item,index)=>
                    index!==histoFifilmtoRemoveIndexlmsIndex
                    )
                }
            }
            default:
                return state
    }

}

export default toggleHistorique

