import React from 'react'
import back from './assets/back2.jpg'
import logo from './assets/tuklogo.png'
// import {FcGoogle} from 'react-icons/fc'
import {useState} from'react'
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {auth,signInWithGoogle} from './firebase-config'
import{GoogleButton}from 'react-google-button'




function Reg() {

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [user,setUser]= useState({});

    const register= async ()=>{
        try {
            const user = await createUserWithEmailAndPassword(
                auth,registerEmail,
                registerPassword
            )
            console.log (user);
        } catch (error) {
            alert(error)
        }
    }

  return (
  
 <section className='flex flex-row w-full min-h-screen justify-between bg-white'>
      <div className='w-1/2 min-h-screen p-4'>
       <div>

       <div className='text-black font-sans'>
          <img className='h-25 w-24 bg-transparent right-0 m-14' src={logo} />
          <h2 className='m-4 font-normal text-2xl'>Welcome !!</h2>
          <h4 className='m-4 text-xl font-normal'>
            Create your Account ...
          </h4>
        </div>
        <div className='flex flex-col text-center text-black w-96 align-middle p-4'>
              <input className='text-black text-left m-2 p-2 bg-transparent border border-neutral-800 rounded-lg hover:border-transparent' type={'email'} placeholder={'enter e-mail'} onChange={(event)=>{setRegisterEmail(event.target.value)}} />
              <input className='text-black text-left m-2 p-2 bg-transparent border border-neutral-800 rounded-lg  hover:border-transparent' type={'password'} placeholder={'enter password'} onChange={(event)=>{setRegisterPassword(event.target.value)}} />
              <input className='text-black text-left m-2 p-2 bg-transparent border border-neutral-800 rounded-lg  hover:border-transparent' type={'password'} placeholder={'confirm password'} />

              <button className='text-center text-white hover:text-black hover: border-neutral bg-[#008080] hover:bg-white m-2' type='submit' onClick={register}>SIGN IN</button>
              <p className='text-center flex align-middle hover: border-neutral justify-center  bg-[#fafcfc] text-white  hover:text-black hover:bg-white m-2' onClick={signInWithGoogle}><GoogleButton/></p>

            </div>

            <div className='text-black text-center p-1'>
              <h5>Already Registered? <a className='cursor-pointer'>Login</a></h5>
            </div>
       </div>

      </div>
      <div className='md:w-1/2 lg:w-1/2 min-h-screen justify-around sm:w-0 '>
        <img className='bg-transparent w-full h-full object-cover' src={back} />

      </div>
    </section>
   
  )
}

export default Reg;