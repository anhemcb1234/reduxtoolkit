import homeReducer from '../components/Home/homeReducer'
import productsReducer from '../components/ProductDetail/productReducer'

const rootReducer = (state = {}, action) => {
    return {
        homeReducer: homeReducer(state.homeReducer, action),
        productsReducer: productsReducer(state.productsReducer, action)
    }
}

export default rootReducer