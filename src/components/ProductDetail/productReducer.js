const initState = {
        priority: [],
        price: 0,
        products: [],
        ship: [],
}
const productsReducer = (state = initState, action) => {
    switch(action.type) {
        case 'getAllProducts':
            return {
                    ...state,
                    priority: [...action.payload]
                }
        case 'getBag':
                return {
                        ...state,
                        products: [...action.payload],
                }
    default: 
            return state
    }
}

export default productsReducer