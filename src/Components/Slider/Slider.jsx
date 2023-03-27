import React, { useRef } from 'react'
import { leftIcon, rightIcon } from "../../icons"
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper"; 

function Slider() {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

  return (
    <>

        <div className=' mt-10 md:mt-16 flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between md:items-center '>

        <span className=' text-4xl uppercase '>топ 6 аниме за неделю</span>
    
        <div className='flex space-x-[10px] '>
            <LeftOrRightBtn isRight={true} isDsabled={true} navigationPrevRef={navigationPrevRef} navigationNextRef={navigationNextRef} />
            <LeftOrRightBtn isRight={false} isDsabled={false} navigationPrevRef={navigationPrevRef} navigationNextRef={navigationNextRef} />
        </div>

        </div>

        <Carousel navigationPrevRef={navigationPrevRef} navigationNextRef={navigationNextRef} />

    </>
  )
}

export default Slider

function LeftOrRightBtn(props) {
    return ( <button ref={props.isRight ? props.navigationPrevRef : props.navigationNextRef} className={`${props.isRight ? "bg-transparent" : "bg-bg-pink" } w-[56px] h-[56px] border border-[#be00fd] flex justify-center items-center rounded-full `}>{props.isRight ? rightIcon : leftIcon}</button> );
}

function Carousel(props) {
    return ( 
        <div className='mt-10'>

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
            prevEl: props.navigationPrevRef.current,
            nextEl: props.navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = props.navigationPrevRef.current;
            swiper.params.navigation.nextEl = props.navigationNextRef.current;
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
            <img src="https://wotpack.ru/wp-content/uploads/2023/01/1652956346_20-adonius-club-p-povsednevnaya-zhizn-bessmertnogo-korolya-o-22.jpg" alt="Повседневная жизнь бессмертного короля" />
            <div className=' flex flex-col justify-between md:flex-row items-center space-x-5 mt-4'>
                <p className=' md:text-3xl uppercase '>повседневная жизнь бессмертного короля </p>
                <button className=' w-[118px] h-[40px] hover:bg-bg-pink hover:text-[#fff] ease-in duration-300 border border-[#be00fd] text-black `op`acity-80 rounded-md text-sm  '>смотреть</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className=' ' src="https://wallpapers.com/images/featured/r5aa4v805ovp5cv4.jpg" alt="Нарутo " />
            <div className=' flex flex-col justify-between md:flex-row items-center space-x-5 mt-4'>
                <p className=' md:text-3xl uppercase '>Нарутo</p>
                <button className=' w-[118px] h-[40px] hover:bg-bg-pink hover:text-[#fff] ease-in duration-300 border border-[#be00fd] text-black `op`acity-80 rounded-md text-sm  '>смотреть</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://kartinkof.club/uploads/posts/2022-09/1662338309_1-kartinkof-club-p-novie-i-krasivie-kartinki-ataka-titanov-1.jpg" alt="Атака титанов" />
            <div className=' flex flex-col justify-between md:flex-row items-center space-x-5 mt-4'>
                <p className=' md:text-3xl uppercase '>Атака титанов</p>
                <button className=' w-[118px] h-[40px] hover:bg-bg-pink hover:text-[#fff] ease-in duration-300 border border-[#be00fd] text-black `op`acity-80 rounded-md text-sm  '>смотреть</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://m.media-amazon.com/images/M/MV5BMDAyYzY1YmQtNDI2OS00Y2Q1LTg4ZDktYWIwNjdkOTZkODAzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="one punch man" />
            <div className=' flex flex-col justify-between md:flex-row items-center space-x-5 mt-4'>
                <p className=' md:text-3xl uppercase '>one punch man</p>
                <button className=' w-[118px] h-[40px] hover:bg-bg-pink hover:text-[#fff] ease-in duration-300 border border-[#be00fd] text-black `op`acity-80 rounded-md text-sm  '>смотреть</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://wotpack.ru/wp-content/uploads/2023/01/imgpreview.jpg" alt="Человек-бензопила" />
            <div className=' flex flex-col justify-between md:flex-row items-center space-x-5 mt-4'>
                <p className=' md:text-3xl uppercase '>Человек-бензопила</p>
                <button className=' w-[118px] h-[40px] hover:bg-bg-pink hover:text-[#fff] ease-in duration-300 border border-[#be00fd] text-black `op`acity-80 rounded-md text-sm  '>смотреть</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://cdn-cf-east.streamable.com/image/ucj89.jpg?Expires=1678865700&Signature=WBkG9jiBV2mXrOplhBHQBXkbU5XAaI9QaMvyy3bcLBInWxtNqqeHDVMPLU0mKFgjkmNyIQ-dNvZ6dn1GJF~huqsLCPI-6Uul8toY7uWy1tIbYzOITSk6z5GTCDNrLWEmhPRAQ5RWsxiodrolLya-6NuLiKqzxhjRMJGQypwmuDvrL08wis6hpQXEsZobTxAdfansZOD4MVaIublllYNR1r0zdPcHlDdIG9kXSVNUlsa-yVWFLdIcwEk2w5QHi5qeGhSqnesQfCN9yNcenp9yMhEeeRNgrntUF6NtWI0gWkNBm3B9ZYG6~zvxkeIk-pCRPu6hRZL0xgBbhVzE7FK9Zw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ" alt="Такиски гуль" />
            <div className=' flex flex-col justify-between md:flex-row items-center space-x-5 mt-4'>
                <p className=' md:text-3xl uppercase '>Такиски гуль</p>
                <button className=' w-[118px] h-[40px] hover:bg-bg-pink hover:text-[#fff] ease-in duration-300 border border-[#be00fd] text-black `op`acity-80 rounded-md text-sm  '>смотреть</button>
            </div>
        </SwiperSlide>
      </Swiper>

        </div>
     );
}

