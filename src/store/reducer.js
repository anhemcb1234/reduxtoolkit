import homeReducer from '../components/Home/homeReducer'
import productsReducer from '../components/ProductDetail/productReducer'

const rootReducer = (state = {}, action) => {
    return {
        homeReducer: homeReducer(state.filters, action),
        productsReducer: productsReducer(state.filters, action)
    }
}

export default rootReducer