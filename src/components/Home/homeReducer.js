const initState = {
        priority: [],
}
const homeReducer = (state = initState, action) => {
    switch(action.type) {
        case 'home/product':
            return {
                    ...state,
                    priority: [...action.payload]
                }
    default: 
            return state
    }
}

export default homeReducer