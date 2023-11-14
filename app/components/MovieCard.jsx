import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-slate-500 pb-4 rounded-l hover:scale-[1.05] transition-all">
      <img
        className="rounded-t-lg"
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "http://via.placeholder.com/400"
        }
      />
      <div className="flex flex-col px-2">
        <div className="flex justify-between mt-2">
          <span>{movie.Type}</span>
          <p>{movie.Year}</p>
        </div>
        <h1>{movie.Title}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
