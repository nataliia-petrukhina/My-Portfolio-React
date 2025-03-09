import React from "react";

const Experience = () => {
  return (
    <div
      id="erfahrung"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36"
    >
      <h2 className="text-center text-5xl font-light">Erfahrung</h2>

      {/* Контейнер для двух колонок */}
      <div className="flex flex-wrap w-full md:flex-nowrap md:gap-10">
        {/* Левая колонка */}
        <div className="w-full md:w-1/2">
          <div className="relative space-y-1 border-l-2 border-gray-300 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">Erfahrung</h3>
            <p className="font-light text-lg text-gray-600"></p>
            <p className="text-sm text-gray-600">
              2013-2018 – Abschluss an der Odessa International Medical
              University mit dem Fachgebiet Apotheker (Pharmazie).
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-emerald-500"></span>
          </div>

          <div className="relative space-y-1 border-l-2 border-gray-300 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">Erfahrung</h3>
            <p className="font-light text-lg text-gray-600"></p>
            <p className="text-sm text-gray-600">
              2018-2021 – Tätigkeit bei der französischen Firma Servier als
              medizinischer Vertreter im Bereich kardiologischer Medikamente.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-emerald-500"></span>
          </div>

          <div className="relative space-y-1 border-l-2 border-gray-300 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">Erfahrung</h3>
            <p className="font-light text-lg text-gray-600"></p>
            <p className="text-sm text-gray-600">
              2021-2022 – Gründung der Marke Le Correcteur Completif
              (Maßanfertigung von Damenkorsetts).
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-emerald-500"></span>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="w-full md:w-1/2">
          <div className="relative space-y-1 border-l-2 border-gray-300 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">Erfahrung</h3>
            <p className="font-light text-lg text-gray-600"></p>
            <p className="text-sm text-gray-600">
              2023-2024 – Selbststudium auf der Plattform Udemy (HTML, CSS).
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-emerald-500"></span>
          </div>

          <div className="relative space-y-1 border-l-2 border-gray-300 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">Erfahrung</h3>
            <p className="font-light text-lg text-gray-600"></p>
            <p className="text-sm text-gray-600">
              2023-2025 Studium der deutschen Sprache, B2-Zertifikat
              (Telc-Prüfung) <br />
              2024-2025 Studium der deutschen Sprache auf der Plattform Lingoda
              (C1-Niveau)
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-emerald-500"></span>
          </div>

          <div className="relative space-y-1 border-l-2 border-gray-300 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">Erfahrung</h3>
            <p className="font-light text-lg text-gray-600"></p>
            <p className="text-sm text-gray-600">
              2024-2025 – Weiterbildung an der Digital Career Institute <br />
              (JavaScript Fullstack Development).
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-emerald-500"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
