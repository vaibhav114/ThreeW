import React from 'react'
import axios from 'axios' 


const SingleUser = ({props}) => {

    const handleClick=async()=>{
        try {
            const response  = await axios.post(`/points/add-points/${props._id}`)  
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='m-10'>
    <div className='flex gap-20  pl-10 pr-10 border-2 border-black  pt-4 pb-4 items-center'>
        <h1 className="flex-1 text-center ">{props.rank}</h1>
        <h1 className="flex-2 text-center ">{props.name}</h1>
        <h1 className="flex-1 text-center ">{props.points}</h1>
        <button className='flex-1 bg-green-300 pl-3 pr-3 pt-2 pb-2 cursor-pointer text-center' onClick={handleClick}>
            CLAIM
        </button>
    </div>
</div>

  )
}

export default SingleUser