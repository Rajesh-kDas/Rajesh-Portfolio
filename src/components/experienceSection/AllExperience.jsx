import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";


const experiences = [
  {
    job: "Front-End Developer",
    company: "ABC Company",
    date: "2022 - Present",
    responsibilities: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur adipi.",
      "Lorem ipsum dolor sit amet consectetur adipisici.",
      "Lorem ipsum dolor sit amet consectetur adipisicinghd.",
    ],
  },
   {
    job: "Backend developer",
    company: "XYZ Company",
    date: "2023 - Present",
    responsibilities: [
       "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur adipi.",
      "Lorem ipsum dolor sit amet consectetur adipisici.",
    ],
  },
  {
    job: "Developer",
    company: "PQR Company",
    date: "2024 - Present",
    responsibilities: [
       "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur adipi.",
      "Lorem ipsum dolor sit amet consectetur adipisici dfhtherth hfaghaehetht.",
    ],
  },
];
const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index)=>{
        return(
        <>
         <SingleExperience key={index} experience={experience} />
         {index < 2 ? <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />: ""}
         </>
        );
      })}
    </div>
  )
}

export default AllExperience