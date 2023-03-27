import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Animedb() {
  const [ post, setPost ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/anime')
    .then(res => {
        console.log(res)
        setPost(res.data)
    })
    .catch(err => {
        console.log(err);
    })
  })

  return (
    <div className=' mt-16 '>

         <span className=' text-4xl uppercase text-bg-pink '>создание аниме от вас</span>

        {/* <div className=' flex flex-col space-x-6 mt-6 '>

            <div className=' flex flex-col md:flex-row space-x-16 '>

                {post.map(post => (
                    <span className=' text-xl uppercase ' key={post.id}>{post.title}</span>
                    
                ))}

            </div>

                <div className=' flex '>

                    <ul className=' flex flex-col md:flex-row space-x-48 '>{post.map(post => (
                        <li key={post.id}>{post.Type}</li>
                    ))}</ul>

                </div>

        </div> */}

         

        <div className=' flex mt-10 gap-10 flex-wrap justify-center '>{post.map(post => (
            <img className=' w-[400px] justify-between  ' key={post.id} src={post.imageURL} alt="" />
        ))}</div>
         
    </div>
  )
}

export default Animedb