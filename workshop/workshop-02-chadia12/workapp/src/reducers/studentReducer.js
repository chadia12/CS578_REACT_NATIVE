
export  const studentReducer = (state, action) =>{
switch(action.type){
    case 'ADD_STUDENT':
    return [...state, action.payload];
    case 'DELETE_STUDENT':
        return action.payload;
        default:
            return state;
}

}