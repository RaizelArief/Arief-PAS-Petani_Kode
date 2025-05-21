import React from "react";
import Petani from "../assets/img/Petani.svg";

export default function Hero() {
  return (
    <section className="bg-slate-800 text-white py-10">
      <div className="container mx-auto px-2 flex flex-col md:flex-row items-center">
        <div className=" gap-16 md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-6xl font-bold leading-tight mb-6">Petani Kode</h1>
          <p className="text-3xl px-3 font-light">
            Belajar budidaya kode <i>(coding)</i> dengan tutorial yang mudah
            dipahami. <i>Mostly</i> pakai Linux.
          </p>
          <div className="mt-5 flex flex-row gap-3 justify-center md:justify-start">
            <a
              href="#artikel"
              className="px-3 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg "
            >
             Mulai Belajar
            </a>
            <a
              href="#artikel"
              className="px-3 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg "
            >
              Join Newlester
            </a>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <img
            src={Petani}
            alt="Ilustrasi Petani"
            className="w-[500px] h-auto translate-y-30 drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
