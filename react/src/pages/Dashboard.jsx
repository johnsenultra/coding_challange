import HeroImage from "../assets/hero-image.jpg";
import NodeImage from "../assets/node.png";
import ReactImage from "../assets/react.png";
import FirebaseImage from "../assets/firebase.png";
import HtmlImage from "../assets/html.png";
import CssImage from "../assets/css.png";
import JsImage from "../assets/js.png";
import GitImage from "../assets/git.png";
import GithubImage from "../assets/github.png";
import RestImage from "../assets/rest.png";
import MySql from "../assets/mysql.png";
import npm from "../assets/npm.png";
import MaterialUi from "../assets/mui.png";


export default function Dashboard() {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-[292px] mt-20 absolute -z-10 h-[292px] rounded-full top-[150px]"></div>
      <div className="w-[366px] hidden h-[366px] -z-1 rounded-full top-[140px] lg:absolute left-[640px]"></div>
      <div className="w-[366px] hidden h-[366px] lg:block -z-10 lg:absolute top-[407px] -right-[90px]"></div>
      <section id="home" className="scroll-pt-32 max-w-[1160px] w-full mx-auto mt-[45px] lg:mt-[70px]  px-[24px] xl:px-0">
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row gap-9">
          <div data-aos="fade-down-left" data-aos-duration="1000" className="max-w-[694px] w-full flex flex-col gap-4 lg:gap-[32px] ">
            <div>
              <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#DB5BFF] to-[#6F8EFF] text-5xl lg:text-[56px] font-bold via-[#A472FF] leading-[1.3] ">
                Crafting Innovative Solutions Through Code
              </h1>
            </div>
            <div className="w-full lg:max-w-[79%]">
              <p className="text-black lg:text-start md:text-center leading-[1.5]">
                Hello there! I&apos;m Johnsen Ultra, a <span className="font-bold"> Full-Stack Developer</span> with a passion
                for turning ideas into reality.
                I specialize in building scalable, efficient, and user-friendly web applications using
                cutting-edge technologies like <span className="font-bold">React,</span> <span className="font-bold">Node.js, </span> 
                <span className="font-bold">Firebase,</span> and more.
              </p>
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-[397px] relative">
            <img className="rounded-lg ml-auto w-full lg:h-[483px] object-cover" src={HeroImage} alt=""/>
          </div>
        </div>
      </section>    

      {/* Skills Section */}
      <section className="w-full mt-[168px] lg:px-0 bg-black">
        <div className="flex flex-col lg:flex-row justify-between items-center rounded-lg px-8 lg:gap-0 gap-3 lg:px-[45.5px] py-10 s mx-auto">
          <div className="w-full lg:w-1/2">
            <h1 className="text-[56px] text-white sm:text-center lg:text-start font-bold leading-[1] mb-3">Skills and Technologies</h1>
            <p className="text-white sm:text-center lg:text-start leading-[1.8]">
              My tech stack is a strategic blend of advanced tools designed
              to <span className="font-bold">deliver high-quality</span> , <span className="font-bold">scalable</span> ,
              and <span className="font-bold">efficient solutions</span> .
              It’s more than just a collection of technologies; it’s a
              competitive advantage that elevates your web development experience
              to new heights. Harness the power of my tech stack and step into the
              future of web development. 🚀
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 w-full lg:w-[474px] gap-[7px]">
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
              <img className="w-[50px] h-[50px]" src={HtmlImage} alt=""/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
              <img className="w-[50px] h-[50px]" src={CssImage} alt=""/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
              <img className="w-[50px] h-[50px]" src={JsImage} alt=""/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
              <img className="w-[50px] h-[50px]" src={GitImage} alt=""/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
              <img className="w-[50px] h-[50px] bg-white rounded-full" src={GithubImage} alt=""/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
              <img className="w-[50px] h-[50px]" src={FirebaseImage} alt=""/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
              <img className="w-[56px] h-[50px]" src={ReactImage} alt=""/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
              <img className="w-[80px] h-[50px]" src={RestImage} alt=""/>
            </div>
            <div className="col-span-1 py-6 flex justify-center items-center bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
              <img className="w-[50px] h-[50px]" src={NodeImage} alt=""/>
            </div>
            <div className="flex items-center justify-center col-span-1 py-6 bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
              <img className="w-[50px] h-[50px]" src={MySql} alt="" />
            </div>
            <div className="flex items-center justify-center col-span-1 py-6 bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
              <img className="w-[50px] h-[50px]" src={npm} alt="" />
            </div>
            <div className="flex items-center justify-center col-span-1 py-6 bg-[#222222]/[30%] border border-[#2C2C2C] rounded-lg">
              <img className="w-[50px] h-[50px]" src={MaterialUi} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full mt-[100px] lg:px-0">
        <div className="items-left px-8 lg:gap-0 gap-3 lg:px-[45.5px] py-10 s mx-auto">
          <div>
            <h1 className="text-[56px]  sm:text-center lg:text-start font-bold leading-[1] mb-3 ">Education</h1>
          </div>
          <div className="grid-cols-12 grid gap-4 mt-[23px]">
            <div className="col-span-12 p-4 text-white bg-black rounded-lg md:col-span-6">
              <p className="text-[1.2rem] uppercase font-bold mb-[8px] ">BASE40 BootCamp</p>
              <p>Sep 2023 - January 2024</p>
              <div>
                <ul>
                  <li>Completed an intensive Full-Stack Web Development Program</li>
                  <li>Intermidiate in React.js frontend-development</li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 p-4 text-white bg-black rounded-lg md:col-span-6">
              <p className="text-[1.2rem] uppercase font-bold mb-[8px]">University of Eastern Philippines</p>
              <span>Bachelor of Science Information Technology</span>
              <p>Expected May 2025</p>
              <span><p className="text-[1.2rem] mt-[25px] uppercase font-bold">Awards</p></span>
              <p className="mt-[10px]">Deas&apos; List 2023-2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
