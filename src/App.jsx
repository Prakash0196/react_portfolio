import { About } from "./About";
import { Navbar } from "./Navbar";
import { Contact } from "./Contact";
import Preloader from "./PreLoader";
import { Footer } from "./Footer";
import { MainSection } from "./MainSection";
import { Project } from "./Projects";
import { Services } from "./Services";
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { AppLayout } from "./AppLayout";
import { Blog } from "./Blog";



const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
  {
    path: '/',
    element: <MainSection />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/Project',
    element: <Blog />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },]
  },
  
]);

export const App = () => {
  return  <RouterProvider router={router} />
};




// export const App =()=>{
//   return(
//     <>
//       <Preloader />
//       <Navbar />
//       <MainSection />
//       <About />
//       <Services />
//       <Project />
//       <Contact />
//       <Footer /> 
//     </>
//   )
// }