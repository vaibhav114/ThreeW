import React, { useEffect, useState } from "react";
import axios from 'axios';
import SingleUser from "../components/SingleUser";


const LeaderBoardPage = () => {

    const [user, setUser] = useState([])

    useEffect(()=>{
        const fetchUser = async()=>{
        try {
            const response = await axios.get('/points/getalluser')
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }

    }

    fetchUser()

    },[])


  return (
    <div>

      <div className="flex justify-center pt-10 text-4xl tracking-wider font-bold">
        <h1>Leader Board </h1>
      </div>
      <h5 className="flex justify-center mt-2">If two users have same points they will be given same ranks</h5>

      <div className="flex justify-center mt-10">

      <div >
         {
           user.map((u,index)=>{
             return <SingleUser props={u} key={index}/>
            })
          }
      </div>
          </div>

    </div>
  );
};

export default LeaderBoardPage;
