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
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";



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



const AllSkillsSM = () => {
  return (
    <motion.div
    variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
    className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
        {skills.map((item,index)=>{
            return <div key={index} className="flex flex-col items-center">
                <item.icon className="text-7xl text-orange"/>
                <p className="text-center mt-4 text-white">{item.skill}</p>
            </div>
        })}
    </motion.div>
  )
}

export default AllSkillsSM