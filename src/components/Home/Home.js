import React, { useEffect } from 'react'
import {useServices} from '../../services/useServices'
import ReactTooltip from 'react-tooltip';
import { useDispatch,  useSelector} from 'react-redux';
import {homeProduct} from '../../store/actions'
import {homeReducer} from '../../store/seclertor'
import {
  Link,
} from "react-router-dom";
export default function Home() {

  const dispatch = useDispatch();
  const data = useSelector(homeReducer);

  async function getCate() {
    const res = await useServices.getCate();
    dispatch(homeProduct(res.data.data))

    console.log(data)
  }
  useEffect(() => {
    getCate()
  }, [])  

  return (
    <div className='container mx-auto mt-5'>
        <div className='grid grid-cols-2 grid-rows-1'>
            {data.priority.map((item, index) => (
              <Link to="1">
              <div key={index} className='cursor-pointer'>
                <div className='bg-red-600 p-10'>
                  <img src={`http://192.168.1.20:80/storage/${item.thumb}`}/>
                  <h2 className='font-semibold text-center'>{item.name}</h2>
                  <p className='text-center'>{item.description}</p>
                </div>
                <div className='grid grid-cols-1 grid-rows-1'>
                  <p className='text-center'>{item.web.name}</p>
                  <p className='text-center'>{item.web.slogan}</p>
              </div>
            </div>
              </Link>
            ))}
        </div>
        <p data-tip='hihi'>tooltip</p>
        <ReactTooltip />
    </div>
  )
}
