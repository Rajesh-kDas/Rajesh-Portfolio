import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import SingleSkills from "./SingleSkills";


const skills = [
  { skill: 'HTML', icon: FaHtml5 },            
  { skill: 'CSS', icon: FaCss3 },
  { skill: 'Javascript', icon: IoLogoJavascript },
  { skill: 'React', icon: FaReact },
  { skill: 'Tailwind CSS', icon: RiTailwindCssFill },
  { skill: 'Java', icon: FaJava },
  { skill: 'Node.js', icon: FaNode },
  { skill: 'MySQL', icon: SiMysql },
  { skill: 'MongoDB', icon: BiLogoMongodb },

];


const AllSkills = () => {
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item,index)=>{
            return <SingleSkills 
            key={index} 
            text={item.skill} 
            imgSvg={<item.icon />}/>
        })}
    </div>
  );
};

export default AllSkills;