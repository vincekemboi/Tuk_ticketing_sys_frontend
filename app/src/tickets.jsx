import React from 'react'
import{AiOutlineQuestionCircle}from "react-icons/ai";
import {SlList} from "react-icons/sl"

export default function tickets() {


  return (
    <>
   <div type='container' className=' absolute h-full w-44 bg-slate-400'></div> 
    <div>
      <ul classname='absolute flex flex-row top-24 '>
      <li className='absolute left-56'>Tickets</li>
       <li className=' absolute right-24 '> 
        <a href="" className='absolute text-green-600 h-20 w-20 '><AiOutlineQuestionCircle/></a><br />
        <h3 className='absolute font-thin text-xs'>Guide</h3>
       </li>
      </ul><br /><br /><br />
     

       < ul className='searchbar absolute flex flex-row space-x-40 left-56'>
      <li className=''>
        <h2>search by keyword</h2>
       <p > <input type="text" className='box-border border-2 border-black'/> </p>
      </li>
      <li className=''>
        <h2>status</h2>
       <p className='box-border border-2 border-black flex flex-row '> <input type="text" /><SlList className='w-6 h-6 p-1 '/> </p>
      </li>
      <li className=''>
         <h2>category</h2>
        <p className='box-border border-2 border-black flex flex-row '> <input type="text"  /> <SlList className='w-6 h-6 p-1 '/></p>
      </li>
      </ul>
    <br /><br /><br />
  
<table >
<thead className='absolute w-2/3' >
  <tr className=' absolute flex space-x-36 left-56 bg-slate-400 rounded-lg'>
  <th ><input type='checkbox'/></th>
  <th>date</th>
  <th>status</th>
  <th>agent</th>
  <th>preview</th>
  <th className='pr-8'>action</th>
  </tr>
</thead>
</table>
    </div>
    </>
  )
}
