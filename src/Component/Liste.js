import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { CardCAR } from './Card';


export const Liste = () => {
    const [first, setfirst] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
    //  fetch('https://www.breakingbadapi.com/api/characters').then(
    //     (res)=>res.json()
    //  ).then(data=>{setfirst(data)
    //     setloading(false)})
    axios.get('https://www.breakingbadapi.com/api/characters').then(data=>{setfirst(data.data)
      setloading(false)})
      const getdata = async() => {
        try {
           const res=await axios.get('https://www.breakingbadapi.com/api/characters')
            setfirst(res.data)
            setloading(false)
        } catch (error) {
            console.log(error)
        }
       }
       getdata()
    }, [])
    if (loading) {
        return ".........loading"
    }
  return (
    <div style={{display:'flex',flexWrap:'wrap', justifyContent:'space-around'}}>
       {
        first.map(
            (el)=><CardCAR el={el} key={el.char_id}/>
        )
       }
    </div>
  )
}
