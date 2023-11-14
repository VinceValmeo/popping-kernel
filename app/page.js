"use client";

import { useState, useEffect } from "react";
import searchIcon from "./assets/index";
import MovieCard from "./components/MovieCard";
import API from "./api/api";
export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchMovies = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Iron Man");
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="text-3xl">Popping Kernel 🍿</div>
      <div className="flex flex-row items-center gap-4 justify-center mb-10">
        <input
          className="rounded-md px-4 py-2 mt-4 bg-yellow-400 border-2 border-yellow-500 focus:border-none focus:border-yellow-600 focus:border-4"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={handleSearchInput}
        />

        <div className="">
          <img
            src={searchIcon}
            alt="search"
            className="bg-yellow-400"
            onClick={() => {
              searchMovies(searchTerm);
            }}
          />
        </div>
      </div>

      {movies?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((item) => {
            return (
              <div className="m-4 ">
                <MovieCard movie={item} />
              </div>
            );
          })}
        </div>
      ) : (
        <h1></h1>
      )}
    </main>
  );
}
