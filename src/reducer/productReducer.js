const initState = {
    cate: {
        load: false,
        data: [],
        mess: null
    },

}
const ProductReducer = (state = initState, action) => {
    switch(action.type) {
        case 'GETCATE': 
        return {
            ...state,
            data: action.payload,
            load: true
        }

        default: 
            return {
                ...state
            }
    }
}
export default ProductReducer