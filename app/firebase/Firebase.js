// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTfb_jAe_2skcIg2qsgnQmbzqCqC3RNB0",
  authDomain: "homepage-clone-auth.firebaseapp.com",
  projectId: "homepage-clone-auth",
  storageBucket: "homepage-clone-auth.appspot.com",
  messagingSenderId: "305138213549",
  appId: "1:305138213549:web:32c87f5d02e41a611c5c24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);
const provider =  new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth,provider).then((res) =>{
    const name = res.user.displayName
    const email = res.user.email
    const photoProfile  = res.user.photoURL
})
  .catch((err)=>{
    console.log(err) 
  })
}