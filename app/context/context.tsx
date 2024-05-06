'use client'
import { useContext,createContext, ReactNode, useState } from "react"
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import {auth} from '../firebase/Firebase'


const AppContext = createContext({})

const Provider : React.FC<{children:ReactNode}> =({children}) =>{
    const [authData,setAuthData] = useState({})
    const provider =  new GoogleAuthProvider()

     const signInWithGoogle = () => {
      signInWithPopup(auth,provider).then((res) =>{
        setAuthData({
            name : res.user.displayName,
            email : res.user.email,
            photoProfile  : res.user.photoURL
        })
    })
      .catch((err)=>{
        console.log(err) 
      })
    }

    return(
        <AppContext.Provider value={{signInWithGoogle ,authData}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {Provider,useGlobalContext};