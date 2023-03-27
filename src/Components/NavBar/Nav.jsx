import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";

function Nav() {

  return (
    <>

        <nav className=''>

            <div className='flex items-center justify-between'>

                <div>

                    <span className=' text-2xl uppercase '>Animezu</span>

                </div>

                <div className=' hidden space-x-6 md:flex gap-[60px] '>

                    <a href="#free" className=' hover:text-bg-pink duration-300 ' >Аниме</a>
                    <Link to="/Manga" className=' hover:text-bg-pink duration-300 '>Манга</Link>
                    <a href="" className=' hover:text-bg-pink duration-300 '>Персонажи</a>
                    <Link to="/Createanime" className=' hover:text-bg-pink duration-300 '>Cоздать аниме</Link>

                </div>

                <div className=' hidden md:flex space-x-5 items-center '>

                    <Link className=' flex justify-center items-center  w-[118px] h-[40px] hover:bg-bg-pink hover:text-[#fff] ease-in duration-300 border border-[#be00fd] text-black `op`acity-80 rounded-md text-sm '>Войти</Link>
                    <Link to="/Chat" className=' flex justify-center items-center w-[118px] h-[40px] hover:bg-[#fff] hover:text-bg-pink hover:border hover:border-[#be00fd] bg-[#be00fd] text-white opacity-80 rounded-md text-sm '>Чат</Link>

                </div>
                

                <button id="menu-btn" class="block hamburger md:hidden focus:outline-none">

                    <span class="hamburger-top"></span>
                    <span class="hamburger-middle"></span>
                    <span class="hamburger-bottom"></span>

                </button>

            </div>

            <div class= "md:hidden">

                <div id="menu" class="absolute flex-col items-center hidden self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">

                    <a href="#">Аниме</a>
                    <a href="#">Манга</a>
                    <a href="#">Персонажи</a>
                    <a href="#">Cоздать аниме</a>

                </div>

            </div>

        </nav>
    
    </>
  )
}

export default Nav