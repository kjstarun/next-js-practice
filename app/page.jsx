"use client"
import Movie from "./movie";
import "./globals.css";
import {useState} from "react";

export default async function Home() {
  let res = {};
  await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
    .then((data) => data.json())
    .then((data) => (res = data));
  return (
    <>
      <div className="grid gap-16 grid-cols-fluid">
        {console.log("hi", res)}

        {res.results.map((movie) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          );
        })}
      </div>
    </>
  );
}
