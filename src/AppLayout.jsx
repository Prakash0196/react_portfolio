import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { Outlet, useNavigation } from 'react-router-dom';
import Preloader from "./PreLoader";
import {  useTransition } from "react"
import ScrollToTop from "./Scroll";




export const AppLayout=()=>{
    
      // const [isPending] = useTransition();
      // console.log("🚀 ~ AppLayout ~ isPending:", isPending)


        const navigation = useNavigation();
  const isPending = navigation.state === 'loading';
  console.log("🚀 ~ AppLayout ~ navigation.state:", navigation)

      // if (isPending) return <Preloader />;

      
    

    return(
        
        <>
          <ScrollToTop />
            <Navbar />
            {/* <Outlet /> */}
            {isPending ? <Preloader /> : <Outlet />}
            <Footer />
        </>
    )
}