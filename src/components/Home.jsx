import React from "react";
import image from "../../public/photo2.jpg";

const Home = () => {
  return (
    <div
      id="startseite"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img
          src={image}
          alt="my_photo"
          className="w-[200px] sm:w-[300px] rounded-full"
        />
        <div className="space-y-1 sm:space-y-3 ">
          <h1 className="bg-gradient-to-r from-teal-600 to-teal-200 bg-clip-text text-4xl font-semibold text-transparent md:text-4xl lg:text-5xl">
            Nataliia Petrukhina
          </h1>
          <h2>Webentwicklerin</h2>
          <p>
            Ich bin eine leidenschaftliche Webentwicklerin mit einem
            ausgeprägten Sinn für Ästhetik. Mit Kenntnissen in HTML, CSS,
            JavaScript und React kombiniere ich modernes Design mit Eleganz. Ich
            scheue keine Experimente, liebe aber auch die klassische Schönheit –
            stets mit dem Ziel, die perfekte Lösung für den Kunden zu finden.
            Aktuell vertiefe ich mein Wissen am Digital Career Institute, um
            noch raffiniertere und zeitlose Webauftritte zu gestalten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
