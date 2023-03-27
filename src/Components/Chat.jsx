import e from 'cors';
import React from 'react'
import { useState } from "react";
import Nav from './NavBar/Nav'

function Chat() {

    // const [commentInp, setCommentInp] = useState();
    const [titleInp, setTitleInp] = useState("");
    const getinfo = titleInp;
    

    const onCreate = (e) => {
        e.preventDefault();
        console.log(titleInp)
      };
      
      

  return (
    <div className=' relative container mx-auto p-6 '>

        <Nav />

        <div className=' max-w-7xl mx-auto shadow-lg rounded p-10 mt-10 '>

             <div className='  '>
                <p className=' text-2xl text-bg-pink uppercase '>привет</p>

                {/* <img className=' w-[50px] rounded-full  ' src="https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png" alt="" />

                <input type="file" /> */}

             </div>

             <div className=' w-[250px] h-[100px] md:w-[1135px] md:h-[400px] flex flex-col justify-end items-end '>

                 <p className=' bg-bg-pink text-[#fff] w-[100px] rounded-xl p-2 text-center '>{getinfo}</p>

             </div>

             <div className=' mt-10 '>

                 <form onSubmit={onCreate} className=' space-y-4 md:space-y-0 md:space-x-4 '>

                    {/* <input type="text" value={commentInp} 
                    onChange={setCommentInp(e.target.value)} placeholder='написать' className=' bg-[#f9f9f9] w-[250px] md:w-[1020px] p-2 rounded-lg ' /> */}
                <input
                        value={titleInp}
                        onChange={(e) => setTitleInp(e.target.value)}
                        className="bg-[#f9f9f9] w-[250px] md:w-[1020px] p-2 rounded-lg "
                        type="text"
                        placeholder="написать"
                        />
                    <input type="submit" onChange={getinfo} className=' hover:bg-bg-pink hover:text-[#fff] ease-in duration-300 rounded-lg border border-[#be00fd] text-black p-2  ' />
        
                 </form>

             </div>


        </div>
        
    </div>
  )
}

export default Chat