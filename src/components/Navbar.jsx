import React from "react";
import Book from '../assets/img/book.svg'
import House from '../assets/img/house-door.svg'
import Tutorial from '../assets/img/icon-tutorial.svg'
import Kelas from '../assets/img/icon-kelas.svg'
import Search from '../assets/img/search.svg'


export default function Navbar() {
  return (
    <nav className="bg-teal-600 text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Petani Kode</span>
        </a>

        <div className="flex items-center space-x-6">

          <img src={House} alt=""  className="border-white h-5 w-5 mr-2"/>
          <a href="#artikel" className="flex items-center hover:text-teal-300 transition">Home
          </a>

            <img src={Kelas} alt=""  className="h-5 w-5 mr-2"/>
          <a href="#" className="flex items-center hover:text-teal-300 transition">Kelas
          </a>

            <img src={Tutorial} alt=""  className="h-5 w-5 mr-2"/>
          <a href="#" className="flex items-center hover:text-teal-300 transition">Tutorial
          </a>

            <img src={Book} alt=""  className="h-5 w-5 mr-2"/>
          <a href="#" className="flex items-center hover:text-teal-300 transition">Buku
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <img src={Search} alt="" className="hover:text-white"/>

          <a
            href="#newsletter"
            className="bg-white text-teal-600 px-4 py-2 rounded-full font-semibold hover:bg-teal-50 transition"
          >
            Join Newsletter
          </a>

        </div>
      </div>
    </nav>
);
}

