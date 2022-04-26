import * as TYPE from '../../store/Type'

const initState = {
        priority: [],
}
const homeReducer = (state = initState, action) => {
    switch(action.type) {
        case TYPE.HOME_PRODUCT:
            return {
                    
                    priority: [...action.payload]
                }
    default: 
            return state
    }
}

export default homeReducer