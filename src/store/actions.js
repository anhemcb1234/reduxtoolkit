import * as TYPE from '../store/Type'
export const homeProduct = (data) => {
    return {
    type:TYPE.HOME_PRODUCT,
    payload: data
}}
export const productDetail = (data) => {
    return {
    type:TYPE.GET_ALLPRODUCTS,
    payload: data
}}
export const getBag = (data) => {
    return {
    type:TYPE.GET_BAG,
    payload: data
}}
