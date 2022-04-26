import * as TYPE from '../../store/Type'
const initState = {
        priority: [],
        price: 0,
        products: [],
        ship: [],
}
const productsReducer = (state = initState, action) => {
    switch(action.type) {
        case TYPE.GET_ALLPRODUCTS:
            return {
                    ...state,
                    priority: [...action.payload]
                }
        case TYPE.GET_BAG:
                return {
                        ...state,
                        products: [...action.payload],
                }
    default: 
            return state
    }
}

export default productsReducer