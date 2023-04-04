import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import styles from "../../css/Home.module.css";
import "../../css/GenresPage.css"

function Music() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=Music`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="container">
        <div className="Pagetitle"><h1>Music</h1></div>
        {loading ? (
        <div className={"laoader"}>
        <span>Loading...</span>
    </div>
      ) : (
    <div className={styles.movies}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
          ))}
          </div>
      )}
    </div>
  );
}
export default Music;
