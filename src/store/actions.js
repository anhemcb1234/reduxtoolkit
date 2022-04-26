export const homeProduct = (data) => {
    return {
    type:'home/product',
    payload: data
}}
export const productDetail = (data) => {
    return {
    type:'getAllProducts',
    payload: data
}}
export const getBag = (data) => {
    return {
    type:'getBag',
    payload: data
}}
