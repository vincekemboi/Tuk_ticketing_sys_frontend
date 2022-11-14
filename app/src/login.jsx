import React from 'react'
import image from './assets/tuklogo.png'
import ninja from './assets/ninja.png'
import icon from './assets/google.png'

export default function login() {
  return (<>
  <meta name="viewport" content="width=device-width,height=device-height, initial-scale=1.0"></meta>
  <div class='md:items-center md:right-14'>
    <form action="" className='form '>  
      <button class='snup w-24 h-11 absolute left-3/4 lg:left-1/3  top-16  bg-white border-gray-800 rounded-md shadow-xl from-gray-800 box-border' >sign up</button><br /><br /><br /><br />
      <img class='img absolute w-15.5 h-29.2 left-52 lg:left-72' src={image}/><br /><br /><br /><br /><br /><br />
      <h1 class="greeting absolute  left-44 lg:left-64 font-serif font-semibold text-xl">Hello There!</h1><br /><br />
      <input type="text" class="e-mail box-border absolute h-12 w-96  lg:left-28 inset-x-10  text-base rounded-md bg-white  border-2 border-neutral-400 font-serif font-extalight" id="" placeholder='enter your e-mail' /> <br /><br /><br />
      <input type="password" class="pass box-border absolute h-12 w-96 inset-x-10 lg:left-28  text-base rounded-md bg-white  border-2 border-neutral-400 font-serif font-extralight" id="" placeholder='enter your password' /> <br /><br /><br />
      <button className='btn box-border absolute h-12 bg-teal-700 rounded-md w-96  inset-x-10 lg:left-28 font-semibold font-serif'>Login</button><br /><br /><br />
      <button className='btn1 box-border absolute w-96 rounded-md h-12 bg-white  border-2 border-neutral-400 font-serif  font-semibold inset-x-10 lg:left-28  '> <img class="icon absolute w-7 h-7 items-left p-1 " src={icon}/> Login with google</button><br /><br /> <br />
     <div class='acc left-36 font-serif absolute text-xl'>Dont have an account? <a href='#' class='text-teal-600'> signup</a></div>
    </form>
    
      <div className='lg:shrink-0'>
      <div className='lg:flex'>
    <img class='pic absolute  w=0 lg:w-6/12 top-0 left-2/4 h-0 lg:h-full  ' src={ninja} alt="" />
    </div>
    </div>
    </div>
    </>
  )
}
