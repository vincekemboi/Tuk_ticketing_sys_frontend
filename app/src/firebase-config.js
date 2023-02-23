import { initializeApp } from "firebase/app";
import{getAuth,GoogleAuthProvider,signInWithRedirect}from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBP0Y4ap-2UhL8p7ubuT007noGArqwP4Zk",
    authDomain: "tuk-ticketing-sys.firebaseapp.com",
    projectId: "tuk-ticketing-sys",
    storageBucket: "tuk-ticketing-sys.appspot.com",
    messagingSenderId: "933991275801",
    appId: "1:933991275801:web:f3cf2ac55ce412a3bef988"
  };
  
 
  const app = initializeApp(firebaseConfig);
  export const auth=getAuth (app);
  const provider = new GoogleAuthProvider();

  export const signInWithGoogle=()=>{
    signInWithRedirect(
          auth,provider
      ).then ((result)=>{
      console.log (result);
      })
    .catch ((error)=>
  {
      alert(error)
  })
  }