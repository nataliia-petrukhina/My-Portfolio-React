import React from "react";
import CircularGallery from "./CircularGallery.jsx";
import "./CircularGallery.css";

const Projects = () => {
  return (
    <div id="projekte" style={{ height: "600px", position: "relative" }}>
      <h2 className="text-center text-5xl font-light mt-8">Projekts</h2>
      <CircularGallery
        bend={0}
        textColor="#808080"
        font="italic 40px Arial"
        borderRadius={0.05}
      />
    </div>
  );
};

export default Projects;
