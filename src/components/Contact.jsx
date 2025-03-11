import React from "react";

const Contact = () => {
  return (
    <div
      id="Kontakt"
      className="flex min-h-screen font-sans w-full flex-col items-center justify-center gap-16 p-8"
    >
      <h1 className="text-center text-3xl sm:text-5xl text-black font-sans">
        Kontakt
      </h1>
      <form className="flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ihr Name"
            className="rounded-lg border-1 border-indigo-900 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-300"
          />
          <input
            type="text"
            placeholder="Ihr Nachname"
            className="rounded-lg border-1 border-indigo-900 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-300"
          />
          <input
            type="text"
            placeholder="E-Mail-Adresse"
            className="rounded-lg border-1 border-indigo-900 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-300"
          />
        </div>
        <textarea
          placeholder="Ihre Nachricht"
          className="h-32 w-full resize-none rounded-lg border-1 border-indigo-900 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-400"
        ></textarea>
        <button className="rounded-lg border-2 border-b-cyan-100 bg-indigo-800 px-6 py-3 font-semibold text-white transition-all  duration-200 hover:bg-indigo-400">
          Nachricht abschicken
        </button>
      </form>
    </div>
  );
};

export default Contact;
