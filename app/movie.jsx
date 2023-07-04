"use client";

import Image from "next/image";
import Link from "next/link";

const Movie = ({ title, poster_path, release_date }) => {
  console.log("oih");
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h2>{title}</h2>
      <h3>{release_date}</h3>
      <Link href={`/route`}>
        <Image src={imagePath + poster_path} width={400} height={400} />
      </Link>
    </div>
  );
};
export default Movie;
