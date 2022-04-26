import React, {useEffect, useState} from "react";
import {useServices} from '../../services/useServices'
import { useDispatch, useSelector } from 'react-redux';
import {productDetail, getBag} from '../../store/actions'
import {productsReducer} from '../../store/seclertor'
export default function ProductDetail() {
    const [list, setList] = useState([]);
    const [id, setId] = useState(0)
    const dispatch = useDispatch();
    const product = useSelector(productsReducer);
    const handlerSubmit = () => {
        console.log(product)
    }
    const loop = (index) => {
        let a = []
        for(let i = 0 ; i < product.priority.length; i++) {
            if(parseInt(product.priority[i].id) === parseInt(index)) {
                a.push(product.priority[i])
            }
        }
        setList(pre => [...pre, a].flat())
    }
    const handlerProduct = (index) => {
        loop(index)
        console.log(list)
        dispatch(getBag(pre => {
            const newJob = [...pre, list]
            localStorage.setItem('job', JSON.stringify(newJob))
            return newJob
        }))
    } 
    const handlerModal = (item) => {
        setId(item)
    }
    async function getProducts() {
        const res = await useServices.getProducts();
        dispatch(productDetail(res.data.data))
    } 
      useEffect(() => {
        getProducts()
      },[])
    return(
        <div>
        <div className="h-screen w-screen hidden fixed bg-amber-700">
            {product.priority.find((item) => {
                return item.id === id
            })}
        </div>
        <div className="container mx-auto mt-5">
            <div className="grid grid-cols-4 gap-4">
                {product.priority.map((item) => (
                    <div onClick={() => handlerModal(item.id)} key={item.id} className="cursor-pointer">
                        <div>
                            <img className="h-20 object-cover w-full" src={`http://192.168.1.20:80/storage/${item.thumb}`} />
                        </div>
                        <h2>{item.name}</h2>
                        <p>Giá: {item.price}</p>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handlerProduct(item.id)} >Add</button>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center mt-10">
                <button onClick={handlerSubmit} type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded    ">
                    Submit
                </button>
            </div>
        </div>
        </div>
    )
}