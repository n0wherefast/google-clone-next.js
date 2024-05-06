import Nav from "./components/Nav";
import Image from "next/image";
import google from "./asset/googlelogo_color_272x92dp.png"
import SearchBar from "./components/SearchBar";
import Footer from"./components/Footer"
export default function Home() {
  return (
    <main className=" flex justify-between  flex-col h-[120vh]  md:h-screen  ">
      <Nav/>
       <div className=" w-full h-G-H min-h-[210px]  sm:min-h-[92px] max-h-[590px] flex-shrink-0 box-border flex flex-col  items-center ">
        <div className=" h-[100%] mt-auto max-h-[92px] relative">
          <Image className=" max-w-[100%] max-h-[100%] object-contain object-[center_bottom] " src={google} alt="google"  />
        </div>
          <SearchBar/>
       </div>
       <Footer/>
    </main>
  );
}
