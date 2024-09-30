import React from "react";
import { Home } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-red-900 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Jujutsu Kaisen: About Us</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <Home className="mr-2" /> The World of Curses
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Jujutsu Kaisen is set in a world where Curses run rampant, feeding
            on human emotions and creating chaos. These supernatural forces are
            invisible to most, but there are those who stand against the
            darkness.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <Home className="mr-2" /> Rise of Jujutsu Sorcerers
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The anime follows the story of Yuji Itadori, a high school student
            who joins a secret organization of Jujutsu Sorcerers to battle
            against Curses. These sorcerers use their innate magical energy,
            known as Cursed Energy, to protect humanity from supernatural
            threats.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Key Events in Jujutsu Kaisen History
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>2018: Manga serialization begins in Weekly Shōnen Jump</li>
            <li>October 2020: Anime adaptation premieres</li>
            <li>December 2021: Jujutsu Kaisen 0 movie released</li>
            <li>July 2023: Second season of the anime airs</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Impact and Legacy</h2>
          <p className="text-gray-300 leading-relaxed">
            Jujutsu Kaisen has quickly become one of the most popular modern
            anime series, praised for its unique power system, compelling
            characters, and high-quality animation. It continues to captivate
            audiences worldwide, expanding its reach through manga, anime, and
            films.
          </p>
        </section>
      </main>

      <footer className="bg-red-900 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Jujutsu Kaisen Fan Page. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
