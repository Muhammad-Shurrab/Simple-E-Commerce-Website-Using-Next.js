import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sorcerers } from "./sorcerers"; // Adjust the import path as needed

const ProductsPage = () => {
  const maleCharacters = sorcerers.filter(
    (character) => character.gender === "Male"
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-red-900 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">
            Jujutsu Kaisen: Male Characters
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {maleCharacters.map((character) => (
            <Link href={`/products/${character.id}`} key={character.id}>
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={character.image}
                    alt={character.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-semibold mb-2">
                    {character.name}
                  </h2>
                  <p className="text-gray-400 mb-2">Grade: {character.grade}</p>
                  <p className="text-gray-400 mb-2">Age: {character.age[0]}</p>
                  <p className="text-gray-400">Status: {character.status}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-red-900 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Jujutsu Kaisen Fan Page. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
