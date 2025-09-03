import React, { useState } from "react";
import NavbarMain from './navbar/NavbarMain';

const certifications = [
  {
    title: "UI/UX Design",
    issuer: "SEEREE",
    year: "2025",
    image: "/public/images/certificate1.png",
    description: "Covers HTML, CSS, JavaScript, and responsive web design principles."
  },
  {
    title: "Database Management",
    issuer: "SEEREE",
    year: "2025",
    image: "/public/images/certificate2.png",
    description: "Covers SQl, MySQL,PlSQL, MongoDB, and Oracle databases."
  },
    {
    title: "Java Programming",
    issuer: "oneroadmap",
    year: "2025",
    image: "/public/images/certificate2.png",
    description: "Java programming fundamentals, object-oriented programming, and core Java concepts."
  }
  ,  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    image: "/public/images/certificate2.png",
    description: "Focuses on JavaScript ES6, algorithms, and data structures."
  }

];

const CertificationPage = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <NavbarMain />
      <div className="pt-32">
        <div className="max-w-3xl mx-auto mt-8 p-8 bg-gradient-to-br from-brown to-cyan-900 shadow-2xl rounded-3xl text-white border-2 border-cyan-700">
          <h2 className="text-4xl font-extrabold text-cyan mb-10 text-center drop-shadow-lg tracking-wide">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-brown/80 rounded-xl p-6 shadow-lg border-l-4 border-orange-400 flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelected(cert)}
              >
                <img src={cert.image} alt={cert.title} className="w-40 h-28 object-contain mb-4 rounded-md border border-cyan-700 bg-white" />
                <h3 className="text-xl font-bold text-orange mb-2 text-center">{cert.title}</h3>
                <p className="text-base text-cyan-200 mb-1">{cert.issuer}</p>
                <p className="text-sm text-white/70">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
        {selected && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-brown p-8 rounded-2xl shadow-2xl max-w-2xl w-full text-center relative border-2 border-cyan-700">
              <button
                className="absolute top-2 right-4 text-3xl text-cyan hover:text-orange transition-all"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <img src={selected.image} alt={selected.title} className="w-full max-w-xl h-80 object-contain mx-auto mb-6 rounded-md border border-cyan-700 bg-white" />
              <h3 className="text-3xl font-bold text-orange mb-3">{selected.title}</h3>
              <p className="text-lg text-cyan-200 mb-1">{selected.issuer}</p>
              <p className="text-base text-white/70 mb-3">{selected.year}</p>
              <p className="text-white/90 mb-2 text-lg">{selected.description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CertificationPage;
