import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sorcerers } from "../sorcerers"; // Adjust the import path as needed

export async function generateStaticParams() {
  return sorcerers.map((character) => ({
    id: character.id.toString(),
  }));
}

const CharacterPage = ({ params }) => {
  const character = sorcerers.find((c) => c.id.toString() === params.id);

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-red-900 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">{character.name}</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-96">
            <Image
              src={character.image}
              alt={character.name}
              layout="fill"
              objectFit="full"
            />
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-semibold mb-4">{character.name}</h2>
            <p className="text-gray-400 mb-2">
              <span className="font-semibold">Species:</span>{" "}
              {character.species}
            </p>
            <p className="text-gray-400 mb-2">
              <span className="font-semibold">Birthday:</span>{" "}
              {character.birthday}
            </p>
            <p className="text-gray-400 mb-2">
              <span className="font-semibold">Gender:</span> {character.gender}
            </p>
            <p className="text-gray-400 mb-2">
              <span className="font-semibold">Age:</span>{" "}
              {character.age.join(", ")}
            </p>
            <p className="text-gray-400 mb-2">
              <span className="font-semibold">Status:</span> {character.status}
            </p>
            <p className="text-gray-400 mb-2">
              <span className="font-semibold">Grade:</span> {character.grade}
            </p>
            <div className="mt-4">
              <h3 className="text-2xl font-semibold mb-2">Quote:</h3>
              <p className="italic text-lg">"{character.qoute}"</p>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-2">Appearance:</h3>
              <p className="text-gray-300">{character.appearance}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-2">Personality:</h3>
              <p className="text-gray-300">{character.personality}</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Link
            href="/products"
            className="bg-red-900 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition duration-300"
          >
            Back to All Characters
          </Link>
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

export default CharacterPage;
