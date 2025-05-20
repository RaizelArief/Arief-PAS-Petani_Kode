import React from "react";
import Card1 from "../assets/img/code-slash.svg";
import Card2 from "../assets/img/globe.svg";

const Card = () => {
  return (
    <div className="container mx-auto px-2 lg:max-w-7xl mt-16 text-start">
      <div className="font-bold uppercase text-teal-600 text-sm mb-2">
        Kategori Apa?
      </div>
      <h2 className="text-3xl font-bold mb-2">Mau belajar apa hari ini??</h2>
      <p class="text-lg mb-8 text-slate-500 dark:text-slate-300">
        Temukan tutorial berdasarkan minatmu.
      </p>

      {/* CARD */}
      <div className="m-5 grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl gap-3 shadow-lg w-auto h-60px p-6 hover:shadow-xl transition flex items-start">
          <div className="h-10 w-12 flex justify-center items-center rounded-xl">
            <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
              <svg
                class="h-6 w-6 stroke-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentcolor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 20l4-16m4 4 4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
            </span>
          </div>
          {/*card 1  */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1 text-gray-900">
              Basic Programming
            </h3>
            <p className="text-sm text-gray-600">
              Baca tutorial dasar-dasar pemrograman menggunakan C, C++, C#,
              Java, Javascript, dan masih banyak lagi.
            </p>
          </div>
        </div>
        {/* card 2 */}

        <div className="bg-white rounded-2xl px-6 py-8 shadow-lg gap-3 hover:shadow-xl transition flex items-start">
          <span class="inline-flex items-center justify-center p-2 bg-orange-500 rounded-md shadow-lg">
            <svg
              class="h-6 w-6 stroke-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentcolor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657.0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657.0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              ></path>
            </svg>
          </span>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1 text-gray-900">
              Web Programming
            </h3>
            <p className="text-sm text-gray-600">
              Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP,
              MySQL, Codeigniter, React, dan masih banyak lagi
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition flex items-start">
          <img
            src={Card1}
            alt="Basic Programming"
            className="bg-violet-700  border-white h-10 w-10 mr-4 rounded-x"
          />

          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1 text-gray-900">
              Tutorial Lainnya
            </h3>
            <p className="text-sm text-gray-600">
              Baca tutorial dalam kategori lainnya seperti Mobile programming,
              Game programming, IoT, Blockhain, dan masih banyak lagi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
