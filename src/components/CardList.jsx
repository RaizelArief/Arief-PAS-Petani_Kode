import React, { useEffect, useState } from "react";
import Book1 from '../assets/Book/Book1.png'
import Book2 from '../assets/Book/Book2.png'
import Book3 from '../assets/Book/Book3.png'
import Book4 from '../assets/Book/Book4.png'
import Book5 from '../assets/Book/Book5.png'
import Book6 from '../assets/Book/Book6.png'

export default function CardList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 6)));
  }, []);

  const images = {
    1: Book1,
    2: Book2,
    3: Book3,
    4: Book4,
    5: Book5,
    6: Book6,
  };

  return (

          
    <div className="container mx-auto px-4 py-8">
      <div class="font-bold uppercase text-teal-600 dark:text-teal-400 text-sm mb-2">Update</div>
      <h2 class="text-3xl font-bold tracking-tight mb-2">Apa yang baru di Petani Kode? 🔥</h2>
      <p class="text-lg mb-8 text-slate-500 dark:text-slate-300">Baca artikel terbaru yang masih fresh dan hangat.</p>
      <div className="grid grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            {/* Gambar contoh */}
            <img
              src={images[post.id]}    
              alt={`Contoh Gambar ${post.id}`}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex-1 flex flex-col">
              {/* ID */}
              <span className="text-sm text-gray-500 mb-2">{post.id}</span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>

              {/* Body */}
              <p className="text-gray-600 flex-1">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
