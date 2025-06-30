
import { About } from "./About"
import { Contact } from "./Contact"
import "./index.css"
import { MainButton } from "./Main_button"
import { Project } from "./Projects"
import { Services } from "./Services"

export const MainSection=()=>{
    return (
        <>
        <section className="main py-5">
        <div className="container py-5">
            <div className="row py-5">
                <div className="col-lg-6 py-5 mr-auto">
                    <h3><small>Hello I'm</small><br />
                        <span>Prakash Kumar....</span>
                    </h3>
                    {/* <h6 className="pt-3 web">Web_Developement  </h6> */}
                   <div class="text-changer">
    <p class="intro-text">I am a</p>
    <div class="roles-container">
      <span class="role"> <h6>web development</h6>  </span>
      <span class="role"> <h6>react developer</h6> </span>
      <span class="role"> <h6>mern developer</h6></span>
      <span class="role"> <h6>full stack developer</h6> </span>
      {/* <span class="role"> <h6>lover</h6> </span> */}
    </div>
  </div>
                    <div className="gap-2">
                    <a href="#blog"><input type="button" value="My Work" className="bt1 mt-5 mr-3" style={{marginRight: "5px"}} /></a>
                    <a href="#contact"><input type="button" value=" Hire Me" className="bt2 mt-5" id="" /></a>
                    </div>
                   
                </div>
                <h4> Connect on: </h4>
                <div className="row py-3 gap-2">
                    <MainButton  link="https://www.linkedin.com/in/prakash-kumar-055203220/" name="logo-linkedin" />
                    <MainButton  link="https://github.com/Prakash0196" name="logo-github" />
                    <MainButton  link="https://x.com/PrakashK88963" name="logo-twitter" />
                </div>
                
            </div>
            
        </div>
       </section>
       <About />
       <Services />
       <Project />
       <Contact />
       </>
    )
}