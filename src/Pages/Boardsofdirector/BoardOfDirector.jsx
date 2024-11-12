import React from 'react'
import './Boardofdirector.css'
const BoardOfDirector = ({data}) => {
  console.log(data,"data in bod");
  return (

       <div className="bod-cont-main w-[300px]  border border-gray-200 rounded-lg shadow bg-rgb(146 211 200) border-pink-200 ">
      <a href="#">
        <img className="rounded-t-lg h-[380px] w-[300px]" src={data[2]} alt="Noteworthy technology acquisitions 2021" />
      </a>
      <div className="p-5">

          <h5 className="mb-2 text-2xl font-bold   bod-name">
           {data[0]}
          </h5>

        <p className="mb-2 bod-Desg">
         {data[1]}
        </p>
       
      </div>
    </div>
  )
}

export default BoardOfDirector;
