import React from "react";
import NavbarMain from "./navbar/NavbarMain";
import { IoLocationOutline, IoCalendarOutline } from "react-icons/io5";
import { PiGraduationCapDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const AcademicProgression = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarMain />
      <section className="pt-32">
        {" "}
        {/* Add padding to prevent content from being hidden behind the fixed navbar */}
        <div className="max-w-3xl mx-auto mt-8 p-8 bg-gradient-to-br from-brown to-cyan-900 shadow-2xl rounded-3xl text-white border-2 border-cyan-700">
          <h2 className="text-5xl font-extrabold text-cyan mb-10 text-center drop-shadow-lg tracking-wide">
            Academic Progression
          </h2>
          <div className="space-y-8">
            <div className="bg-brown/80 rounded-xl p-6 shadow-lg border-l-4 border-cyan-400 transition-transform duration-300 hover:scale-105 hover:border-cyan-600 hover:bg-cyan-900/40 cursor-pointer">
              <h3 className="text-2xl font-bold text-orange mb-2 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>
                Post Graduation (MCA of Computer Appliucation)
              </h3>
              <div className="flex flex-col gap-1 mb-1">
                <span className="flex items-center gap-2 text-cyan-300 text-lg">
                  <IoCalendarOutline className="inline text-lg" />
                  (2022-2024)
                </span>
                <span className="flex items-center gap-2 text-cyan-200 text-base font-semibold">
                  <PiGraduationCapDuotone className="inline text-xl" />
                  Odisha University of Agriculture & Technology
                </span>
              </div>
              <p className="text-base text-cyan-300 mb-1 flex items-center gap-1">
                <IoLocationOutline className="inline text-xl" /> Bhubaneswar,
                Odisha
              </p>
              <ul className="list-disc pl-6 mt-2 text-white/80 text-base space-y-1">
                <li>Specialization: Artificial Intelligence & Data Science</li>
                <li>Thesis: Deep Learning for Natural Language Processing</li>
                <li>Clubs: Coding Club, AI Research Group</li>
              </ul>
            </div>

            <div className="bg-brown/80 rounded-xl p-6 shadow-lg border-l-4 border-orange-400 transition-transform duration-300 hover:scale-105 hover:border-orange-600 hover:bg-orange-900/40 cursor-pointer">
              <h3 className="text-2xl font-bold text-orange mb-2 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-orange-400 rounded-full animate-pulse"></span>
                Bachelor's Degree in Physics
              </h3>
              <div className="flex flex-col gap-1 mb-1">
                <span className="flex items-center gap-2 text-orange-300 text-lg">
                  <IoCalendarOutline className="inline text-lg" />
                  (2019-2022)
                </span>
                <span className="flex items-center gap-2 text-orange-200 text-base font-semibold">
                  <PiGraduationCapDuotone className="inline text-xl" />
                  Maharaja Sriram Chandra Bhanja Deo University
                </span>
              </div>
              <p className="text-base text-orange-300 mb-1 flex items-center gap-1">
                <IoLocationOutline className="inline text-xl" /> Keonjhar,
                Odisha
              </p>
              <ul className="list-disc pl-6 mt-2 text-white/80 text-base space-y-1">
                <li>
                  Achievemnet: I graduated with a First Class Honours degree in
                  Physics, where I developed a deep understanding of scientific
                  principles, analytical reasoning, and mathematical
                  problem-solving. Throughout my studies, I actively
                  participated in various physics and chemistry workshops and
                  seminars, which enriched my knowledge of experimental methods,
                  research processes, and laboratory techniques.
                </li>
              </ul>
            </div>

            <div className="bg-brown/80 rounded-xl p-6 shadow-lg border-l-4 border-pink-400 transition-transform duration-300 hover:scale-105 hover:border-pink-600 hover:bg-pink-900/40 cursor-pointer">
              <h3 className="text-2xl font-bold text-orange mb-2 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-pink-400 rounded-full animate-pulse"></span>
                Intermediate in Science
              </h3>
              <div className="flex flex-col gap-1 mb-1">
                <span className="flex items-center gap-2 text-pink-300 text-lg">
                  <IoCalendarOutline className="inline text-lg" />
                  (2017-2019)
                </span>
                <span className="flex items-center gap-2 text-pink-200 text-base font-semibold">
                  <PiGraduationCapDuotone className="inline text-xl" />
                  Anchalika Mohavidyalaya Hatadihi
                </span>
              </div>
              <p className="text-base text-pink-200 mb-1 flex items-center gap-1">
                <IoLocationOutline className="inline text-xl" /> Keonjhar,
                Odisha
              </p>
              <ul className="list-disc pl-6 mt-2 text-white/80 text-base space-y-1">
                <li>
                  Achievements: In my intermediate education, I continued to
                  excel academically, particularly in subjects like Physics,
                  Chemistry, and Mathematics, which helped me strengthened my
                  analytical and problem-solving skills.
                </li>
              </ul>
            </div>

            <div className="bg-brown/80 rounded-xl p-6 shadow-lg border-l-4 border-pink-400 transition-transform duration-300 hover:scale-105 hover:border-pink-600 hover:bg-pink-900/40 cursor-pointer">
              <h3 className="text-2xl font-bold text-orange mb-2 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-pink-400 rounded-full animate-pulse"></span>
                Matriculation (10th Grade)
              </h3>
              <div className="flex flex-col gap-1 mb-1">
                <span className="flex items-center gap-2 text-pink-300 text-lg">
                  <IoCalendarOutline className="inline text-lg" />
                  (2014-2017)
                </span>
                <span className="flex items-center gap-2 text-pink-200 text-base font-semibold">
                  <PiGraduationCapDuotone className="inline text-xl" />
                  Salabani High School
                </span>
              </div>
              <p className="text-base text-pink-200 mb-1 flex items-center gap-1">
                <IoLocationOutline className="inline text-xl" /> Keonjhar,
                Odisha
              </p>
              <ul className="list-disc pl-6 mt-2 text-white/80 text-base space-y-1">
                <li>
                  Secured a position in the top 10% of the class.Participated in
                  various extracurricular activities, including science fairs,
                  science exebitions, and mathematics competitions.And also a
                  athelete in the school's sports team.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button
              className="bg-orange text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-cyan-700 hover:text-orange transition-all duration-300 border-2 border-orange hover:border-cyan-700"
              onClick={() => navigate("/certifications")}
            >
              Show Certifications
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademicProgression;
