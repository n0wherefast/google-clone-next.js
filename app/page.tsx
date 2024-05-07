'use client'
import Nav, { Context } from "./components/Nav";
import Image from "next/image";
import google from "./asset/googlelogo_color_272x92dp.png"
import SearchBar from "./components/SearchBar";
import Footer from"./components/Footer"
import { useGlobalContext } from "./context/context";

export default function Home() {
  const context = useGlobalContext()
    const {isClick,setIsClick} : Context = context
    
    const closePredicitionLinst = () => {
       if(isClick === true){
        setIsClick(false)
       }
    }

  return (
    <main onClick={(()=> closePredicitionLinst())} className=" flex justify-between  flex-col h-[120vh]  md:h-screen  ">
      <Nav/>
       <div className=" mb-[10rem] md:mb-0  w-full h-G-H min-h-[210px]  sm:min-h-[92px] max-h-[590px] flex-shrink-0 box-border flex flex-col  items-center ">
        <div className=" flex items-center justify-center h-[100%] mt-auto max-h-[92px] relative">
          <Image className=" max-w-[70%] md:max-w-[100%] max-h-[100%] object-contain object-[center_bottom] " src={google} alt="google"  />
        </div>
          <SearchBar/>
       </div>
       <Footer/>
    </main>
  );
}
