var defaultState = 0;

function reducer (state = defaultState, {type, payload}){
    switch(type){

        case 'showUs':{
            if(!payload){
                return state;
            }

            if( defaultState === 0 ){
                defaultState = 1;
            } else if( defaultState === 1){
                defaultState = 0;
            }
            break;
        }

        default:
        return state;
    }
}

export default reducer;