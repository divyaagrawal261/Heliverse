import "./App.css";
import "./index.css";
import logo from "./assets/MotionArtEffect-logo.png";
import RatingCard from "./components/RatingCard";
import img1 from "./assets/motionarteffect-img1.png";
import img2 from "./assets/motionarteffect-img2.png";
import img3 from "./assets/motionarteffect-img3.png";
import img4 from "./assets/motionarteffect-img5.png";
import img5 from "./assets/card1.png";
import img6 from "./assets/card2.png";
import logoes from "./assets/logoes.png";
import moon from "./assets/moon.png";
import like from "./assets/like.png";
import thunder from "./assets/thunder.png";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ApplyCard from "./components/ApplyCard";
import PluginCard from "./components/PluginCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App text-white overflow-x-hidden">
      <div className="navBar h-21 flex justify-center w-screen">
        <div className="maxWidth flex mt-5 p-[10px] w-full">
          <div className="logoContainer p-3 w-[20%]">
            <div className="w-full">
              <a className="w-full">
                <img
                  src={logo}
                  class="img-fluid rounded-top h-full w-full"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="buttonContainer p-3 flex justify-end w-[80%]">
            <div className="h-full lg:flex md:hidden sm:hidden">
              <button className="border-[2px] button h-fit px-9 py-4 bg-white rounded-md leading-4">
                <a className="text-lg text-black outfit leading-4 h-fit block">Purchase Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-screen">
      <div className="mainSection flex flex-wrap maxWidth w-full my-20"> 
        <div className="w-[25%] flex flex-wrap flex-start text-xl p-2">
          <div className="maxWidth2 h-fit flex flex-col pl-[15px] text-[20px] font-medium">
          <span className="break-words inline-block gradient bg-transparent bg-clip-text border-none text-black pb-2 text-left outfit"><span className="inline-block text-fill outline-1 leading-[28.8px] break-words outfit">Transform Your Website</span></span>
          <p className="text-lg font-light leading-6">With Motion Art Effect</p>
          </div>
        </div>
        <div className="w-[54%] p-2">
          <div className="flex flex-col">
            <div>
            <h1 className="xl:text-[65px] lg:text-[55px] font-medium lg:leading-[85px]  md:leading-snug sora mb-[10px] pr-2 md:text-[40px]">Attract Your Visitors Attention With Colorful <span className="break-words inline-block gradient bg-transparent bg-clip-text border-none text-black"><span className="inline-block text-fill">Motion Art Effect</span></span></h1>
          </div>
          </div>
          <p className="text-lg mt-2 outfit font-light leading-[28.8px] xl:mr-[100px] lg:mr-[100px] md:mr-0">
          Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. 
          </p>
        </div>
        <div className="w-[20%]"></div>
      </div>
      </div>
      <div className="flex justify-center w-screen">
        <div className="RatingSection flex flex-col text-2xl maxWidth p-2 w-full">
          <h2 className="outfit font-normal text-center break-words block text-[22px] leading-[22px] mb-[20px]">Trusted by thousands of users around the world</h2>
          <div className="flex flex-wrap pt-[50px]">
            <div className="xl:w-1/3 lg:w-1/3 md:w-1/2 first-line:sm:w-[100%] flex xl:justify-start lg:justify-start justify-center w-full">
            <RatingCard src={img2} />
            </div>
            <div className="xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-[100%] flex justify-center w-full sm:pt-11 md:pt-0 xl:pt-0 lg:pt-0">
            <RatingCard src={img1} className="md:w-1/3 sm:w-[100%]"/></div>
            <div className="xl:w-1/3 lg:w-1/3 sm:w-[100%] flex justify-center lg:justify-end xl:justify-end xl:pt-0 lg:pt-0 pt-11 w-full">
            <RatingCard src={img3} className="xl:w-1/3 lg:w-1/3 sm:w-[100%]"/></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-screen pt-24">
        <div className="maxWidth w-full flex">
          <div className="w-3/5 flex flex-col p-2">
            <div className="lg:mb-[20px]">
            <div className="text-4xl sora leading-snug mb-[10px] xl:text-[40px] lg:text-[40px] md:text-[30px] font-medium lg:leading-[60px]">Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</div>
            <div>
            <p className="mt-[5px] lg:text-lg lg:font-light lg:leading-[30px]outfit">Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
            </div>
            </div>
            <div className="mt-[10px]">
            <a className="text-2xl gradient-reverse rounded-[20px] text-white xl:w-2/5 lg:w-2/5 md:w-4/5 flex justify-between align-middle font-light md:leading-[20px] py-5 px-9 lg:text-[20px] md:text-[20px]">
            <span className="block">Purchase From Envato</span>
            <span><FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",}} /></span>
            </a></div>
          </div>
          <div className="w-2/5 p-2 flex justify-end">
          <div className="w-full flex justify-end">
          <img src={img4} alt="" className="w-1/2"/>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-screen lg:py-[100px]">
        <div className="maxWidth w-full flex xl:p-0 lg:p-0 ">
          <div className="flex flex-col align-middle w-full p-2">
            <p className="mx-auto mb-2 w-[50%] sora leading-snug font-medium lg:text-[40px] text-center md:text-[30px] md:pt-[80px]">Apply On Any Section Or Enable For Whole Page</p>
            <div className="w-full flex mt-14">
            <div className="w-1/2 p-2"><ApplyCard tag="Section" text="Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website." img={img5}/></div>
            <div className="w-1/2 p-2 mt-16"><ApplyCard tag="Page" text="Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation." img={img6}/></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-screen">
        <div className="maxWidth w-full flex">
          <div className="w-full rounded-[20px] applyCard flex flex-col align-middle py-11 px-6 m-[20px] border-2">
            <h1 className="text-[25px] sora text-center mb-4 w-full font-medium">Supported By All Popular Browsers</h1>
            <div className="w-full flex justify-center pb-4">
            <p className="break-words block text-center outfit w-[39%] lg:text-lg font-light leading-[30px]">Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
            </div>
            <div className="w-full flex justify-center mt-3">
              <img src={logoes}/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-screen lg:py-24 md:py-0">
        <div className="maxWidth w-full flex">
          <div className="w-full p-2 flex flex-col align-middle justify-center">
            <div className="w-1/2 flex flex-col self-center">
              <div className="w-full text-center">
                <h2 className="text-[40px] sora block break-words leading-snug font-medium">An All-Round Plugin With Powerful Features</h2>
              </div>
              <div className="w-full mt-2 px-7">
                <p className="text-lg text-center outfit font-light leading-[30px]">Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
              </div>
            </div>
            <div className="w-full flex lg:flex-nowrap pt-11">
              <PluginCard src={thunder} title="Light Weight" desc="Motion Art for Elementor is designed to be lightweight."/>
              <PluginCard src={like} title="100% Responsive" desc="Create a consistent visual experience across all devices."/>
              <PluginCard src={moon} title="User Friendly Interface" desc="Ensure a smooth experience for both applicants and administrators."/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
