const initState={historicFilms:[]}


 function toggleHistorique(state=initState,action){

    let nextState
    switch(action.type)
    {
        case 'TOGGLE_FILMDETAIL':
            const histoFilmsIndex=state.historicFilms.findIndex
            (
             (item)=>item.id===action.value.id
            )
            if(histoFilmsIndex===-1){
                nextState={
                    ...state,
                    historicFilms:[...state.historicFilms,action.value]
                }
               
            }
           
            return nextState||state
           case 'REMOVE_HISTORIC_FILM ':
            const filmtoRemoveIndex=state.historicFilms.findIndex
            (
             (item)=>item.id===action.value.id
            )
            if(filmtoRemoveIndex!==-1){
                nextState={...state,
                    historicFilms:state.historicFilms.filter((item,index)=>
                    index!==histoFifilmtoRemoveIndexlmsIndex
                    )
                }
            }
            default:
                return state
    }

}

export default toggleHistorique

